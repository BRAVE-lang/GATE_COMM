-- ====================================================================
-- GATE Companion EC — Supabase PostgreSQL Database Schema
-- Milestone 2 Production Migration
-- ====================================================================

-- 1. Custom ENUM types for rigid data integrity
CREATE TYPE gate_subject_enum AS ENUM (
  'Engineering Mathematics',
  'General Aptitude',
  'Network Theory',
  'Signals and Systems',
  'Electronic Devices',
  'Analog Circuits',
  'Digital Circuits',
  'Control Systems',
  'Communications',
  'Electromagnetics'
);

CREATE TYPE gate_question_type_enum AS ENUM ('MCQ', 'MSQ', 'NAT');
CREATE TYPE gate_difficulty_enum AS ENUM ('Easy', 'Medium', 'Hard');
CREATE TYPE gate_provenance_type_enum AS ENUM ('authentic_pyq', 'authored_practice', 'ai_generated_practice');
CREATE TYPE gate_verification_status_enum AS ENUM ('verified', 'provisional', 'community_reviewed');

-- 2. Sources Metadata Table
CREATE TABLE IF NOT EXISTS gate_sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_name TEXT NOT NULL,
  exam_year INTEGER,
  exam_session TEXT,
  organizing_institute TEXT,
  licence TEXT DEFAULT 'Educational Fair Use',
  verified_answer_key_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Primary Questions Table
