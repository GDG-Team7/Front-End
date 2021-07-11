import React from 'react';
import {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {IMAGES} from '../../constant/Images';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import TitleTemplate from '../templates/TitleTemplate';

export interface Props {
  isSearch?: boolean;
  isWhite?: boolean;
  isMain?: boolean;
}

const Header = (props: Props) => {
  const history = useHistory();
  const loggedIn = localStorage.getItem('accessToken');
  const {width} = useWindowDimensions();

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
    <>
      <HeaderContainer
        style={{minWidth: props.isMain ? 900 : undefined}}
        backColor={props.isWhite ? '#ffffff' : undefined}>
        <TitleTemplate />
        {props.isMain && (
          <SearchContainer>
            <SearchInput placeholder="SEARCH" />
            <SearchIcon src={IMAGES.search} />
          </SearchContainer>
        )}
        {!props.isMain && props.isSearch && width > 600 && (
          <SearchContainer>
            <SearchInput placeholder="SEARCH" />
            <SearchIcon src={IMAGES.search} />
          </SearchContainer>
        )}
        <Nav>
          <NavItem onClick={onClickStudy}>Study</NavItem>
          {!loggedIn && (
            <NavItem
              onClick={() => {
                history.push('/login');
              }}>
              Login
            </NavItem>
          )}
          <NavItem onClick={onClickMyPage}>My Page</NavItem>
        </Nav>
      </HeaderContainer>
      {props.isSearch && width < 600 && !props.isMain && (
        <SearchMobileContainer>
          <SearchInput placeholder="SEARCH" />
          <SearchIcon src={IMAGES.search} />
        </SearchMobileContainer>
      )}
    </>
  );
};

export default Header;

const HeaderContainer = styled.div<{backColor: string | undefined}>`
  display: flex;

  justify-content: space-between;
  color: ${({backColor}) => backColor};
  align-items: baseline;
  @media screen and (min-width: 900px) {
    padding: 3vh 12vw;
  }
  @media screen and (max-width: 900px) {
    padding: 10px;
  }
`;

const Nav = styled.div`
  display: flex;
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

const SearchMobileContainer = styled.div`
  margin-top: 10px;
  width: 50%;
  margin-left: 48%;
`;

const SearchInput = styled.input`
  background: #ffffff;
  border: 2px solid #ebeded;
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
