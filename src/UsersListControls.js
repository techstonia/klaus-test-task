import React from 'react';
import {useSelector} from 'react-redux';
import {getMarkedUsersCount} from './redux/usersSlice';
import styled, {css} from 'styled-components';
import {colors} from './styleConstants';
import {DeleteButton, EditButton} from './Buttons';
import Checkbox from './Checkbox';
import {ReactComponent as ArrowDown} from './assets/arrow-down.svg';

const Container = styled.div`
  height: 78px;
  padding: 24px 0 0 32px;
`;

const UsersCount = styled.span`
  color: ${colors.gray80};
  font-weight: 500;
  font-size: 16px;
  display: inline-block;
  min-width: 144px;
  max-width: 477px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledEditButton = styled(EditButton)`
  margin: 0 8px;
`;

const rowCSS = `
  position: relative;
  display: flex;
`;

const FirstRow = styled.div`
  ${rowCSS}
  align-items: center;
`;

const SecondRow = styled.div`
  ${rowCSS}
  margin-top: 25px;
  align-items: end;
`;

const Arrow = styled(ArrowDown)`
  position: relative;
  left: 4px;
  top: 2px;
  ${(props) => props.sorted === "desc" && css`
    transform: rotate(180deg);
  `}
`;

const ColumnHeaderContainer = styled.span`
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  color: ${colors.gray60};
  cursor: pointer;
  padding: 3px;
  top: -3px;
`;

const ColumnHeader = (props) => {
  return (
    <ColumnHeaderContainer className={props.className}>
      {props.title}
      {props.sorted && <Arrow sorted={props.sorted} />}
    </ColumnHeaderContainer>
  );
};

const UserColumnHeader = styled(ColumnHeader)`
  left: 25px;
`;

const PermissionColumnHeader = styled(ColumnHeader)`
  left: 382px;
`;

function UsersListControls() {
  const count = useSelector(getMarkedUsersCount);

  return (
    <Container>
      <FirstRow>
        <UsersCount>{count} users selected</UsersCount>
        <StyledEditButton text="Edit" />
        <DeleteButton text="Delete" />
      </FirstRow>

      <SecondRow>
        <Checkbox />
        <UserColumnHeader
          title="User"
        />
        <PermissionColumnHeader
          title="Permission"
          sorted="desc"
        />
      </SecondRow>
    </Container>
  );
}

export default UsersListControls;