CREATE TABLE IF NOT EXISTS gate_questions (
  id TEXT PRIMARY KEY, -- e.g. 'GATE-2024-EC-Q28' or UUID
  source_id UUID REFERENCES gate_sources(id) ON DELETE SET NULL,
  source_paper TEXT NOT NULL,
  source_reference TEXT NOT NULL,
  exam_year INTEGER,
  exam_session TEXT,
  subject gate_subject_enum NOT NULL,
  topic TEXT NOT NULL,
  type gate_question_type_enum NOT NULL,
  marks SMALLINT NOT NULL CHECK (marks IN (1, 2)),
  negative_marks NUMERIC(3, 2) NOT NULL DEFAULT 0.0,
  statement TEXT NOT NULL,
  statement_hash TEXT UNIQUE NOT NULL, -- 32-bit FNV or SHA-256 for deduplication
  figure_type TEXT CHECK (figure_type IN ('svg', 'image')),
  figure_content TEXT, -- SVG XML string or Storage bucket URL
  figure_caption TEXT,
  official_answer JSONB NOT NULL, -- String 'B', Array ['A', 'C'], or Numerical Range [min, max]
  verification_status gate_verification_status_enum NOT NULL DEFAULT 'provisional',
  provenance_type gate_provenance_type_enum NOT NULL DEFAULT 'authentic_pyq',
  difficulty gate_difficulty_enum NOT NULL DEFAULT 'Medium',
  tags TEXT[] DEFAULT '{}',
  estimated_solving_time_seconds INTEGER DEFAULT 120,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Multiple Choice Options Table
CREATE TABLE IF NOT EXISTS gate_options (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id TEXT REFERENCES gate_questions(id) ON DELETE CASCADE,
  option_id VARCHAR(2) NOT NULL CHECK (option_id IN ('A', 'B', 'C', 'D')),
  option_text TEXT NOT NULL,
  is_correct BOOLEAN DEFAULT FALSE,
  UNIQUE(question_id, option_id)
);

-- 5. Detailed Worked Solutions Table (8 Essential Sections)
CREATE TABLE IF NOT EXISTS gate_solutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id TEXT UNIQUE REFERENCES gate_questions(id) ON DELETE CASCADE,
  understanding_the_question TEXT NOT NULL,
  given_info_and_assumptions JSONB NOT NULL DEFAULT '[]',
  relevant_concept TEXT NOT NULL,
  formulas_and_term_definitions JSONB NOT NULL DEFAULT '[]',
  step_by_step_derivation JSONB NOT NULL DEFAULT '[]',
  final_answer_with_units TEXT NOT NULL,
  alternative_approach_or_shortcut TEXT,
  common_mistakes JSONB NOT NULL DEFAULT '[]',
  related_question_ids TEXT[] DEFAULT '{}',
  verified_by TEXT,
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Quarantined Questions Table (for pipeline manual review)
CREATE TABLE IF NOT EXISTS gate_import_quarantine (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  raw_payload JSONB NOT NULL,
  error_reasons TEXT[] NOT NULL,
  detected_duplicate_of TEXT,
  similarity_score NUMERIC(3, 2),
  reviewed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- INDEXES FOR HIGH-PERFORMANCE FILTERING AND PAGINATION
-- ====================================================================
CREATE INDEX IF NOT EXISTS idx_gate_questions_subject ON gate_questions(subject);
CREATE INDEX IF NOT EXISTS idx_gate_questions_topic ON gate_questions(topic);
CREATE INDEX IF NOT EXISTS idx_gate_questions_year ON gate_questions(exam_year DESC);
CREATE INDEX IF NOT EXISTS idx_gate_questions_type ON gate_questions(type);
CREATE INDEX IF NOT EXISTS idx_gate_questions_difficulty ON gate_questions(difficulty);
CREATE INDEX IF NOT EXISTS idx_gate_questions_provenance ON gate_questions(provenance_type);
CREATE INDEX IF NOT EXISTS idx_gate_questions_verification ON gate_questions(verification_status);
CREATE INDEX IF NOT EXISTS idx_gate_questions_hash ON gate_questions(statement_hash);

-- Full-text search index
CREATE INDEX IF NOT EXISTS idx_gate_questions_statement_fts 
  ON gate_questions USING gin(to_tsvector('english', statement));

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================
ALTER TABLE gate_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE gate_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE gate_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE gate_solutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE gate_import_quarantine ENABLE ROW LEVEL SECURITY;

-- Public read access for questions and solutions
CREATE POLICY "Public Read Access for Questions" 
  ON gate_questions FOR SELECT USING (is_active = true);

CREATE POLICY "Public Read Access for Options" 
  ON gate_options FOR SELECT USING (true);

CREATE POLICY "Public Read Access for Solutions" 
  ON gate_solutions FOR SELECT USING (true);

-- ====================================================================
-- PAGINATION & FILTER RPC STORED PROCEDURE
-- ====================================================================
CREATE OR REPLACE FUNCTION get_paginated_questions(
  p_subject gate_subject_enum DEFAULT NULL,
  p_topic TEXT DEFAULT NULL,
  p_exam_year INTEGER DEFAULT NULL,
  p_type gate_question_type_enum DEFAULT NULL,
  p_difficulty gate_difficulty_enum DEFAULT NULL,
  p_provenance gate_provenance_type_enum DEFAULT NULL,
  p_verification gate_verification_status_enum DEFAULT NULL,
  p_search TEXT DEFAULT NULL,
  p_page INTEGER DEFAULT 1,
  p_page_size INTEGER DEFAULT 10
)
RETURNS TABLE (
  total_count BIGINT,
  question_json JSONB
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_offset INTEGER := (p_page - 1) * p_page_size;
BEGIN
  RETURN QUERY
  WITH filtered AS (
    SELECT q.*
    FROM gate_questions q
    WHERE (p_subject IS NULL OR q.subject = p_subject)
      AND (p_topic IS NULL OR q.topic = p_topic)
      AND (p_exam_year IS NULL OR q.exam_year = p_exam_year)
      AND (p_type IS NULL OR q.type = p_type)
      AND (p_difficulty IS NULL OR q.difficulty = p_difficulty)
      AND (p_provenance IS NULL OR q.provenance_type = p_provenance)
      AND (p_verification IS NULL OR q.verification_status = p_verification)
      AND (p_search IS NULL OR q.statement ILIKE ('%' || p_search || '%'))
      AND q.is_active = TRUE
  ),
  counted AS (
    SELECT COUNT(*) AS total FROM filtered
  )
  SELECT 
    c.total,
    to_jsonb(f.*)
  FROM filtered f
  CROSS JOIN counted c
  ORDER BY f.exam_year DESC NULLS LAST, f.id ASC
  LIMIT p_page_size
  OFFSET v_offset;
END;
$$;

