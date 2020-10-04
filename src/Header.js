import React from 'react';
import styled from 'styled-components';
import {colors} from './styleConstants';

const height = 40;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${height}px;
  margin-bottom: 18px;
`;

const Title = styled.span`
  line-height: ${height}px;
  font-size: 18px;
  color: #1A202C;
  font-weight: 500;
`;

const ConnectUsersButton = styled.button.attrs({
  type: "button",
})`
  height: ${height}px;
  min-width: 122px;
  line-height: ${height}px;
  cursor: pointer;
  background: ${colors.brand};
  color: white;

  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 500;
`;

function Header() {
  return (
    <Container>
      <Title>Account users</Title>
      <span>
        <ConnectUsersButton>Connect users</ConnectUsersButton>
      </span>
    </Container>
  );
}

export default Header;
