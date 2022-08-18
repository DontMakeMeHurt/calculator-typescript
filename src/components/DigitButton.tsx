import React from 'react';
import { styled } from '@stitches/react';

export interface DigitButtonProps {
    digit: string,
    handleDigit: (digit: string) => void;  
    backgroundColor?:string;
}

const StyleButton = styled('button', {
    color: '#fff',
    border: 'none',
    fontSize: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    '&:hover': {
        cursor: 'pointer'
    }
})

export const DigitButton: React.FC<DigitButtonProps> = ({ digit, backgroundColor, handleDigit }) => {

    return (
        <StyleButton onClick={() => handleDigit(digit)} style={{backgroundColor}}>{digit}</StyleButton>
    )
}