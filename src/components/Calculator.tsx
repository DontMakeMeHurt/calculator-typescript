import React, { useState , FormEvent } from 'react';
import { styled } from '@stitches/react';
import { Button, ButtonType } from './Button';

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

type Button = {
    type?: ButtonType,
    label: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Calculator: React.FC<{}> = ({}) => {

    const [currentValue, setCurrentValue] = useState('0');

    const handleValue = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const setDigit = (label: string) => {
        setCurrentValue(label);
    }

    return (
        <Container>
            <CalculatorStyle>
            <StyleDisplay>{currentValue}</StyleDisplay>
            <Grid>
                <Button onClick={handleClick} label="AC" />
                <Button onClick={handleClick} label="+/-" />
                <Button onClick={handleClick} label="%" />
                <Button onClick={handleClick} label="/" />
                <Button onClick={handleValue} type={ButtonType.Number} label="7" />
                <Button onClick={handleValue} type={ButtonType.Number} label="8" />
                <Button onClick={handleValue} type={ButtonType.Number} label="9" />
                <Button onClick={handleClick} label="*" />
                <Button onClick={handleValue} type={ButtonType.Number} label="4" />
                <Button onClick={handleValue} type={ButtonType.Number} label="5" />
                <Button onClick={handleValue} type={ButtonType.Number} label="6" />
                <Button onClick={handleClick} label="-" />
                <Button onClick={handleValue} type={ButtonType.Number} label="1" />
                <Button onClick={handleValue} type={ButtonType.Number} label="2" />
                <Button onClick={handleValue} type={ButtonType.Number} label="3" />
                <Button onClick={handleClick} label="+" />
                <Button onClick={handleValue} type={ButtonType.Number} label="0" />
                <Button onClick={handleClick} label="Del" />
                <Button onClick={handleClick} label="." />
                <Button onClick={handleClick} label="=" />
            </Grid>
            </CalculatorStyle> 
        </Container>
    )
}

export default Calculator;





