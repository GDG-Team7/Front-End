import React from 'react';
import styled from 'styled-components';
import Header from '../molecules/Header';

const MainTemplate = () => {
  return (
    <Container>
      <Header isSearch />
    </Container>
  );
};

export default MainTemplate;
const Container = styled.div``;
