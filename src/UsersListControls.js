import React from 'react';
import {useSelector} from 'react-redux';
import {getMarkedUsersCount} from './redux/usersSlice';
import styled from 'styled-components';
import {colors} from './styleConstants';
import {DeleteButton, EditButton} from './Buttons';

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

function UsersListControls() {
  const count = useSelector(getMarkedUsersCount);

  return (
    <Container>
      <UsersCount>{count} users selected</UsersCount>
      <StyledEditButton text="Edit" />
      <DeleteButton text="Delete" />
    </Container>
  );
}

export default UsersListControls;
