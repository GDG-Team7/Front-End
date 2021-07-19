import React from 'react';
import {useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import styled from 'styled-components';
import {IMAGES} from '../../constant/Images';
import {STRING} from '../../constant/String';
import request from '../../plugins/axios';

const RegisterRoomPage = ({history}: RouteComponentProps) => {
  const [title, setTitle] = useState<string>();
  const [memberLimit, setMemberLimit] = useState<number>(0);
  const [startTime, setStartTime] = useState<string>();
  const [endTime, setEndTime] = useState<string>();
  const [language, setLanguage] = useState<string>();
  const [annual_max, setAnnualMax] = useState<number>();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleMemberLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMemberLimit(+e.target.value);
  };

  const handleStartTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartTime(e.target.value);
  };

  const handleEndTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndTime(e.target.value);
  };

  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleAnnualMin = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnnualMax(+e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    const roomInfo = {
      title: title,
      member_limit: memberLimit,
      start_time: startTime,
      end_time: endTime,
      language: language,
      annual_min: 0,
      annual_max: annual_max,
    };

    request
      .post('/room', roomInfo)
      .then(() => {
        // 방 입장 로직 필요
        history.push('/');
      })
      .catch(err => {
        console.error(`something error occurrence = ${err}`);
      });
  };

  return (
    <Container>
      <Title>방 개설하기</Title>
      <Contents>
        <Desc>
          <Flex>
            <MyInfoProfileIcon src={IMAGES.myInfo_icon} />
            <Span>{STRING.MYINFO_INTRO_DESC}</Span>
          </Flex>
        </Desc>
        <MainContent>
          <TitleBox>
            <ItemTitle>방제목</ItemTitle>
            <ItemInput
              placeholder="입력해주세요"
              onChange={handleTitleChange}
            />
          </TitleBox>

          <SelectLine>
            <TitleBox>
              <ItemTitle>인원선택</ItemTitle>
              <ItemSelect onChange={handleMemberLimit}>
                <option value="">Select...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </ItemSelect>
            </TitleBox>
            <TitleBox>
              <ItemTitle>모임시작일시</ItemTitle>
              <ItemSelect onChange={handleStartTime}>
                <option value="">Select...</option>
                <option value="2021-07-19">2021-07-19</option>
              </ItemSelect>
            </TitleBox>
            <TitleBox>
              <ItemTitle>모임종료일시</ItemTitle>
              <ItemSelect onChange={handleEndTime}>
                <option value="">Select...</option>
                <option value="2021-08-12">2021-08-12</option>
              </ItemSelect>
            </TitleBox>
          </SelectLine>
          <SelectLine>
            <TitleBox>
              <ItemTitle>사용언어</ItemTitle>
              <Language onChange={handleLanguage}>
                <option value="">Select...</option>
                <option>Javascript</option>
                <option>Python</option>
                <option>Ruby</option>
              </Language>
            </TitleBox>
            <TitleBox>
              <ItemTitle>연차</ItemTitle>
              <ItemSelect onChange={handleAnnualMin}>
                <option value="">Select...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </ItemSelect>
            </TitleBox>
          </SelectLine>
          <SelectLine>
            <TitleBox>
              <ItemTitle>모임할 플랫폼 링크</ItemTitle>
              <ItemInputLink placeholder="온라인으로 모을 플랫폼의 링크를 입력해 주세요."></ItemInputLink>
            </TitleBox>
          </SelectLine>
          <SelectLine>
            <TitleBox>
              <ItemTitle>간단한 모임소개</ItemTitle>
              <ItemInputLink placeholder="한 줄로 입력해주세요."></ItemInputLink>
            </TitleBox>
          </SelectLine>
          <SubmitButtom onClick={handleSubmit}>방 개설하기</SubmitButtom>
        </MainContent>
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
  padding: 5% 5%;
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
  padding: 5% 5%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.span`
  font-size: 14px;
  color: #a6adb4;
  text-align: center;
  white-space: pre-wrap;
`;

const MyInfoProfileIcon = styled.img`
  width: 125px;
  height: 125px;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  flex: 1;
`;

const MainContent = styled.div`
  flex: 3;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  font-weight: bold;
`;

const ItemInput = styled.input`
  width: 50%;
  height: 40px;
  border: solid 2px #ebeded;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #a6adb4;
  outline: none;
  border-radius: 6px;
  padding-left: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ebeded;
  }
  margin-bottom: 30px;
`;

const SelectLine = styled.div`
  display: flex;
  width: 100%;
`;

const ItemSelect = styled.select`
  width: 10vw;
  height: 40px;
  border: solid 2px #ebeded;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #a6adb4;
  outline: none;
  border-radius: 6px;
  padding-left: 20px;
  margin-right: 25px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #000000;
  }
  margin-bottom: 30px;
`;

const Language = styled.select`
  width: 20vw;
  height: 40px;
  border: solid 2px #ebeded;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #a6adb4;
  outline: none;
  border-radius: 6px;
  padding-left: 20px;
  margin-right: 25px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ebeded;
  }
  margin-bottom: 30px;
`;

const ItemInputLink = styled.input`
  width: 40vw;
  height: 40px;
  border: solid 2px #ebeded;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #a6adb4;
  outline: none;
  border-radius: 6px;
  padding-left: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ebeded;
  }
  margin-bottom: 30px;
`;

const SubmitButtom = styled.div`
  width: 50%;
  height: 50px;
  border-radius: 6px;
  background: #534ae3;
  font-size: 20px;
  margin-left: 5vw;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
`;
