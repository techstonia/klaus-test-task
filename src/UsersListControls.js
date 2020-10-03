import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  areAllUsersMarked,
  getMarkedUsersCount,
  toggleAllUsers,
} from './redux/usersSlice';
import styled, {css} from 'styled-components';
import {colors} from './styleConstants';
import {DeleteButton, EditButton} from './Buttons';
import Checkbox from './Checkbox';
import {ReactComponent as ArrowDown} from './assets/arrow-down.svg';
import {
  changeSortingConfig,
  selectSortingConfig,
} from './redux/sortingConfigSlice';
import calculateNextSortingConfig from './redux/calculateNextSortingConfig';

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
  const {title, sorted, ...rest} = props;
  return (
    <ColumnHeaderContainer {...rest}>
      {title}
      {sorted && <Arrow sorted={sorted} />}
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
  const currentSortingConfig = useSelector(selectSortingConfig);
  const allUsersMarked = useSelector(areAllUsersMarked);
  const dispatch = useDispatch();

  const onCheckBoxClick = (evt) => dispatch(toggleAllUsers(evt.target.checked));
  const reorderNameColumn = () => dispatch(changeSortingConfig(calculateNextSortingConfig(currentSortingConfig, "name")));
  const reorderRoleColumn = () => dispatch(changeSortingConfig(calculateNextSortingConfig(currentSortingConfig, "role")));

  return (
    <Container>
      <FirstRow>
        <UsersCount>{count} users selected</UsersCount>
        <StyledEditButton text="Edit" />
        <DeleteButton text="Delete" />
      </FirstRow>

      <SecondRow>
        <Checkbox
          checked={allUsersMarked}
          onChange={onCheckBoxClick}
        />
        <UserColumnHeader
          title="User"
          onClick={reorderNameColumn}
          sorted={currentSortingConfig.column === "name" && currentSortingConfig.direction}
        />
        <PermissionColumnHeader
          title="Permission"
          onClick={reorderRoleColumn}
          sorted={currentSortingConfig.column === "role" && currentSortingConfig.direction}
        />
      </SecondRow>
    </Container>
  );
}

export default UsersListControls;
