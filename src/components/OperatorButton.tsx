import React from 'react';
import { styled } from '@stitches/react';

interface OperatorButtonProps {
    operator: string,
    handleOperator: (operator: string) => void;
}

const StyleButton = styled('button', {
    color: '#fff',
    border: 'none',
    fontSize: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#727171',
    '&:hover': {
        backgroundColor: 'pink',
        cursor: 'pointer'
    }
})

export const OperatorButton: React.FunctionComponent<OperatorButtonProps> = ({ operator , handleOperator }) => {
    return (
        <StyleButton onClick={() => handleOperator(operator)}>{operator}</StyleButton>
    )
}