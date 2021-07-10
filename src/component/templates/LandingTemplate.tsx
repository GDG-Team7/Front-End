import React from 'react';
import styled from 'styled-components';
import {IMAGES} from '../../constant/Images';
import {STRING} from '../../constant/String';
import Footer from '../molecules/Footer';
import Header from '../molecules/Header';

const LandingTemplate = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <FirstSection>
        <FirstContent>
          <FirstTitle>{STRING.LANDING_FIRST_TITLE}</FirstTitle>
          <FirstDesc>{STRING.LANDING_FIRST_DESC}</FirstDesc>
          <FirstButton>{STRING.LANDING_FIRST_BUTTON}</FirstButton>
        </FirstContent>
        <FirstImgContainer>
          <FirstImg src={IMAGES.first} />
        </FirstImgContainer>
      </FirstSection>

      <SecondSection>
        <SecondCard backColor={'#9acf61'}>
          <SecondCardImg src={IMAGES.second_1} />
          <SecondCardTitle>{STRING.SECOND_CARD_TITLE_1}</SecondCardTitle>
          <SecondCardDesc>{STRING.SECOND_CARD_DESC_1}</SecondCardDesc>
        </SecondCard>
        <SecondCard backColor={'#fcbc14'}>
          <SecondCardImg src={IMAGES.second_2} />
          <SecondCardTitle>{STRING.SECOND_CARD_TITLE_2}</SecondCardTitle>
          <SecondCardDesc>{STRING.SECOND_CARD_DESC_2}</SecondCardDesc>
        </SecondCard>
        <SecondCard backColor={'#6e66e7'}>
          <SecondCardImg src={IMAGES.second_3} />
          <SecondCardTitle>{STRING.SECOND_CARD_TITLE_3}</SecondCardTitle>
          <SecondCardDesc>{STRING.SECOND_CARD_DESC_3}</SecondCardDesc>
        </SecondCard>
      </SecondSection>

      <ThirdSection>
        <ThirdImgContainer>
          <ThirdImg src={IMAGES.third_1} />
        </ThirdImgContainer>
        <ThirdContent>
          <ThirdTitle>{STRING.THIRD_CARD_TITLE_1}</ThirdTitle>
          <ThirdDesc>{STRING.THIRD_CARD_DESC_1}</ThirdDesc>
        </ThirdContent>
      </ThirdSection>
      <ThirdSection>
        <ThirdContent_2>
          <ThirdTitle>{STRING.THIRD_CARD_TITLE_2}</ThirdTitle>
          <ThirdDesc>{STRING.THIRD_CARD_DESC_2}</ThirdDesc>
        </ThirdContent_2>
        <ThirdImgContainer_2>
          <ThirdImg src={IMAGES.third_2} />
        </ThirdImgContainer_2>
      </ThirdSection>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <Footer />
    </Container>
  );
};

export default LandingTemplate;

const Container = styled.div``;

const HeaderContainer = styled.div`
  background-color: #6246e4;
`;

const FirstSection = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #6246e4;
  width: 100%;
  height: 828px;
  padding-top: 100px;
`;

const FirstContent = styled.div`
  width: 50%;
  margin-left: 10%;
`;

const FirstTitle = styled.div`
  font-size: 70px;
  letter-spacing: -1.12px;
  color: #ffffff;
  margin-bottom: 60px;
`;

const FirstDesc = styled.div`
  font-size: 24px;
  line-height: 1.67;
  color: #ffffff;
  white-space: pre-wrap;
  margin-bottom: 40px;
`;

const FirstButton = styled.div`
  width: 216px;
  height: 59px;
  background-color: #ffffff;
  border-radius: 29.5px;
  justify-content: center;
  display: inline-flex;
  align-items: center;

  font-size: 22px;
  font-weight: 600;
  color: #2d2d2d;
  line-height: 1.23;
  cursor: pointer;
`;

const FirstImgContainer = styled.div`
  position: relative;
  left: -10%;
  width: 50%;
`;

const FirstImg = styled.img``;

const SecondSection = styled.div`
  height: 642px;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SecondCard = styled.div<{backColor: string}>`
  background-color: ${({backColor}) => backColor};
  margin-left: 45px;
  margin-right: 45px;
  padding-top: 40px;
  width: 259px;
  height: 345px;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const SecondCardImg = styled.img`
  width: 114px;
  height: 127.3px;
`;

const SecondCardTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  line-height: 1.23;
  color: #ffffff;
  white-space: pre-wrap;
  text-align: left;
  margin-top: 30px;
  padding-left: 20px;
`;

const SecondCardDesc = styled.div`
  font-size: 16px;
  line-height: 1.25;
  color: #2d2d2d;
  white-space: pre-wrap;
  text-align: left;
  margin-top: 10px;
  padding-left: 20px;
`;

const ThirdSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 100px;
`;

const ThirdImgContainer = styled.div`
  margin-left: 10%;
  width: 40%;
`;

const ThirdImgContainer_2 = styled.div`
  margin-left: 10%;
  width: 55%;
`;

const ThirdImg = styled.img`
  width: 100%;
`;

const ThirdContent = styled.div`
  width: 60%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
`;

const ThirdContent_2 = styled.div`
  width: 45%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
`;

const ThirdTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -0.77px;
  color: #2d2d2d;
  white-space: pre-wrap;
  margin-bottom: 60px;
`;

const ThirdDesc = styled.div`
  font-size: 25px;
  line-height: 1.33;
  color: #2d2d2d;
  white-space: pre-wrap;
  margin-bottom: 40px;
`;

const FourthSection = styled.div`
  height: 607.3px;
  background-color: #f9f9f9;
`;

const FifthSection = styled.div``;
