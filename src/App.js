import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import Header from './Header';
import {scrollableAreaWidth} from './styleConstants';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #EDF2F7;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Container = styled.div`
  width: ${scrollableAreaWidth}px;
  margin: 32px auto;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
    </Container>
  );
}

export default App;
