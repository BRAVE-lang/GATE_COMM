import os
import json
import time

from practice_generators.common import save_subject_ts
from practice_generators.gen_math import generate_math_questions
from practice_generators.gen_aptitude import generate_aptitude_questions
from practice_generators.gen_networks import generate_networks_questions
from practice_generators.gen_signals import generate_signals_questions
from practice_generators.gen_edc import generate_edc_questions
from practice_generators.gen_analog import generate_analog_questions
from practice_generators.gen_digital import generate_digital_questions
from practice_generators.gen_control import generate_control_questions
from practice_generators.gen_comms import generate_comms_questions
from practice_generators.gen_emt import generate_emt_questions

def main():
    print("=" * 70)
    print("BUILDING COMPLETE GATE EC PRACTICE QUESTION BANK (2,700+ QUESTIONS)")
    print("=" * 70)

    start_time = time.time()
    all_questions = []
    subject_counts = {}

    configs = [
        ("Engineering Mathematics", generate_math_questions, "src/data/practice/engineeringMathematics.ts", "ENGINEERING_MATHEMATICS_PRACTICE"),
        ("General Aptitude", generate_aptitude_questions, "src/data/practice/generalAptitude.ts", "GENERAL_APTITUDE_PRACTICE"),
        ("Network Theory", generate_networks_questions, "src/data/practice/networkTheory.ts", "NETWORK_THEORY_PRACTICE"),
        ("Signals and Systems", generate_signals_questions, "src/data/practice/signalsAndSystems.ts", "SIGNALS_AND_SYSTEMS_PRACTICE"),
        ("Electronic Devices", generate_edc_questions, "src/data/practice/electronicDevices.ts", "ELECTRONIC_DEVICES_PRACTICE"),
        ("Analog Circuits", generate_analog_questions, "src/data/practice/analogCircuits.ts", "ANALOG_CIRCUITS_PRACTICE"),
        ("Digital Circuits", generate_digital_questions, "src/data/practice/digitalCircuits.ts", "DIGITAL_CIRCUITS_PRACTICE"),
        ("Control Systems", generate_control_questions, "src/data/practice/controlSystems.ts", "CONTROL_SYSTEMS_PRACTICE"),
        ("Communications", generate_comms_questions, "src/data/practice/communications.ts", "COMMUNICATIONS_PRACTICE"),
        ("Electromagnetics", generate_emt_questions, "src/data/practice/electromagnetics.ts", "ELECTROMAGNETICS_PRACTICE"),
    ]

    for subj_name, generator_fn, ts_path, var_name in configs:
        print(f"\nGenerating {subj_name}...")
        qs = generator_fn()
        save_subject_ts(ts_path, var_name, qs)
        subject_counts[subj_name] = len(qs)
        all_questions.extend(qs)

    # Generate src/data/practice/index.ts
    index_path = "src/data/practice/index.ts"
    index_content = """import { Question } from '../../types/question';
import { ENGINEERING_MATHEMATICS_PRACTICE } from './engineeringMathematics';
import { GENERAL_APTITUDE_PRACTICE } from './generalAptitude';
import { NETWORK_THEORY_PRACTICE } from './networkTheory';
import { SIGNALS_AND_SYSTEMS_PRACTICE } from './signalsAndSystems';
import { ELECTRONIC_DEVICES_PRACTICE } from './electronicDevices';
import { ANALOG_CIRCUITS_PRACTICE } from './analogCircuits';
import { DIGITAL_CIRCUITS_PRACTICE } from './digitalCircuits';
import { CONTROL_SYSTEMS_PRACTICE } from './controlSystems';
import { COMMUNICATIONS_PRACTICE } from './communications';
import { ELECTROMAGNETICS_PRACTICE } from './electromagnetics';

/**
 * Complete High-Yield Authored Practice Bank for GATE EC
 * Total items: 2,700 high-yield questions
 * Topics: Complete coverage of all 10 GATE EC subjects
 * Provenance: authored_practice
 */
export const ALL_PRACTICE_QUESTIONS: Question[] = [
  ...ENGINEERING_MATHEMATICS_PRACTICE,
  ...GENERAL_APTITUDE_PRACTICE,
  ...NETWORK_THEORY_PRACTICE,
  ...SIGNALS_AND_SYSTEMS_PRACTICE,
  ...ELECTRONIC_DEVICES_PRACTICE,
  ...ANALOG_CIRCUITS_PRACTICE,
  ...DIGITAL_CIRCUITS_PRACTICE,
  ...CONTROL_SYSTEMS_PRACTICE,
  ...COMMUNICATIONS_PRACTICE,
  ...ELECTROMAGNETICS_PRACTICE,
];
"""
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
    print(f"\nCreated {index_path} aggregating {len(all_questions)} items.")

    # Validation
    print("\nAuditing and validating practice question bank...")
    seen_ids = set()
    topic_dist = {}
    diff_dist = {}
    type_dist = {}

    for q in all_questions:
        qid = q["id"]
        if qid in seen_ids:
            raise ValueError(f"Duplicate question ID found: {qid}")
        seen_ids.add(qid)

        subj = q["subject"]
        topic = q["topic"]
        topic_dist[f"{subj} -> {topic}"] = topic_dist.get(f"{subj} -> {topic}", 0) + 1
        diff_dist[q["difficulty"]] = diff_dist.get(q["difficulty"], 0) + 1
        type_dist[q["type"]] = type_dist.get(q["type"], 0) + 1

        # Check solution 8 sections
        sol = q["detailedSolution"]
        for sec in [
            "understandingTheQuestion",
            "givenInformationAndAssumptions",
            "relevantConcept",
            "formulaAndTermExplanation",
            "stepByStepDerivation",
            "finalAnswerWithUnits",
            "alternativeApproachOrShortcut",
            "commonMistakes"
        ]:
            if sec not in sol or not sol[sec]:
                raise ValueError(f"Missing section {sec} in question {qid}")

    # Write audit report
    os.makedirs("data/import_reports", exist_ok=True)
    report = {
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "total_practice_questions": len(all_questions),
        "subject_breakdown": subject_counts,
        "difficulty_distribution": diff_dist,
        "type_distribution": type_dist,
        "total_topics_covered": len(topic_dist),
        "topic_distribution": topic_dist,
        "build_duration_seconds": round(time.time() - start_time, 2),
        "validation_status": "ALL_PASSED_100_PERCENT"
    }

    with open("data/import_reports/practice_bank_expansion_report.json", "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2)

    print("\n" + "=" * 70)
    print("PRACTICE QUESTION BANK BUILD COMPLETE")
    print(f"Total Questions Generated: {len(all_questions)}")
    for subj, count in subject_counts.items():
        print(f"  - {subj}: {count}")
    print(f"Difficulty Breakdown: {diff_dist}")
    print(f"Question Type Breakdown: {type_dist}")
    print(f"Audit report saved to data/import_reports/practice_bank_expansion_report.json")
    print("=" * 70)

if __name__ == "__main__":
    main()

