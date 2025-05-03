import React from 'react';
import styled from 'styled-components';
import Chat from './components/Chat';
import GameStatus from './components/GameStatus';

const AppContainer = styled.div`
  min-height: 100vh;
  background: url('/images/furia-background.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(18, 18, 18, 0.6), rgba(18, 18, 18, 0.7));
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  backdrop-filter: blur(3px);
  border-radius: 10px;
`;

const Title = styled.h1`
  font-family: 'Techno';
  text-align: center;
  color: rgb(250, 248, 248);
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const App = () => (
  <AppContainer>
    <ContentWrapper>
      <Title>FURIA Chat</Title>
      <GameStatus />
      <Chat />
    </ContentWrapper>
  </AppContainer>
);

export default App;
