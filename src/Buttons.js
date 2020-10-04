import React from "react";
import styled from 'styled-components';
import {ReactComponent as Pen} from './assets/pen.svg';
import {ReactComponent as Trash} from './assets/trash.svg';
import {colors} from './styleConstants';

const background = "white";
const squareSideLength = 30;
const borderWidth = 1;

const Button = styled.button.attrs({
  type: "button",
})`
  display: inline-flex;
  align-items: center;

  height: ${squareSideLength + 2 * borderWidth}px;
  min-width: ${squareSideLength + 2 * borderWidth}px;
  cursor: pointer;
  background: ${background};
  
  border: ${borderWidth}px solid ${colors.gray30};  
  box-shadow: 0 1px 2px rgba(45, 55, 72, 0.08);
  border-radius: 4px;
`;

const StyledIcon = (Component) => styled(Component)`
  width: ${squareSideLength}px;
`;

const Text = styled.span`
  color: #4A5568;
  font-weight: 500;
  font-size: 14px;
  margin: 0 12px 0 1px;
  line-height: ${squareSideLength}px;
`;

const buttonWithIcon = (IconComponent) => {
  const Icon = StyledIcon(IconComponent);

  return (props) => {
    const {text, ...restOfProps} = props;
    return (
      <Button {...restOfProps}>
        <Icon/>
        {text && <Text>{text}</Text>}
      </Button>
    );
  };
};

export const DeleteButton = buttonWithIcon(Trash);
export const EditButton = buttonWithIcon(Pen);