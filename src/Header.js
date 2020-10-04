import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {ReactComponent as Hourglass} from './assets/hourglass.svg';
import {colors} from './styleConstants';
import {useDispatch} from 'react-redux';
import {searchStringChanged} from './redux/searchStringSlice';

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

const ControlsContainer = styled.span`
  display: flex;
`;

const SearchContainer = styled.span`
  position: relative;
`;

const borderWidth = 1;
const SearchInput = styled.input.attrs({
  placeholder: "Search",
})`
  border: ${borderWidth}px solid ${colors.gray30};
  border-radius: 4px;
  margin-right: 12px;
  
  height: ${height - 2 * borderWidth}px;
  width: 156px;
  padding: 0 10px 0 36px;
  font-size: 14px;
  
  &::placeholder {
    color: ${colors.gray50};
    opacity: 1;
  }
  
  &:focus{
    outline: none;
  }
`;

const StyledHourglass = styled(Hourglass)`
  position: absolute;
  left: 12px;
  top: 12px;
  pointer-events: none;
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
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  // Don't want the list filtering to start immediately
  useEffect(() => {
    const timeOutId = setTimeout(() => dispatch(searchStringChanged(searchText)), 500);
    return () => clearTimeout(timeOutId);
  }, [dispatch, searchText]);

  const onSearchChange = (evt) => {
    setSearchText(evt.target.value);
  };

  return (
    <Container>
      <Title>Account users</Title>
      <ControlsContainer>
        <SearchContainer>
          <SearchInput onChange={onSearchChange}/>
          <StyledHourglass />
        </SearchContainer>
        <ConnectUsersButton>Connect users</ConnectUsersButton>
      </ControlsContainer>
    </Container>
  );
}

export default Header;
