import React from 'react';
import styled from 'styled-components';
import {IMAGES} from '../../constant/Images';
import Header from '../molecules/Header';

interface Props {
  isAdmin?: boolean;
}

const MyRoomTemplate = (props: Props) => {
  return (
    <Container>
      <Header isSearch isMain />
      <ContentContainer>
        <Content>
          <UserContent>
            <Profile>
              <ProfileImg src={IMAGES.punch} />
              <ProfileTitle>개설자 정보</ProfileTitle>
              <DefaultLine />

              <ProfileDesc>
                <ProfileDescLeft>연차</ProfileDescLeft>
                <ProfileDescRight>0~1년차 미만</ProfileDescRight>
              </ProfileDesc>

              <ProfileDesc>
                <ProfileDescLeft>나이</ProfileDescLeft>
                <ProfileDescRight>20대</ProfileDescRight>
              </ProfileDesc>

              <ProfileDesc>
                <ProfileDescLeft>사용언어</ProfileDescLeft>
                <ProfileDescRight>C++, Javascript</ProfileDescRight>
              </ProfileDesc>

              <ProfileDesc>
                <ProfileDescLeft>Github</ProfileDescLeft>
                <ProfileDescRight>https://github.com/nagaebal</ProfileDescRight>
              </ProfileDesc>
            </Profile>
            <RoomContent>
              <RoomTitle>나개발이 만든방</RoomTitle>
              <DefaultLine />
              <RemainTime>잔여 모임시간</RemainTime>
              <RemainButton>{'06:24:03'}</RemainButton>

              <ProfileDesc>
                <RoomDescLeft>인원선택</RoomDescLeft>
                <RoomDescRight>04 / 08</RoomDescRight>
              </ProfileDesc>

              <ProfileDesc>
                <RoomDescLeft>사용언어</RoomDescLeft>
                <RoomDescRight>C++, Javascript</RoomDescRight>
              </ProfileDesc>

              <ProfileDesc>
                <RoomDescLeft>연차</RoomDescLeft>
                <RoomDescRight>3년차 미만</RoomDescRight>
              </ProfileDesc>

              <ProfileDesc>
                <RoomDescLeft>모임 링크</RoomDescLeft>
                <RoomDescRight>https://zoom.us/join</RoomDescRight>
              </ProfileDesc>

              <ProfileDesc>
                <RoomDescLeft>모임 소개</RoomDescLeft>
                <RoomDescRight>
                  주니어들끼리 모여서 python으로 간단한 주식 매매기를 만들려고
                  합니다.
                </RoomDescRight>
              </ProfileDesc>

              {!props.isAdmin && <RoomButton>스터디 함께 하기</RoomButton>}
            </RoomContent>
          </UserContent>
          {props.isAdmin && (
            <>
              <DefaultLine style={{marginLeft: 50, marginRight: 50}} />
              <AttendInfo>참여 대기자 현황</AttendInfo>
              <DefaultLine style={{marginLeft: 50, marginRight: 50}} />
              <WaitStatus>
                <WaitProfile src={IMAGES.fourth_profile} />
                <WaitInfo style={{width: '8%'}}>참여자A</WaitInfo>
                <WaitInfo style={{width: '8%'}}>20대</WaitInfo>
                <WaitInfo style={{width: '10%'}}>Python</WaitInfo>
                <WaitInfo style={{width: '15%'}}>0 ~ 1년차 미만</WaitInfo>
                <WaitInfo style={{width: '20%'}}>
                  https://github.com/nagaebal
                </WaitInfo>
                <WaitAccept>수락</WaitAccept>
                <WaitReject>거절</WaitReject>
              </WaitStatus>
              <DefaultLine style={{marginLeft: 50, marginRight: 50}} />
              <WaitStatus>
                <WaitProfile src={IMAGES.fourth_profile} />
                <WaitInfo style={{width: '8%'}}>참여자A</WaitInfo>
                <WaitInfo style={{width: '8%'}}>20대</WaitInfo>
                <WaitInfo style={{width: '10%'}}>Python</WaitInfo>
                <WaitInfo style={{width: '15%'}}>0 ~ 1년차 미만</WaitInfo>
                <WaitInfo style={{width: '20%'}}>
                  https://github.com/nagaebal
                </WaitInfo>
                <WaitAccept>수락</WaitAccept>
                <WaitReject>거절</WaitReject>
              </WaitStatus>
              <DefaultLine style={{marginLeft: 50, marginRight: 50}} />
              <WaitStatus>
                <WaitProfile src={IMAGES.fourth_profile} />
                <WaitInfo style={{width: '8%'}}>참여자A</WaitInfo>
                <WaitInfo style={{width: '8%'}}>20대</WaitInfo>
                <WaitInfo style={{width: '10%'}}>Python</WaitInfo>
                <WaitInfo style={{width: '15%'}}>0 ~ 1년차 미만</WaitInfo>
                <WaitInfo style={{width: '20%'}}>
                  https://github.com/nagaebal
                </WaitInfo>
                <WaitAccept>수락</WaitAccept>
                <WaitReject>거절</WaitReject>
              </WaitStatus>
            </>
          )}
          <DefaultLine style={{marginLeft: 50, marginRight: 50}} />
          <AttendInfo>참여자 정보</AttendInfo>
          <CardContainer>
            <Card style={{backgroundColor: '#fcbc14'}}>
              <CardProfile src={IMAGES.fourth_profile} />
              <CardName>닉네임 이즈</CardName>
              <CardGithub>Github</CardGithub>
              <CardGithubUrl>https://github.com/nagaebal</CardGithubUrl>
            </Card>
            <Card>
              <CardProfile src={IMAGES.fourth_profile} />
              <CardName>닉네임 이즈</CardName>
              <CardGithub>Github</CardGithub>
              <CardGithubUrl>https://github.com/nagaebal</CardGithubUrl>
            </Card>
            <Card>
              <CardProfile src={IMAGES.fourth_profile} />
              <CardName>닉네임 이즈</CardName>
              <CardGithub>Github</CardGithub>
              <CardGithubUrl>https://github.com/nagaebal</CardGithubUrl>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <CardProfile src={IMAGES.fourth_profile} />
              <CardName>닉네임 이즈</CardName>
              <CardGithub>Github</CardGithub>
              <CardGithubUrl>https://github.com/nagaebal</CardGithubUrl>
            </Card>
            <Card>
              <CardProfile src={IMAGES.fourth_profile} />
              <CardName>닉네임 이즈</CardName>
              <CardGithub>Github</CardGithub>
              <CardGithubUrl>https://github.com/nagaebal</CardGithubUrl>
            </Card>
            <Card>
              <CardProfile src={IMAGES.fourth_profile} />
              <CardName>닉네임 이즈</CardName>
              <CardGithub>Github</CardGithub>
              <CardGithubUrl>https://github.com/nagaebal</CardGithubUrl>
            </Card>
          </CardContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default MyRoomTemplate;

const Container = styled.div`
  min-width: 900px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
  padding-top: 57px;
`;

const Content = styled.div`
  width: 80%;
  padding-bottom: 80px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;

const UserContent = styled.div`
  height: 645px;
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
  font-size: 16px;
  font-weight: bold;
  color: #202124;
  text-align: left;
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

const ProfileDescLeft = styled.div`
  color: #a6adb4;
  font-size: 12px;
  line-height: 1.67;
  text-align: left;
  margin-bottom: 10px;
  width: 35%;
`;

const ProfileDescRight = styled.div`
  font-size: 12px;
  line-height: 1.67;
  text-align: center;
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

const RemainTime = styled.div`
  font-size: 14px;
  line-height: 1.43;
  color: #202124;
`;

const RemainButton = styled.div`
  cursor: pointer;
  width: 280px;
  height: 80px;
  border-radius: 8px;
  background-color: #ddd8f7;
  margin-top: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #202124;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 30px;
`;

const RoomDescLeft = styled.div`
  color: #a6adb4;
  font-size: 12px;
  line-height: 1.67;
  text-align: left;
  margin-bottom: 10px;
  width: 30%;
`;

const RoomDescRight = styled.div`
  font-size: 12px;
  line-height: 1.67;
  text-align: center;
`;

const RoomButton = styled.div`
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #534ae3;
  width: 360px;
  height: 48px;
  color: white;
  font-size: 16px;
  line-height: 1.25;
  margin-left: 30%;
  margin-top: 76px;
`;

const AttendInfo = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #202124;
  line-height: 1.25;
  margin-top: 80px;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 192px;
  min-width: 237px;
  border: 2px solid #e0e0e0;
  border-radius: 35px;
  text-align: center;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
  padding-top: 35px;
`;

const CardProfile = styled.img`
  width: 64px;
  height: 64px;
`;

const CardName = styled.div`
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.77;
  color: #202124;
`;

const CardGithub = styled.div`
  font-size: 13px;
  line-height: 1.77;
  color: #a6adb4;
  align-self: baseline;
  margin-left: 21px;
`;

const CardGithubUrl = styled.div`
  font-size: 13px;
  line-height: 1.77;
  color: #202124;
  font-weight: 300;
  align-self: baseline;
  margin-left: 21px;
`;

const WaitStatus = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const WaitProfile = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 42px;
  margin-left: 50px;
`;

const WaitInfo = styled.div`
  font-size: 14px;
  color: #202124;
  line-height: 1.43;
`;

const WaitAccept = styled.div`
  width: 80px;
  height: 32px;
  border-radius: 6px;
  border: solid 2px #534ae3;
  color: #534ae3;
  font-size: 12px;
  font-weight: 800;
  line-height: 1.67;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const WaitReject = styled.div`
  width: 80px;
  height: 32px;
  border-radius: 6px;
  background-color: #9b9b9b;
  color: white;
  font-size: 12px;
  font-weight: 800;
  line-height: 1.67;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
`;
