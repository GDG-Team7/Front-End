import React from 'react';
import styled from 'styled-components';
import {IMAGES} from '../../constant/Images';
import {STRING} from '../../constant/String';
import Header from '../molecules/Header';

const MainTemplate = () => {
  return (
    <Container>
      <Header isSearch />
      <TitleContainer>
        <LeftIcon src={IMAGES.mainIcon} />
        <Title>{STRING.MAIN_TITLE}</Title>
        <RightIcon src={IMAGES.punch} />
        <RightSecondIcon src={IMAGES.deco} />
      </TitleContainer>
    </Container>
  );
};

export default MainTemplate;
const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 900px) {
    padding: 3vh 12vw;
    justify-content: space-between;
  }
  @media screen and (max-width: 900px) {
    padding: 10px;
  }
`;
const LeftIcon = styled.img`
  width: 190px;
  height: 261px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: #202124;
`;
const RightIcon = styled.img`
  width: 100px;
  height: 107px;
`;
const RightSecondIcon = styled.img`
  position: relative;
  width: 41px;
  bottom: 60px;
`;
