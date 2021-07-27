import React from 'react';
import styled from 'styled-components';
import {IMAGES} from '../../constant/Images';
import Header from '../molecules/Header';

const ProfileTemplate = () => {
  return (
    <Container>
      <Header isSearch isMain />
      <ContentLayout>
        <Title>마이페이지</Title>
        <ContentContainer>
          <Content>
            <UserContent>
              <Profile>
                <ProfileImg src={IMAGES.profile} />
                <ProfileTitle>가입일 2021.03.01 ~</ProfileTitle>
              </Profile>
              <RoomContent>
                <RoomTitle>나개발</RoomTitle>
                <DefaultLine />
                <ProfileDesc>
                  <RoomDescLeft>Github</RoomDescLeft>
                  <Verify>인증</Verify>
                  <RoomDescRight>https://github.com/nagaebal</RoomDescRight>
                </ProfileDesc>

                <ProfileDesc>
                  <RoomDescLeft>이메일</RoomDescLeft>
                  <Verify>인증</Verify>
                  <RoomDescRight>nagaebal@gmail.com</RoomDescRight>
                </ProfileDesc>

                <ProfileDesc>
                  <RoomDescLeft>사용 언어</RoomDescLeft>
                  <RoomDescRight>C++, Javascript</RoomDescRight>
                </ProfileDesc>

                <ProfileDesc>
                  <RoomDescLeft>연차</RoomDescLeft>
                  <RoomDescRight>3년차 미만</RoomDescRight>
                </ProfileDesc>

                <ProfileDesc>
                  <RoomDescLeft>나이</RoomDescLeft>
                  <RoomDescRight>30대 초반</RoomDescRight>
                </ProfileDesc>
              </RoomContent>
            </UserContent>
            <DefaultLine />
            <HistoryTitle>스터디 내역</HistoryTitle>
            <DefaultLine style={{marginLeft: 100, marginRight: 100}} />
            <WaitStatus>
              <WaitProfile src={IMAGES.fourth_profile} />
              <WaitInfo style={{width: '40%'}}>나 개발이 만든 방</WaitInfo>
              <WaitInfo style={{width: '30%'}}>2021.03.01</WaitInfo>
              <WaitInfo style={{width: '30%'}}>06시간</WaitInfo>
            </WaitStatus>
            <DefaultLine style={{marginLeft: 100, marginRight: 100}} />
            <WaitStatus>
              <WaitProfile src={IMAGES.fourth_profile} />
              <WaitInfo style={{width: '40%'}}>프론트엔드 다모여</WaitInfo>
              <WaitInfo style={{width: '30%'}}>2021.04.012</WaitInfo>
              <WaitInfo style={{width: '30%'}}>02시간</WaitInfo>
            </WaitStatus>
            <DefaultLine style={{marginLeft: 100, marginRight: 100}} />
            <WaitStatus>
              <WaitProfile src={IMAGES.fourth_profile} />
              <WaitInfo style={{width: '40%'}}>나 개발이 만든 방</WaitInfo>
              <WaitInfo style={{width: '30%'}}>2021.03.01</WaitInfo>
              <WaitInfo style={{width: '30%'}}>06시간</WaitInfo>
            </WaitStatus>
          </Content>
        </ContentContainer>
      </ContentLayout>
    </Container>
  );
};

export default ProfileTemplate;

const Container = styled.div`
  min-width: 900px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  line-height: 0.56;
  color: #202124;
  margin-left: 10%;
`;

const ContentLayout = styled.div`
  background-color: #f4f4f4;
  padding-top: 57px;
  padding-bottom: 50px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Content = styled.div`
  width: 80%;
  padding-bottom: 80px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;

const UserContent = styled.div`
  height: 445px;
  display: flex;
  margin-bottom: 10px;
`;

const Profile = styled.div`
  margin-left: 50px;
  margin-top: 64px;
  padding-top: 64px;
  width: 40%;
  text-align: center;
`;

const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 30px;
`;

const ProfileTitle = styled.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.54;
  color: #202124;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const DefaultLine = styled.div`
  background-color: #ebeded;
  height: 2px;
  margin-bottom: 15px;
  margin-right: 15px;
`;

const ProfileDesc = styled.div`
  display: flex;
`;

const RoomContent = styled.div`
  margin-right: 50px;
  margin-top: 64px;
  padding-top: 64px;
  width: 60%;
`;

const RoomTitle = styled.div`
  height: 49px;
  font-size: 30px;
  font-weight: bold;
  color: #202124;
  line-height: 0.56;
`;

const RoomDescLeft = styled.div`
  color: #a6adb4;
  font-size: 14px;
  line-height: 1.43;
  text-align: left;
  margin-bottom: 10px;
  width: 30%;
  color: #202124;
`;

const Verify = styled.div`
  border: solid 2px #ddd8f7;
  width: 38px;
  height: 22px;
  border-radius: 5px;

  font-size: 12px;
  font-weight: bold;
  line-height: 1.67;
  color: #534ae3;
  text-align: center;
  margin-right: 10px;
`;

const RoomDescRight = styled.div`
  font-size: 13px;
  line-height: 1.54;
  color: #202124;
  font-weight: bold;
  text-align: center;
`;

const HistoryTitle = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #202124;
  line-height: 1.25;
  margin-top: 80px;
  margin-bottom: 30px;
`;

const WaitStatus = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const WaitProfile = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 50px;
  margin-left: 100px;
`;

const WaitInfo = styled.div`
  font-size: 14px;
  color: #202124;
  line-height: 1.43;
`;
