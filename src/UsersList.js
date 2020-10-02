import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {FixedSizeList as List} from 'react-window';
import {
  setUsers,
  selectUsersIds,
} from './redux/usersSlice';
import styled from 'styled-components';
import User from './User';
import UsersListControls from './UsersListControls';
import {rowHeight, rowMargin, scrollableAreaWidth} from './styleConstants';

const Container = styled.div`
  height: 726px;
  border-radius: 8px;
  background: white;
  
  .List {
    overflow-x: hidden !important;
  }
`;

function UsersList() {
  const usersIds = useSelector(selectUsersIds);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      let response = await fetch("/api/users");
      response = await response.json();
      dispatch(setUsers(response.users));
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <Container>
      <UsersListControls />
      <List
        className="List"
        height={624}
        itemCount={usersIds.length}
        itemSize={rowHeight + 2 * rowMargin}
        width={scrollableAreaWidth}
      >
        {(props) => (
          <div style={props.style}>
            <User userId={usersIds[props.index]}/>
          </div>
        )}
      </List>
    </Container>
  );
}

export default UsersList;
