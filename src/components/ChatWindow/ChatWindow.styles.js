import styled from 'styled-components';

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  overflow: hidden;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  background-color: #000000;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ChatLogo = styled.img`
  height: 40px;
  width: auto;
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  background-color: #ffffff;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 30px;
  background-color: #f0f0f0;
  font-size: 14px;
  outline: none;
  
  &::placeholder {
    color: #757575;
  }
`;

export const SendButton = styled.button`
  background-color: transparent;
  border: none;
  color: #000000;
  font-weight: bold;
  padding: 12px 15px;
  cursor: pointer;
  margin-left: 10px;
`;

export const LiveGameInfo = styled.div`
  text-align: center;
  margin: 10px 0;
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 8px 0;
  border-radius: 4px;
`;

export const QuickButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const QuickButton = styled.button`
  margin: 0 5px;
  padding: 8px 10px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    background-color: #333333;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;


export const FansSection = styled.div`
   flex: 1;
   max-width: 1300px;
   background-color: #f0f0f0;
   border-left: 1px solid #ccc;
   overflow-y: auto;
   padding: 10px;
   position: relative;
 `;

export const FansSectionHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 5px 0;
   margin-bottom: 10px;
   border-bottom: 1px solid #ccc;
   position: sticky;
   top: 0;
  background-color: #f0f0f0;
   z-index: 10;
 `;

export const OnlineFans = styled.span`
  font-weight: bold;
  color: #000;
`;

export const ToggleFansButton = styled.button`
  background-color: transparent;
  border: none;
  color: #555;
  cursor: pointer;
  font-size: 13px;
  text-decoration: underline;
  
  &:hover {
    color: #000;
  }
`;

export const FanMessage = styled.div`
  margin: 8px 15px;
  padding: 8px 12px;
  background-color: ${props => props.highlight ? '#ffefd5' : '#f8f8f8'};
  border-radius: 8px;
  font-size: 13px;
  max-width: 85%;
  margin-right: auto;
`;

export const FanName = styled.span`
  font-weight: bold;
  color: #555;
  margin-right: 5px;
`;
