import React from 'react';
import {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {IMAGES} from '../../constant/Images';
import TitleTemplate from '../templates/TitleTemplate';

export interface Props {
  isSearch?: boolean;
}

const Header = (props: Props) => {
  const history = useHistory();
  const loggedIn = localStorage.getItem('accessToken');

  const onClickStudy = useCallback(() => {
    if (loggedIn) {
      history.push('/');
    } else {
      console.log('로그인해');
    }
  }, [history, loggedIn]);

  const onClickMyPage = useCallback(() => {
    if (loggedIn) {
      history.push('/profile');
    } else {
      console.log('로그인해');
    }
  }, [history, loggedIn]);

  return (
    <HeaderContainer>
      <TitleTemplate />
      {props.isSearch && (
        <SearchContainer>
          <SearchInput placeholder="SEARCH" />
          <SearchIcon src={IMAGES.search} />
        </SearchContainer>
      )}
      <Nav>
        <NavItem onClick={onClickStudy}>Study</NavItem>
        {!loggedIn && <NavItem>Login</NavItem>}
        <NavItem onClick={onClickMyPage}>My Page</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;

  justify-content: space-between;
  color: #ffffff;

  @media screen and (min-width: 900px) {
    padding: 3vh 12vw;
  }
  @media screen and (max-width: 900px) {
    padding: 10px;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    margin-left: 10px;
  }
`;

const NavItem = styled.span`
  cursor: pointer;
  @media screen and (min-width: 900px) {
    margin-right: 25px;
  }
  @media screen and (max-width: 900px) {
    margin-right: 15px;
  }
`;

const SearchContainer = styled.div`
  @media screen and (min-width: 900px) {
    width: 50%;
  }
  @media screen and (max-width: 900px) {
    width: 40%;
  }
`;
const SearchInput = styled.input`
  background: #ffffff;
  border: none;
  width: 100%;
  height: 54px;
  font-size: 14px;
  padding: 0 20px;
  border-radius: 37px;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a6adb4;
  }
`;

const SearchIcon = styled.img`
  width: 17.9px;
  height: 17.9px;
  cursor: pointer;
  position: relative;
  bottom: 35px;
  @media screen and (min-width: 800px) {
    left: 92%;
  }
  @media screen and (max-width: 800px) {
    left: 85%;
  }
`;
