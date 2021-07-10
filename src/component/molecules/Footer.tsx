import React from 'react';
import styled from 'styled-components';
import TitleTemplate from '../templates/TitleTemplate';

const Footer = () => {
  return (
    <FooterContainer>
      <TitleTemplate />
      <Copyright>2021 © COGAGMO</Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  padding: 3vh 22vw 3vh 12vw;
  justify-content: space-between;
  color: #2d2e2e;
  background: #f7fafd;
`;

const Copyright = styled.div`
  font-size: 15px;
  line-height: 15px;
`;
