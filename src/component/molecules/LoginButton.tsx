import React from 'react';
import styled from 'styled-components';
import {IMAGES} from '../../constant/Images';

const LoginButton = () => {
  return (
    <Container
      onClick={() => {
        location.href = process.env.REACT_APP_GITHUB_CALLBACK as string;
      }}>
      <Icon src={IMAGES.github} alt={'icon'} />
      <Desc>Login with Github</Desc>
    </Container>
  );
};

export default LoginButton;

const Container = styled.div`
  background-color: #000;
  padding: 6px 12px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 17px;
  width: 17px;
  vertical-align: text-top;
  margin-right: 10px;
`;

const Desc = styled.span``;
