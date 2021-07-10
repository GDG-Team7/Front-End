import React from 'react';
import styled from 'styled-components';

const RegisterRoomPage = () => {
  return (
    <Container>
      <Title>방 개설하기</Title>
      <Contents>
        <Desc>ss</Desc>
        <MainContent>sss</MainContent>
      </Contents>
    </Container>
  );
};

export default RegisterRoomPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10% 10%;
  background: #f4f4f4;
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Contents = styled.span`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  padding: 5%;
`;

const Desc = styled.div`
  flex: 1;
`;

const MainContent = styled.div`
  flex: 2;
`;
