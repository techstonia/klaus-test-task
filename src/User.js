import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {
  markUserAsSelected,
  markUserAsDeselected,
  selectUser,
} from './redux/usersSlice';
import RoleLabel from './RoleLabel';
import {
  colors,
  rowHeight,
  scrollableAreaWidth,
} from './styleConstants';
import Checkbox from './Checkbox';
import {
  EditButton,
  DeleteButton,
} from './Buttons';

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

const StyledCheckbox = styled(Checkbox)`
  position: absolute;
  left: 16px;
  top: 24px;
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
  color: ${colors.gray80};
`;

const Email = styled.div`
  ${textCSS}
  top: 34px;
  color: #718096;
`;

const ButtonsContainer = styled.span`
  position: absolute;
  left: 554px;
  top: 16px;
`;

const StyledEditButton = styled(EditButton)`
  margin-right: 4px;
`;

function User(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => selectUser(state, props.userId));
  const [hovered, setHovered] = useState(false);
  const onMouseOver = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  const onClick = () => {
    if (user.selected) {
      dispatch(markUserAsDeselected(user.id));
    }
    else {
      dispatch(markUserAsSelected(user.id));
    }
  };

  const stopPropagation = (evt) => evt.stopPropagation();

  const renderButtons = () => {
    if (hovered) {
      return (
        <ButtonsContainer>
          <StyledEditButton text="Edit" onClick={stopPropagation} />
          <DeleteButton onClick={stopPropagation} />
        </ButtonsContainer>
      );
    }
  };

  return (
    <Container
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      checked={user.selected}
    >
      <StyledCheckbox defaultChecked={user.selected} />
      <Img src={user.avatar} />
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
      <RoleLabel role={user.role} />
      {renderButtons()}
    </Container>
  );
}

export default User;
