import React from 'react';
import styled, {css} from 'styled-components';
import RoleLabel from './RoleLabel';
import {
  rowHeight,
  scrollableAreaWidth,
} from './styleConstants';

const horizontalMargin = 16;
const borderRadius = 4;
const checkedOrHoveredBackground = "#F7FAFC";

const Container = styled.div`
  position: relative;
  left: ${horizontalMargin}px;
  height: ${rowHeight}px;
  width: ${scrollableAreaWidth - 2 * horizontalMargin}px;
  border-radius: ${borderRadius}px;
  cursor: pointer;
  
  &:hover {
    background: ${checkedOrHoveredBackground};
  }
  
  ${props => props.checked && css`
    background: ${checkedOrHoveredBackground};
    
    &:before {
      content: "";
      display: inline-block;
      width: ${borderRadius}px;
      height: ${rowHeight}px;
      border-radius: ${borderRadius}px 0 0 ${borderRadius}px;
      background: #475DE5;
    }
  `}
`;

const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  position: absolute;
  left: 16px;
  top: 24px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
`;

const Img = styled.img`
  position: absolute;
  left: 44px;
  top: 16px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const textCSS = css`
  position: absolute;
  left: 88px;
  width: 289px;
  height: 21px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Name = styled.div`
  ${textCSS}
  top: 14px;
  font-weight: 500;
  color: #2D3748;
`;

const Email = styled.div`
  ${textCSS}
  top: 34px;
  color: #718096;
`;

function User(props) {
  return (
    <Container>
      <Checkbox />
      <Img src={props.avatar} />
      <Name>{props.name}</Name>
      <Email>{props.email}</Email>
      <RoleLabel role={props.role} />
    </Container>
  );
}

export default User;
