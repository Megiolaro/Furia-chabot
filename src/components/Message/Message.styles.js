import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 12px;
  justify-content: ${(props) => (props.sender === 'user' ? 'flex-end' : 'flex-start')};
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.sender === 'user' ? '#e0e0e0' : '#000000')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => (props.sender === 'user' ? '0' : '8px')};
  margin-left: ${(props) => (props.sender === 'user' ? '8px' : '0')};
  order: ${(props) => (props.sender === 'user' ? '1' : '0')};
`;

export const AvatarImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const MessageBubble = styled.div`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 18px;
  font-size: 14px;
  background-color: ${(props) =>
    props.sender === 'user' ? '#e0e0e0' : '#000000'};
  color: ${(props) => (props.sender === 'user' ? '#000000' : '#ffffff')};
  word-wrap: break-word;
`;

export const QuizOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
`;

export const QuizOption = styled.button`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 8px;
  text-align: left;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PlayersList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

export const PlayerCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const PlayerName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: #000;
`;

export const PlayerRole = styled.div`
  font-size: 12px;
  color: #666666;
`;
