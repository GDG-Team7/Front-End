import React from 'react';
import styled from 'styled-components';
import {IMAGES} from '../../constant/Images';
import Header from '../molecules/Header';

const LoginTemplate = () => {
  return (
    <Container>
      <Header isSearch isMain />
      <ContentContainer>
        <Content>
          <ContentImg src={IMAGES.login} />
          <GithubBtn
            src={IMAGES.githubButton}
            onClick={() => {
              location.href = process.env.REACT_APP_GITHUB_CALLBACK as string;
            }}
          />
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default LoginTemplate;

const Container = styled.div`
  min-width: 900px;
`;

const ContentContainer = styled.div`
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding-top: 57px; ;
`;

const Content = styled.div`
  width: 100%;
  height: 568px;
  padding-bottom: 80px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentImg = styled.img`
  width: 780px;
  height: 568px;
`;

const GithubBtn = styled.img`
  cursor: pointer;
  position: relative;
  width: 360px;
  height: 48px;
  bottom: 150px;
`;
