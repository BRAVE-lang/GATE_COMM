import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import React from 'react';
import { MathView } from '../components/common/MathView';
import { OptionSelector } from '../components/questions/OptionSelector';
import { NatInput } from '../components/questions/NatInput';
import { DetailedSolutionViewer } from '../components/questions/DetailedSolutionViewer';
import { WorkedSolution } from '../types/question';

describe('UI Component Rendering Tests', () => {
  it('MathView renders plain text and KaTeX math without throwing', () => {
    const { container } = render(
      <MathView content="Calculate the voltage $V_o = A(V_+ - V_-)$ in Volts." />
    );
    expect(container.textContent).toContain('Calculate the voltage');
    expect(container.querySelector('.katex')).toBeTruthy();
  });

  it('OptionSelector renders MCQ options and triggers onSelectOption', () => {
    const handleSelect = vi.fn();
    const options = [
      { id: 'A' as const, text: 'Option Alpha' },
      { id: 'B' as const, text: 'Option Beta' },
    ];

    render(
      <OptionSelector
        type="MCQ"
        options={options}
        selectedAnswer="A"
        onSelectOption={handleSelect}
      />
    );

    expect(screen.getByText('Option Alpha')).toBeInTheDocument();
    expect(screen.getByText('Option Beta')).toBeInTheDocument();

    const betaButton = screen.getByText('Option Beta').closest('button');
    if (betaButton) fireEvent.click(betaButton);
    expect(handleSelect).toHaveBeenCalledWith('B');
  });

  it('NatInput accepts numerical values and fires onChange', () => {
    const handleChange = vi.fn();
    render(<NatInput value="200" onChange={handleChange} />);

    const input = screen.getByPlaceholderText('e.g. -8.91 or 200');
    expect(input).toHaveValue('200');

    fireEvent.change(input, { target: { value: '250' } });
    expect(handleChange).toHaveBeenCalledWith('250');
  });

  it('DetailedSolutionViewer renders all core pedagogical sections', () => {
    const mockSolution: WorkedSolution = {
      understandingTheQuestion: 'Identify finite gain impact',
      givenInformationAndAssumptions: ['Gain A = 1000', 'R1 = 1k, Rf = 9k'],
      relevantConcept: 'Virtual ground non-ideal deviation',
      formulaAndTermExplanation: [
        {
          formula: 'A_{CL} = -\\frac{R_f/R_1}{1 + (1+R_f/R_1)/A}',
          terms: [{ term: 'A_{CL}', explanation: 'Closed loop gain' }],
        },
      ],
      stepByStepDerivation: ['Step 1: Write KCL', 'Step 2: Solve for Vo'],
      finalAnswerWithUnits: '-8.91 V',
      alternativeApproachOrShortcut: 'Use feedback factor beta = 0.1',
      commonMistakes: ['Assuming ideal virtual ground gives -9V'],
      relatedQuestions: [{ id: 'REL-1', title: 'Related Non-Inverting Op-Amp' }],
    };

    render(
      <DetailedSolutionViewer
        solution={mockSolution}
        verificationStatus="verified"
        provenance="Independent Original Illustrative Practice"
        provenanceType="authored_practice"
        officialAnswerText="-8.91"
      />
    );

    // Verify key section headings
    expect(screen.getByText(/1\. Understanding the Question/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. Given Information & Assumptions/i)).toBeInTheDocument();
    expect(screen.getByText(/3\. Relevant Core Concept/i)).toBeInTheDocument();
    expect(screen.getByText(/4\. Governing Formula & Term Definitions/i)).toBeInTheDocument();
    expect(screen.getByText(/5\. Step-by-Step Derivation & Calculations/i)).toBeInTheDocument();
    expect(screen.getByText(/-8\.91 V/i)).toBeInTheDocument();
    expect(screen.getByText(/6\. Exam Shortcut/i)).toBeInTheDocument();
    expect(screen.getByText(/7\. Common Mistakes/i)).toBeInTheDocument();
  });
});
