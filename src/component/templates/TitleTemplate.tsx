import React from 'react';
import styled from 'styled-components';

const TitleTemplate = () => {
  return (
    <TitleBox>
      <Circle></Circle>
      <Title>코각모</Title>
    </TitleBox>
  );
};

export default TitleTemplate;

const TitleBox = styled.div`
  display: flex;
  top: 5px;
  position: relative;
`;

const Circle = styled.div`
  background: #fcbc14;
  border-radius: 50%;
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

const Title = styled.div`
  line-height: 20px;
  font-size: 20px;
`;
