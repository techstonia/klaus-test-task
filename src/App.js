import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import Header from './Header';
import UsersList from './UsersList';
import {
  colors,
  scrollableAreaWidth,
} from './styleConstants';

const GlobalStyle = createGlobalStyle`
  body, button {
    margin: 0;
    padding: 0;
    background: ${colors.gray20};
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  button {
    outline:none;
    background: none;
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
      <UsersList />
    </Container>
  );
}

export default App;
