import { Question } from '../../types/question';
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
