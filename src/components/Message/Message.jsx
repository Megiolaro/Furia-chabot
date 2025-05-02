import React from 'react';
import FuriaIcon from '../../assets/furia-icon.png';
import { MessageContainer, Avatar, AvatarImage, MessageBubble, QuizOptions, QuizOption,
  PlayersList, PlayerCard, PlayerName, PlayerRole
 } from './Message.styles'

const Message = ({ sender, text, type, options, onOptionClick, onPlayerClick }) => {
  const formatText = (text) => {
    if (!text) return '';
    
    // Formata textos com quebras de linha
    return text.split('\\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split('\\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const renderContent = () => {
    if (type === 'elenco') {
      const players = [
        { name: 'FalleN', role: 'InGame-Lider' },
        { name: 'KSCERATO', role: 'Rifler' },
        { name: 'Molodoy', role: 'AWPer' },
        { name: 'yuurih', role: 'Rifler' },
        { name: 'YEKINDAR', role: 'Rifler' },
      ];
      
      return (
        <>
          <div>Elenco atual da FURIA:</div>
          <PlayersList>
            {players.map((player, index) => (
              <PlayerCard key={index} onClick={() => onPlayerClick(player.name.toLowerCase())}>
                <PlayerName>{player.name}</PlayerName>
                <PlayerRole>{player.role}</PlayerRole>
              </PlayerCard>
            ))}
          </PlayersList>
        </>
      );
    }
    
    return formatText(text);
  };

  return (
    <MessageContainer sender={sender}>
      {sender === 'bot' && (
        <Avatar sender={sender}>
          <AvatarImage src={FuriaIcon} alt="FURIA" />
        </Avatar>
      )}
      <MessageBubble sender={sender}>
        {renderContent()}
        {options && (
          <QuizOptions>
            {options.map((option, index) => (
              <QuizOption key={index} onClick={() => onOptionClick(index)}>
                {option}
              </QuizOption>
            ))}
          </QuizOptions>
        )}
      </MessageBubble>
      {sender === 'user' && (
        <Avatar sender={sender} />
      )}
    </MessageContainer>
  );
};

export default Message;