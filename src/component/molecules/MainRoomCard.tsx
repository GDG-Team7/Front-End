import React from 'react';
import styled from 'styled-components';
import {IMAGES} from '../../constant/Images';
import {Room} from '../../types/room';

const MainRoomCard = ({id, title}: Room) => {
  return (
    <CardContainer>
      <Label>ON</Label>
      <ProfileImageContainer>
        <ProfileImage src={IMAGES.room_profile} />
        <ProfileSubImage src={IMAGES.sub_proflie_1} />
        <ProfileSubImage2 src={IMAGES.sub_proflie_2} />
      </ProfileImageContainer>
      <UserNickName>{id}</UserNickName>
      <RoomInfo>
        <RoomTitle>{title}</RoomTitle>
        <RoomDesc>설명추가...</RoomDesc>
      </RoomInfo>
      <BottomBar>
        <BottomRoomInfo>
          <InfoBox>
            <ClockIcon src={IMAGES.clock} />
            <Time>1h ago</Time>
          </InfoBox>
          <InfoBox>
            <UsrCountIcon src={IMAGES.user_count_icon} />
            <PersonnelCount>3/10</PersonnelCount>
          </InfoBox>
        </BottomRoomInfo>
        <PlusButton src={IMAGES.plus_button} />
      </BottomBar>
    </CardContainer>
  );
};

export default MainRoomCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 235px;
  height: 300px;
  margin: 0 25px 26px 0px;
  padding: 10px 15px 21px 15px;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #e0e0e0;
  background-color: #ffffff;
`;

const Label = styled.div`
  text-align: center;
  width: 38px;
  height: 22px;
  align-self: flex-end;
  background: #d7f2e9;
  padding: 4px 0;
  border-radius: 5px;
  background-color: #d7f2e9;
  font-size: 12px;
  font-weight: 600;
  color: #21d59b;
`;

const ProfileImageContainer = styled.div`
  position: relative;
`;

const ProfileSubImage = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 40px;
  top: 40px;
`;

const ProfileSubImage2 = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 50px;
  top: 40px;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
`;

const UserNickName = styled.div`
  margin-top: 5px;
  color: #a6adb4;
  font-weight: normal;
`;

const RoomInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  text-align: left;
`;

const RoomTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: auto;
`;

const RoomDesc = styled.div`
  display: -webkit-box;
  white-space: normal;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #a6adb4;
  margin-top: 10px;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  margin-top: 10%;
  color: #a6adb4;
`;

const BottomRoomInfo = styled.div``;

const ClockIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const UsrCountIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const InfoBox = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Time = styled.div`
  font-size: 12px;
`;

const PersonnelCount = styled.div`
  font-size: 12px;
`;

const PlusButton = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;
