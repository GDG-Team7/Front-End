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
        <Header isWhite />
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

      <FourthSection>
        <FourthDescContainer>
          <FourthImgContainer>
            <FourthImg src={IMAGES.fourth_1} />
          </FourthImgContainer>
          <FourthDesc>{STRING.LANDING_FOURTH_DESC}</FourthDesc>
        </FourthDescContainer>

        <FourthCardContainer>
          <FourthCard>
            <FourthCardProfile>
              <FourthCardImg src={IMAGES.fourth_profile} />
              <FourthCardTitle>김개발</FourthCardTitle>
              <FourthCardPosition>Front-End</FourthCardPosition>
            </FourthCardProfile>
            <FourthCardDesc>{STRING.LANDING_FOURTH_CARD_DESC}</FourthCardDesc>
          </FourthCard>

          <FourthCard>
            <FourthCardProfile>
              <FourthCardImg src={IMAGES.fourth_profile} />
              <FourthCardTitle>김개발</FourthCardTitle>
              <FourthCardPosition>Front-End</FourthCardPosition>
            </FourthCardProfile>
            <FourthCardDesc>{STRING.LANDING_FOURTH_CARD_DESC}</FourthCardDesc>
          </FourthCard>
          <DummyImg src={IMAGES.fourth_2}></DummyImg>
        </FourthCardContainer>
      </FourthSection>

      <FifthSection>
        <FifthCard>
          <FifthCardTitle>{STRING.LANDING_FIFTH_CARD_DESC}</FifthCardTitle>
          <FifthCardEmailContainer>
            <FifthCardEmailInput placeholder="Enter Your Email"></FifthCardEmailInput>
            <FifthCardEmailButton>send</FifthCardEmailButton>
          </FifthCardEmailContainer>
        </FifthCard>
      </FifthSection>

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
  padding-top: 100px;
  padding-bottom: 100px;
`;

const FirstContent = styled.div`
  width: 50%;
  @media screen and (min-width: 900px) {
    margin-left: 10%;
  }
  @media screen and (max-width: 900px) {
    margin-left: 5%;
  }
`;

const FirstTitle = styled.div`
  letter-spacing: -1.12px;
  color: #ffffff;

  @media screen and (min-width: 900px) {
    font-size: 70px;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 900px) {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;

const FirstDesc = styled.div`
  line-height: 1.67;
  color: #ffffff;
  white-space: pre-wrap;
  margin-bottom: 40px;

  @media screen and (min-width: 900px) {
    font-size: 24px;
  }
  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
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
  width: 50%;

  @media screen and (min-width: 900px) {
    position: relative;
    left: -10%;
  }
  @media screen and (max-width: 900px) {
    position: relative;
    display: flex;
    align-items: center;
    bottom: 30px;
  }
`;

const FirstImg = styled.img`
  width: 100%;
`;

const SecondSection = styled.div`
  justify-content: center;

  background-color: #f2f2f2;
  display: flex;

  @media screen and (min-width: 900px) {
    height: 642px;
    align-items: center;
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
  }
  @media screen and (max-width: 900px) {
    padding-top: 10%;
    flex-direction: column;
  }
`;

const SecondCard = styled.div<{backColor: string}>`
  background-color: ${({backColor}) => backColor};
  padding-top: 40px;
  height: 345px;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  @media screen and (min-width: 900px) {
    width: 259px;
    margin-left: 45px;
    margin-right: 45px;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
    margin-top: 10%;
    margin-bottom: 10%;
    margin-left: 10%;
    margin-right: 10%;
  }
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
  width: 40%;

  @media screen and (min-width: 900px) {
    margin-left: 10%;
  }
  @media screen and (max-width: 900px) {
    margin-left: 5%;
  }
`;

const ThirdImgContainer_2 = styled.div`
  @media screen and (min-width: 900px) {
    width: 45%;
  }
  @media screen and (max-width: 900px) {
    width: 55%;
    display: flex;
    align-items: center;
  }
`;

const ThirdImg = styled.img`
  width: 100%;
`;

const ThirdContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    padding-left: 10%;
  }
  @media screen and (max-width: 900px) {
    padding-left: 5%;
  }
