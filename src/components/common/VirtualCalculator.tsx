import React, { useState } from 'react';
import { X, Delete, Minimize2 } from 'lucide-react';

interface VirtualCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualCalculator: React.FC<VirtualCalculatorProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [isRad, setIsRad] = useState(true);
  const [memory, setMemory] = useState<number>(0);

  if (!isOpen) return null;

  const handleDigit = (d: string) => {
    if (display === '0' || display === 'Error') {
      setDisplay(d);
    } else {
      setDisplay(display + d);
    }
  };

  const handleOp = (op: string) => {
    if (display === 'Error') return;
    setDisplay(display + ' ' + op + ' ');
  };

  const handleClear = () => {
    setDisplay('0');
  };

  const handleDelete = () => {
    if (display === 'Error' || display.length <= 1) {
      setDisplay('0');
      return;
    }
    // If ends with space (operator), trim 3 chars
    if (display.endsWith(' ')) {
      setDisplay(display.slice(0, -3));
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const handleScientific = (fn: string) => {
    try {
      const val = parseFloat(display);
      if (isNaN(val)) return;

      let result = 0;
      switch (fn) {
        case 'sin':
          result = Math.sin(isRad ? val : (val * Math.PI) / 180);
          break;
        case 'cos':
          result = Math.cos(isRad ? val : (val * Math.PI) / 180);
          break;
        case 'tan':
          result = Math.tan(isRad ? val : (val * Math.PI) / 180);
          break;
        case 'asin':
          result = isRad ? Math.asin(val) : (Math.asin(val) * 180) / Math.PI;
          break;
        case 'acos':
          result = isRad ? Math.acos(val) : (Math.acos(val) * 180) / Math.PI;
          break;
        case 'atan':
          result = isRad ? Math.atan(val) : (Math.atan(val) * 180) / Math.PI;
          break;
        case 'sqrt':
          result = Math.sqrt(val);
          break;
        case 'sqr':
          result = val * val;
          break;
        case 'cube':
          result = val * val * val;
          break;
        case 'inv':
          result = 1 / val;
          break;
        case 'ln':
          result = Math.log(val);
          break;
        case 'log10':
          result = Math.log10(val);
          break;
        case 'exp':
          result = Math.exp(val);
          break;
        case '10x':
          result = Math.pow(10, val);
          break;
        case 'neg':
          result = -val;
          break;
        default:
          return;
      }

      // Format clean decimals
      const formatted = Math.abs(result) < 1e-12 ? '0' : String(Math.round(result * 1e8) / 1e8);
      setDisplay(formatted);
    } catch {
      setDisplay('Error');
    }
  };

  const handleEqual = () => {
    try {
      // Evaluate standard expression safely
      // Replace arithmetic tokens
      const sanitized = display
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/\^/g, '**');

      // Simple safe evaluation
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${sanitized})`)();
      if (typeof result === 'number' && !isNaN(result) && isFinite(result)) {
        setDisplay(String(Math.round(result * 1e8) / 1e8));
      } else {
        setDisplay('Error');
      }
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-slate-800/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-xs tracking-wider uppercase text-slate-300">GATE Virtual Calculator</span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsRad(!isRad)}
              className="text-[10px] px-2 py-0.5 rounded bg-slate-700 hover:bg-slate-600 font-mono text-indigo-300 transition"
            >
              {isRad ? 'RAD' : 'DEG'}
            </button>
            <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Display Screen */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 text-right">
          <div className="text-xs text-slate-500 font-mono h-4 overflow-hidden text-ellipsis">
            {isRad ? 'Mode: Radians' : 'Mode: Degrees'} | Mem: {memory}
          </div>
          <div className="text-2xl font-mono tracking-tight font-semibold text-emerald-400 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            {display}
          </div>
        </div>

        {/* Keypad */}
        <div className="p-2.5 grid grid-cols-5 gap-1.5 bg-slate-900 text-xs font-medium">
          {/* Scientific row 1 */}
          <button onClick={() => handleScientific('sin')} className="calc-btn-fn">sin</button>
          <button onClick={() => handleScientific('cos')} className="calc-btn-fn">cos</button>
          <button onClick={() => handleScientific('tan')} className="calc-btn-fn">tan</button>
          <button onClick={() => handleScientific('ln')} className="calc-btn-fn">ln</button>
          <button onClick={() => handleScientific('log10')} className="calc-btn-fn">log₁₀</button>

          {/* Scientific row 2 */}
          <button onClick={() => handleScientific('sqrt')} className="calc-btn-fn">√x</button>
          <button onClick={() => handleScientific('sqr')} className="calc-btn-fn">x²</button>
          <button onClick={() => handleScientific('inv')} className="calc-btn-fn">1/x</button>
          <button onClick={() => handleScientific('exp')} className="calc-btn-fn">eˣ</button>
          <button onClick={() => handleScientific('10x')} className="calc-btn-fn">10ˣ</button>

          {/* Row 3 */}
          <button onClick={() => setDisplay(String(Math.PI))} className="calc-btn-fn">π</button>
          <button onClick={() => setDisplay(String(Math.E))} className="calc-btn-fn">e</button>
          <button onClick={handleClear} className="calc-btn-danger">C</button>
          <button onClick={handleDelete} className="calc-btn-action"><Delete className="w-3.5 h-3.5 mx-auto" /></button>
          <button onClick={() => handleOp('/')} className="calc-btn-op">÷</button>

          {/* Row 4 */}
          <button onClick={() => handleDigit('7')} className="calc-btn-num">7</button>
          <button onClick={() => handleDigit('8')} className="calc-btn-num">8</button>
          <button onClick={() => handleDigit('9')} className="calc-btn-num">9</button>
          <button onClick={() => handleOp('(')} className="calc-btn-fn">(</button>
          <button onClick={() => handleOp('*')} className="calc-btn-op">×</button>

          {/* Row 5 */}
          <button onClick={() => handleDigit('4')} className="calc-btn-num">4</button>
          <button onClick={() => handleDigit('5')} className="calc-btn-num">5</button>
          <button onClick={() => handleDigit('6')} className="calc-btn-num">6</button>
          <button onClick={() => handleOp(')')} className="calc-btn-fn">)</button>
          <button onClick={() => handleOp('-')} className="calc-btn-op">−</button>

          {/* Row 6 */}
          <button onClick={() => handleDigit('1')} className="calc-btn-num">1</button>
          <button onClick={() => handleDigit('2')} className="calc-btn-num">2</button>
          <button onClick={() => handleDigit('3')} className="calc-btn-num">3</button>
          <button onClick={() => handleScientific('neg')} className="calc-btn-fn">±</button>
          <button onClick={() => handleOp('+')} className="calc-btn-op">+</button>

          {/* Row 7 */}
          <button onClick={() => handleDigit('0')} className="calc-btn-num col-span-2">0</button>
          <button onClick={() => handleDigit('.')} className="calc-btn-num">.</button>
          <button onClick={handleEqual} className="calc-btn-equal col-span-2">=</button>
        </div>
      </div>
    </div>
  );
};

