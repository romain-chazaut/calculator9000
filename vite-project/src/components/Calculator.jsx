import { useState } from 'react';
import React from 'react';


import BeautifulScreen from './BeautifulScreen';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';
import ItSOverNineThousand from './ItSOverNineThousand';
import ResetButton from './ResetButton';

function Calculator() {
    const [currentOperation, setCurrentOperation] = useState('');
    const [result, setResult] = useState('');

    function handleNumberClick(value) {
        setCurrentOperation(prev => prev + value);
    }

    function handleOperatorClick(value) {
        setCurrentOperation(prev => prev + value);
    }

    function handleEqualClick() {
        try {
            setResult(eval(currentOperation));
            setCurrentOperation('');
        } catch(e) {
            setResult('Error');
        }
    }

    function handleResetClick() {
        {
            setResult('');
            setCurrentOperation('');
        }
    }

    return (
        <div className="calculator">
            <ItSOverNineThousand value={result} />
            <BeautifulScreen currentOperation={currentOperation} result={result} />
            <div className="buttons w4">
                {['7','8','9'].map(num => (
                    <NumberButton key={num} value={num} onClick={handleNumberClick} />
                ))}
                {['/'].map(op => (
                    <OperatorButton key={op} value={op} onClick={handleOperatorClick} />
                ))}
            </div>
            <div className="buttons w4">
                {['4','5','6'].map(num => (
                    <NumberButton key={num} value={num} onClick={handleNumberClick} />
                ))}
                {['+'].map(op => (
                    <OperatorButton key={op} value={op} onClick={handleOperatorClick} />
                ))}
            </div>
            <div className="buttons w4">
                {['1','2','3'].map(num => (
                    <NumberButton key={num} value={num} onClick={handleNumberClick} />
                ))}
                {['-'].map(op => (
                    <OperatorButton key={op} value={op} onClick={handleOperatorClick} />
                ))}
            </div>
            <div className="buttons w4">
                <NumberButton key={'0'} value={'0'} onClick={handleNumberClick} />
                {['.'].map(num => (
                <NumberButton key={num} value={num} onClick={handleNumberClick} />
                ))}
                <ResetButton onClick={handleResetClick} />
                {['*'].map(op => (
                <OperatorButton key={op} value={op} onClick={handleOperatorClick} />
                ))}
            </div>
            <div className="equals">
                <EqualButton onClick={handleEqualClick} />
            </div>
        </div>
    );
}

export default Calculator;
