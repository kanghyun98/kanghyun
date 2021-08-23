import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const PortfolioSummaryWrapper = styled.div`
  max-width: 72em;
  margin-left: auto;
  margin-right: auto;
  padding: 100px 0;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 75px 16px;
  }
`;

const Direction = styled.h3`
  font-size: 40px;
  line-height: 52px;

  @media only screen and (max-width: 828px) {
    font-size: 26px;
    line-height: 34px;
  }
`;

const AttitudeWrapper = styled.ul`
  overflow: hidden;
  padding-top: 66px;
  display: flex;
  justify-content: space-between;
`;

const AttitudeItem = styled.li`
  list-style: none;
  width: 30%;
`;

const Title = styled.h4`
  height: 54px;
  font-size: 22px;
  line-height: 54px;
`;

const Discription = styled.p`
  padding: 5px 0px;
  line-height: 26px;
`;

const PortfolioSummary = () => {
  return (
    <PortfolioSummaryWrapper>
      <Direction>더 나은 세상 만들기</Direction>
      <AttitudeWrapper>
        <AttitudeItem>
          <Title>성장</Title>
          <Discription>
            카카오의 서비스 개발 사례 및 트러블 슈팅 과정에서 얻은 기술과
            노하우를 생생하게 공유합니다. 인공지능, 머신러닝, 챗봇, 클라우드,
            오픈소스, 추천 등 다양한 주제를 다루며, 카카오가 주최하고 참여하는
            기술 행사 소식도 공유합니다.
          </Discription>
        </AttitudeItem>
        <AttitudeItem>
          <Title>꾸준함</Title>
          <Discription>
            카카오의 기술과 노하우를 공유하고자 개발자 컨퍼런스와 기술 세미나를
            진행하고 있습니다. 또한 카카오가 제공한 데이터를 활용한 경진대회와
            코드 경진대회를 진행하고 있습니다. 카카오가 주최하는 기술 이벤트
            뿐만 아니라, 후원하거나 참여하는 개발자 커뮤니티, 학회, 학교 등의
            기술 이벤트에 대한 소식도 공유합니다.
          </Discription>
        </AttitudeItem>
        <AttitudeItem>
          <Title>소통</Title>
          <Discription>
            카카오의 개발자들이 외부 개발자가 서로 소통하고 배우며 성장하길
            희망합니다. 카카오가 코드를 공개하는 것은 이러한 목표를 달성하기
            위한 시도이며, 개발자 커뮤니티와 함께 코드를 발전시키길 기대합니다.
          </Discription>
        </AttitudeItem>
      </AttitudeWrapper>
    </PortfolioSummaryWrapper>
  );
};

export default PortfolioSummary;