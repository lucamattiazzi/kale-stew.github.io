import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInDown } from 'react-animations';
import Card, { CardWrapper } from './components/card';
import Footer from './components/footer';
import Headshot from './assets/headshot.png';

import './app.css';

const projects = require('./projects.json');

const TitleWithHeadshot = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 400px;
  padding: 45px 50px 45px 50px;
  animation: 1s ${keyframes`${bounceInDown}`};

  @media (max-width: 1024px) {
    padding: 2rem 0;
    flex-direction: column;
    font-size: 24px;
  }
`;

const TitleWrapper = styled.span`
  display: flex;
  flex-direction: column;
  padding-left: 70px;
`;

const Title = styled.h1`
  margin-bottom: 4px;
  text-align: left;

  @media (max-width: 1024px) {
    width: 300px;
    font-size: 58px;
    line-height: 42px;
  }
`;

const TitleImg = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 6rem;
`;

const ContentWrapper = styled.div`
  height: 100%;
`;

export default function App() {
  return (
    <Fragment>
      <header />
      <ContentWrapper>
        <TitleWithHeadshot>
          <TitleImg src={Headshot} alt="Kylie Stewart's headshot" />
          <TitleWrapper>
            <Title>Hi,</Title>
            <Title>I'm Kylie</Title>
          </TitleWrapper>
        </TitleWithHeadshot>
        <CardWrapper>
          {projects.map(project => (
            <Card item={project} key={project.title} />
          ))}
        </CardWrapper>
      </ContentWrapper>
      <Footer />
    </Fragment>
  );
}
