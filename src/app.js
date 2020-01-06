import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import Avatar from '@material-ui/core/Avatar';
import Footer from './footer';
import Headshot from './headshot.png';

import './app.css';

const TitleWithHeadshot = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 400px;
  padding: 90px 50px 45px 50px;
  animation: 2s ${keyframes`${fadeInDown}`};
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  padding-left: 70px;
`;

const StyledSpan = styled.span`
  background-color: transparent;
  margin-bottom: 20px;
`;

export default function App() {
  return (
    <React.Fragment>
      <header />
      <body>
        <TitleWithHeadshot>
          <Avatar
            src={Headshot}
            style={{ width: 224, height: 224, borderRadius: 120 }}
            alt="Kylie Stewart's headshot"
          />
          <Title>
            <StyledSpan style={{ textAlign: 'left' }}>Hi,</StyledSpan>
            <StyledSpan>I'm Kylie</StyledSpan>
          </Title>
        </TitleWithHeadshot>
      </body>
      <Footer />
    </React.Fragment>
  );
}
