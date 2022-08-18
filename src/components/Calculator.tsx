import React, { useState , FormEvent } from 'react';
import { styled } from '@stitches/react';
import {DigitButton } from '../components/DigitButton';
import { OperatorButton } from './OperatorButton';
import { Display } from './Display';

const Container = styled('div', {
    backgroundColor: 'darkslategrey',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '500px'
})

const CalculatorStyle = styled('div', {
    padding : '33px 19px 20px',
    width: '350px',
    minHeight: '500px',
    background: 'white',
    borderRadius: '40px',
})

const Grid = styled('div', {
    display: 'grid',
    gridGap: '10px',
    gridTemplateRows: ' repeat(5, 80px)',
    gridTemplateColumns: 'repeat(4, 80px)',
})

const StyleDisplay = styled('div', {
    fontSize: '30px',
    color: '305637',
    backgroundColor: 'pink',
    width: "350px",
    height: '100px',
    marginBottom: '20px',
    textAlign: 'right',
    lineHeight: '100px',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    marginTop: '40px'
})

// type Button = {
//     type?: ButtonType,
//     label: string,
//     onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
// }

// type CalculatorProps = {
//     currentValue: string,
//     setCurrentValue: string
// }

const Calculator: React.FC<{}> = () => {

    const [currentValue, setCurrentValue] = useState('0');
    const [operator, setOperator] = useState('');
    const [overwrite, setOverwrite] = useState(true);
    const [prevValue, setPrevValue] = useState('');

    const clear = () => {
        setPrevValue('');
        setOperator('');
        setCurrentValue('0');
        setOverwrite(true);
    }

    const deleteValue = () => {
        const newCurrentValue = setCurrentValue(currentValue.slice(0,-1))
        return newCurrentValue;
    }

    const percent = () => {
        const currentPercent = (parseInt(currentValue) / 100);
        return setCurrentValue(currentPercent.toString())
    }

    const handleDigit = (digit: string) => {
        if (currentValue[0] === '0' && digit === '0') return;
        if (currentValue.includes('.') && digit === '.') return;
        if (overwrite && digit !== '.') {
            setCurrentValue(digit);
        } else {
            setCurrentValue(`${currentValue}${digit}`);
        }
        setOverwrite(false)
    }

    const handleOperator = (operator: string) => {
        if (prevValue) {
            const val = calculate();
            setCurrentValue(`${val}`);
            setOperator(operator);
            setPrevValue(`${val}`);
        } else {
            setPrevValue(currentValue);
        }
        setOperator(operator);
        setOverwrite(true)
    }

    const calculate = () => {
        if(!prevValue || !operator) return currentValue;
        
        const curr = parseFloat(currentValue)
        const prev = parseFloat(prevValue)

        let result;
        
        switch(operator) { 
            case "+":
                result = prev + curr;
                break;
            case "-":
                    result = prev - curr;
                break;
            case "*":
                    result = prev * curr;
                break;
            case "÷":
                    result = prev / curr;
                break;
        }
        return result;
    }

    const equals = () => {
        const val = calculate();
        setCurrentValue(`${val}`);
        setPrevValue('');
        setOperator('');
        setOverwrite(true);
    }

    const opposite = () => {
        const newValue = (parseInt(currentValue) * (-1)).toString()
        return setCurrentValue(newValue.toString())
    }
    return (
        <Container>
            <CalculatorStyle>
                <Display value={currentValue} />
                <Grid>
                    <OperatorButton operator={"AC"} handleOperator={clear} />
                    <OperatorButton operator={"+/-"} handleOperator={opposite} />
                    <OperatorButton operator={"%"} handleOperator={percent} />
                    <OperatorButton operator={"+"} handleOperator={handleOperator} />
                    <DigitButton digit={'9'} handleDigit={handleDigit} />
                    <DigitButton digit={'8'} handleDigit={handleDigit} />
                    <DigitButton digit={'7'} handleDigit={handleDigit} />
                    <OperatorButton operator={"-"} handleOperator={handleOperator} />
                    <DigitButton digit={'6'} handleDigit={handleDigit} />
                    <DigitButton digit={'5'} handleDigit={handleDigit} />
                    <DigitButton digit={'4'} handleDigit={handleDigit} />
                    <OperatorButton operator={"*"} handleOperator={handleOperator} />
                    <DigitButton digit={'3'} handleDigit={handleDigit} />
                    <DigitButton digit={'2'} handleDigit={handleDigit} />
                    <DigitButton digit={'1'} handleDigit={handleDigit} />
                    <OperatorButton operator={"÷"} handleOperator={handleOperator} />
                    <DigitButton digit={"0"} handleDigit={handleDigit} />
                    <OperatorButton operator={"C"} handleOperator={deleteValue} />
                    <DigitButton digit={"."} handleDigit={handleDigit} />
                    <OperatorButton operator={"="} handleOperator={equals} />
                </Grid>
            </CalculatorStyle> 
        </Container>
    )
}

export default Calculator;





