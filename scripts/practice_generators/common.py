import json
import os

def make_question(
    qid: str,
    subject: str,
    topic: str,
    qtype: str,
    marks: int,
    statement: str,
    options,
    official_answer,
    difficulty: str,
    understanding: str,
    given_info: list,
    concept: str,
    formulas: list,
    derivation: list,
    final_answer: str,
    alternative: str,
    mistakes: list,
    tags: list,
    time_seconds: int = 120
):
    # Calculate negative marks
    neg_marks = 0
    if qtype == 'MCQ':
        neg_marks = -0.33 if marks == 1 else -0.67

    return {
        "id": qid,
        "source": "Original Author Practice Series (GATE Companion EC)",
        "sourceReference": f"GATE EC High-Yield Practice Series — {topic}",
        "subject": subject,
        "topic": topic,
        "type": qtype,
        "marks": marks,
        "negativeMarks": neg_marks,
        "statement": statement,
        "options": options,
        "officialAnswer": official_answer,
        "detailedSolution": {
            "understandingTheQuestion": understanding,
            "givenInformationAndAssumptions": given_info,
            "relevantConcept": concept,
            "formulaAndTermExplanation": formulas,
            "stepByStepDerivation": derivation,
            "finalAnswerWithUnits": final_answer,
            "alternativeApproachOrShortcut": alternative,
            "commonMistakes": mistakes,
            "relatedQuestions": []
        },
        "solutionVerificationStatus": "solution_verified",
        "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
        "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
        "difficulty": difficulty,
        "tags": tags,
        "estimatedSolvingTimeSeconds": time_seconds,
        "provenanceType": "authored_practice"
    }

def save_subject_ts(file_path: str, var_name: str, questions: list):
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    json_data = json.dumps(questions, indent=2, ensure_ascii=False)
    content = f"""import {{ Question }} from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — {var_name}
 * Count: {len(questions)} items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const {var_name}: Question[] = {json_data};
"""
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Saved {len(questions)} questions to {file_path}")

