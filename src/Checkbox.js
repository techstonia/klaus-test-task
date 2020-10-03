import React from "react";
import styled from 'styled-components';
import {ReactComponent as CheckMark} from './assets/checkmark.svg';
import {colors} from './styleConstants';

const Container = styled.span`
  position: relative;
`;

const Label = styled.label.attrs({
  htmlFor: "toggle",
})`
  position: absolute;
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid ${colors.gray40};
  border-radius: 3px;
  cursor: pointer;
`;

const Input = styled.input.attrs({
  type: "checkbox",
  id: "toggle",
})`
  position: absolute;
  display: none;
  margin: 0;
  width: 16px;
  height: 16px;

  &:checked ~ ${Label} {
    background: ${colors.brand};
    border-color: ${colors.brand};
  }
`;

const StyledCheckMark = styled(CheckMark)`
  position: absolute;
  left: 3px;
  top: 4px;
  pointer-events: none;
`;

export const CheckBox = (props) => {
  const {className, ...rest} = props;
  return (
    <Container className={className}>
      <Input {...rest} />
      <Label/>
      <StyledCheckMark />
    </Container>
  );
};

export default CheckBox;