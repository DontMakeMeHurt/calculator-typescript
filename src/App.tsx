import React from 'react';
import { styled } from '@stitches/react';
import Calculator from './components/Calculator';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh',
  minWidth: '100vw',
  alignItems: 'center',
  backgroundColor: 'grey'
})

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
