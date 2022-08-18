import React from 'react';
import {styled} from '@stitches/react';

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

type Display = {
    value: string
    backgroundColor?: string
}

export const Display: React.FC<Display> = ({value,backgroundColor}) => {

    return (
        <StyleDisplay style={{backgroundColor}}>{value}</StyleDisplay>
    )
}