import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaBomb } from 'react-icons/fa';

const StatusContainer = styled(motion.div)`
  background: rgba(42, 42, 42, 0.7);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Team = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const TeamLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.3));
`;

const Score = styled.div`
  font-size: 32px;
  font-weight: bold;
  color:rgb(250, 248, 248);
`;

const MapInfo = styled.div`
  text-align: center;
  margin: 10px 0;
  color: #888;
`;

const PlayerStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 15px;
`;

const Player = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background: rgba(58, 58, 58, 0.7);
  border-radius: 4px;
  backdrop-filter: blur(3px);
`;

const PlayerInfo = styled.div`
  div {
    font-weight: bold;
  }
  small {
    color: #888;
  }
`;

const GAME_DATA = {
  map: 'Mirage',
  round: 12,
  score: {
    furia: 7,
    opponent: 5
  },
  players: [
    { name: 'Kscerato', kills: 15, deaths: 10, assists: 5 },
    { name: 'yuurih', kills: 12, deaths: 11, assists: 7 },
    { name: 'fallen', kills: 10, deaths: 12, assists: 8 },
    { name: 'molodoy', kills: 14, deaths: 9, assists: 4 },
    { name: 'Yekindar', kills: 11, deaths: 11, assists: 6 }
  ]
};

const GameStatus = () => (
  <StatusContainer
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <ScoreBoard>
      <Team>
        <TeamLogo src="/images/furia-logo.png" alt="FURIA" />
        FURIA
      </Team>
      <Score>{GAME_DATA.score.furia} - {GAME_DATA.score.opponent}</Score>
      <Team>
        NAVI
        <TeamLogo src="/images/navi-logo.png" alt="NAVI" />
      </Team>
    </ScoreBoard>

    <MapInfo>
      <FaBomb /> {GAME_DATA.map} - Round {GAME_DATA.round}
    </MapInfo>

    <PlayerStats>
      {GAME_DATA.players.map(({ name, kills, deaths, assists }) => (
        <Player key={name}>
          <FaHeart color="#ff0000" />
          <PlayerInfo>
            <div>{name}</div>
            <small>K/D/A: {kills}/{deaths}/{assists}</small>
          </PlayerInfo>
        </Player>
      ))}
    </PlayerStats>
  </StatusContainer>
);

export default GameStatus; 