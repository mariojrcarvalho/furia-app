import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFistRaised, FaComments, FaTrophy } from 'react-icons/fa';

const ChatContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(26, 26, 26, 0.8);
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: rgba(42, 42, 42, 0.7);
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: bold;
  color:rgb(244, 240, 240);
`;

const ChatArea = styled.div`
  height: 500px;
  overflow-y: auto;
  padding: 20px;
  background: rgba(42, 42, 42, 0.7);
  border-radius: 8px;
  margin-bottom: 20px;
`;

const MessageInput = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: #3a3a3a;
  color: #fff;
  font-size: 16px;

  &:focus {
    outline: 2px solid rgb(245, 239, 239);
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background:rgb(0, 255, 26);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background:rgb(0, 204, 126);
  }
`;

const Message = styled(motion.div)`
  padding: 10px;
  margin: 10px 0;
  background: ${({ isUser }) => isUser ? '#ff0000' : '#3a3a3a'};
  border-radius: 8px;
  max-width: 80%;
  align-self: ${({ isUser }) => isUser ? 'flex-end' : 'flex-start'};
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      text: newMessage,
      user: 'Você',
      timestamp: new Date().toLocaleTimeString(),
    };
    
    setMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  return (
    <ChatContainer>
      <Header>
        <Logo>
          <FaFistRaised />
          FURIA Chat
        </Logo>
        <div>
          <FaTrophy /> Próximo Jogo: FURIA vs FAZE CLAN
        </div>
      </Header>

      <ChatArea>
        {messages.map(({ id, user, text, timestamp }) => (
          <Message
            key={id}
            isUser={user === 'Você'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <strong>{user}</strong>
            <p>{text}</p>
            <small>{timestamp}</small>
          </Message>
        ))}
      </ChatArea>

      <form onSubmit={handleSendMessage}>
        <MessageInput>
          <Input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
          />
          <Button type="submit">
            <FaComments /> Enviar
          </Button>
        </MessageInput>
      </form>
    </ChatContainer>
  );
};

export default Chat; 