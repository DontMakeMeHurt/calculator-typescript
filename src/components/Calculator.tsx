import React from 'react';
import { styled } from '@stitches/react';
import { Button, ButtonType } from './Button';

const Container = styled('div', {
    backgroundColor: '#563c56',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const Grid = styled('div', {
    display: 'grid',
    gridGap: '10px',
    gridTemplateRows: 'repeat(5, 80px)',
    gridTemplateColumns: 'repeat(4, 80px)',
})

const Calculator: React.FC<{}> = ({ }) => {

    const handleClick = () => {

    }

    return (
        <Container>
            <Grid>
                <Button onClick={handleClick} label="AC" />
                <Button onClick={handleClick} label="+/-" />
                <Button onClick={handleClick} label="%" />
                <Button onClick={handleClick} label="/" />
                <Button onClick={handleClick} type={ButtonType.Number} label="7" />
                <Button onClick={handleClick} type={ButtonType.Number} label="8" />
                <Button onClick={handleClick} type={ButtonType.Number} label="9" />
                <Button onClick={handleClick} label="*" />
                <Button onClick={handleClick} type={ButtonType.Number} label="4" />
                <Button onClick={handleClick} type={ButtonType.Number} label="5" />
                <Button onClick={handleClick} type={ButtonType.Number} label="6" />
                <Button onClick={handleClick} label="-" />
                <Button onClick={handleClick} type={ButtonType.Number} label="1" />
                <Button onClick={handleClick} type={ButtonType.Number} label="2" />
                <Button onClick={handleClick} type={ButtonType.Number} label="3" />
                <Button onClick={handleClick} label="+" />
                <Button onClick={handleClick} type={ButtonType.Number} label="0" />
                <Button onClick={handleClick} label="Del" />
                <Button onClick={handleClick} label="." />
                <Button onClick={handleClick} label="=" />
            </Grid>
        </Container>
    )
}

export default Calculator;





