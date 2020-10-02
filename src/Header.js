import React from 'react';
import styled from 'styled-components';

const height = 40;

const Container = styled.div`
  height: ${height}px;
  margin-bottom: 18px;
`;

const Title = styled.span`
  line-height: ${height}px;
  font-size: 18px;
  color: #1A202C;
  font-weight: 500;
`;

function Header() {
  return (
    <Container>
      <Title>Account users</Title>
    </Container>
  );
}

export default Header;