`;

const ThirdContent_2 = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    padding-left: 10%;
  }
  @media screen and (max-width: 900px) {
    padding-left: 5%;
  }
`;

const ThirdTitle = styled.div`
  font-weight: 600;
  letter-spacing: -0.77px;
  color: #2d2d2d;
  white-space: pre-wrap;

  @media screen and (min-width: 900px) {
    font-size: 40px;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 900px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const ThirdDesc = styled.div`
  line-height: 1.33;
  color: #2d2d2d;
  white-space: pre-wrap;

  @media screen and (min-width: 900px) {
    font-size: 25px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 900px) {
    font-size: 12px;
    margin-bottom: 25px;
  }
`;

const FourthSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f9f9f9;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    padding: 100px 10% 0 10%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const FourthDescContainer = styled.div`
  @media screen and (min-width: 900px) {
    width: 40%;
  }
`;

const FourthImgContainer = styled.div``;

const FourthImg = styled.img`
  width: 70%;
  height: 143px;
`;

const FourthDesc = styled.div`
  font-weight: 600;
  letter-spacing: -0.77px;
  color: #2d2d2d;
  white-space: pre-wrap;
  margin-top: 20px;

  @media screen and (min-width: 900px) {
    font-size: 40px;
    padding-left: 15%;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 900px) {
    font-size: 25px;
    text-align: center;
    margin-bottom: 0px;
  }
`;

const FourthCardContainer = styled.div`
  display: flex;
  padding-top: 5%;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    width: 40%;
    margin-right: 10%;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const DummyImg = styled.img`
  width: 115px;
  height: 115px;

  @media screen and (min-width: 900px) {
    margin-top: 40%;
  }

  @media screen and (max-width: 900px) {
    margin-top: 10%;
    margin-bottom: 30px;
    display: flex;
    align-self: center;
  }
`;

const FourthCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 256px;
  min-width: 200px;
  border: 2px solid #000000;
  border-radius: 35px;
  padding: 5% 0;

  box-shadow: rgba(1, 1, 2, 0.2) 0px 54px 55px,
    rgba(145, 127, 229, 0.2) 0px -12px 30px,
    rgba(145, 127, 229, 0.2) 0px 4px 6px, rgba(145, 127, 229, 0.2) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media screen and (min-width: 900px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 900px) {
    margin-top: 30px;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const FourthCardProfile = styled.div``;

const FourthCardImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #000000;
`;

const FourthCardTitle = styled.div`
  margin-top: 30px;
`;

const FourthCardPosition = styled.div``;

const FourthCardDesc = styled.div`
  padding: 0 20px;
  white-space: pre-wrap;
`;

const FifthSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300.3px;
`;

const FifthCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid black;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.77px;

  @media screen and (min-width: 900px) {
    width: 70%;
    height: 60%;
    padding: 30px 50px;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    height: 80%;
    padding: 15px;
  }
`;

const FifthCardTitle = styled.div`
  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;

const FifthCardEmailContainer = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const FifthCardEmailInput = styled.input`
  background: #fcbc14;
  border: none;

  height: 50px;
  font-size: 14px;
  padding: 0 10px;
  border-radius: 30px;
  margin-right: 10px;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fffcf8;
  }

  @media screen and (min-width: 900px) {
    width: 35%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const FifthCardEmailButton = styled.div`
  cursor: pointer;
  background: #fcbc14;
  color: #2d2e2e;
  font-size: 16px;
  height: 50px;
  line-height: 50px;

  border-radius: 30px;
  text-align: center;

  @media screen and (min-width: 900px) {
    width: 10%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
