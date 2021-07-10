import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import {OPTIONS} from '../../constant/Dropdown';
import {IMAGES} from '../../constant/Images';
import {STRING} from '../../constant/String';
import Header from '../molecules/Header';
import MainRoomCard from '../molecules/MainRoomCard';

const MainTemplate = () => {
  return (
    <Container>
      <Header isSearch isMain />
      <TitleContainer>
        <LeftIcon src={IMAGES.mainIcon} />
        <Title>{STRING.MAIN_TITLE}</Title>
        <RightIcon src={IMAGES.punch} />
        <RightSecondIcon src={IMAGES.deco} />
      </TitleContainer>
      <SelectContainer>
        <SelectStyled options={OPTIONS.SKILL} placeholder={'기술'} />
        <SelectStyled options={OPTIONS.AGE_RANGE} placeholder={'나이대'} />
        <SelectStyled options={OPTIONS.DATE_RANGE} placeholder={'모임기간'} />
        <SelectStyled options={OPTIONS.ANNUAL} placeholder={'연차'} />
      </SelectContainer>
      <CurationContainer>
        <CurationTitle>{'인기검색어'}</CurationTitle>
        <Curation>
          {'#Python'}
          <CurationExit src={IMAGES.remove} />
        </Curation>
        <Curation>
          {'#TypeScript'}
          <CurationExit src={IMAGES.remove} />
        </Curation>
        <Curation>
          {'#Java'}
          <CurationExit src={IMAGES.remove} />
        </Curation>
        <Curation>
          {'#Python'}
          <CurationExit src={IMAGES.remove} />
        </Curation>
      </CurationContainer>
      <RoomListContainer>
        <RoomListHeader>
          <RoomListTitle>검색결과 (33)</RoomListTitle>
          <RoomListToggle>
            <RoomListToggleItem>최신순</RoomListToggleItem>|
            <RoomListToggleItem>정확도순</RoomListToggleItem>|
            <RoomListToggleItem>모임종료</RoomListToggleItem>
          </RoomListToggle>
        </RoomListHeader>
        <RoomListBody>
          <MainRoomCard />
          <MainRoomCard />
          <MainRoomCard />
          <MainRoomCard />
          <MainRoomCard />
          <MainRoomCard />
          <MainRoomCard />
        </RoomListBody>
      </RoomListContainer>
    </Container>
  );
};

export default MainTemplate;
const Container = styled.div`
  min-width: 900px;
`;

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
  bottom: 30px;
  position: relative;
`;

const RightSecondIcon = styled.img`
  position: relative;
  width: 41px;
  bottom: 60px;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 90px;
`;

const SelectStyled = styled(Select)`
  width: 20%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  .css-1okebmr-indicatorSeparator {
    width: 0px;
  }
`;

const CurationContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  bottom: 80px;
  padding: 3vh 10%;
`;

const CurationTitle = styled.span`
  font-size: 16px;
  color: #707070;
  margin-right: 14px;
`;

const Curation = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 32px;
  border-radius: 16px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.12);
  margin-right: 10px;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
`;

const CurationExit = styled.img`
  cursor: pointer;
  margin-left: 10px;
  width: 14px;
  height: 14px;
`;

const RoomListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RoomListTitle = styled.div``;
const RoomListToggle = styled.div`
  display: flex;
`;

const RoomListToggleItem = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const RoomListContainer = styled.div``;

const RoomListBody = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
