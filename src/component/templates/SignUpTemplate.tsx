import React, {useState} from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import {OPTIONS} from '../../constant/Dropdown';
import Header from '../molecules/Header';

interface Props {
  onClick: (annual: string, ageRange: string) => void;
}

const SignUpTemplate = (props: Props) => {
  const [annual, setAnnual] = useState<string>();
  const [ageRange, setAgeRange] = useState<string>();

  return (
    <Container>
      <Header isSearch isMain />
      <ContentContainer>
        <Content>
          <ContentTitle>가입하기</ContentTitle>
          <DefaultLine />
          <SelectContainer>
            <SelectTitle>추가정보 입력</SelectTitle>
            <SelectIndex>연차</SelectIndex>
            <SelectStyled
              options={OPTIONS.ANNUAL}
              placeholder={'연차'}
              onChange={(a: {value: string}) => {
                setAnnual(a.value);
              }}
            />
            <SelectIndex>연령대</SelectIndex>
            <SelectStyled
              options={OPTIONS.AGE_RANGE}
              placeholder={'나이대'}
              onChange={(a: {value: string}) => {
                setAgeRange(a.value);
              }}
            />
            <Button
              onClick={() => {
                annual && ageRange && props.onClick(annual, ageRange);
              }}>
              동의 및 입력완료
            </Button>
          </SelectContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default SignUpTemplate;

const Container = styled.div`
  min-width: 900px;
`;

const ContentContainer = styled.div`
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding-top: 57px;
  display: flex;
`;

const Content = styled.div`
  width: 70%;
  height: 568px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const ContentTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 0.63;
  color: #202124;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 30px;
`;

const DefaultLine = styled.div`
  background-color: #ebeded;
  height: 2px;
  margin-right: 20px;
  margin-left: 20px;
`;

const SelectContainer = styled.div`
  margin-top: 65px;
  padding: 0 25%;
`;

const SelectTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #202124;
  line-height: 1;
`;

const SelectIndex = styled.div`
  font-weight: bold;
  font-size: 13px;
  color: #202124;
  line-height: 1.54;
  margin-top: 30px;
`;

const SelectStyled = styled(Select)`
  margin-top: 5px;
  width: 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  .css-1okebmr-indicatorSeparator {
    width: 0px;
  }
`;

const Button = styled.div`
  cursor: pointer;
  margin-top: 60px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: #534ae3;
  border-radius: 6px;
  justify-content: center;
  color: white;
  font-size: 16px;
  line-height: 1.25;
  font-weight: bold;
`;
