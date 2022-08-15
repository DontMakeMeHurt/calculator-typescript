import React from 'react';
import {styled} from '@stitches/react';

const StyleButton = styled('button', {
    color: '#fff',
    border: 'none',
    fontSize: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#727171',
})

export enum ButtonType {
    Operator,
    Number
}

type ButtonProps = {
    type?: ButtonType,
    label: string,
    onClick: () => void,
}

const onClick = () => {
    onClick?.()
}

export const Button: React.FC<ButtonProps> = ({ label, onClick , type = ButtonType.Operator}) => {

    const styles: React.CSSProperties = {};

    if(type === ButtonType.Number) {
        styles.backgroundColor = 'pink';
        styles.color = '#fff';
    }
    console.log(styles.backgroundColor);
    return (
        <StyleButton onClick={onClick}>{label}</StyleButton>
    )
}