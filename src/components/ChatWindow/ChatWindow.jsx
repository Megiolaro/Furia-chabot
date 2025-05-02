// src/components/ChatWindow/ChatWindow.jsx
import { useEffect } from 'react';
import Message from '../Message/Message';
import FuriaSign from '../../assets/assinatura.png';
import Modal from '../Modal/Modal';
import {
  ChatBox, ChatHeader, ChatLogo, ChatMessages, ChatInputContainer, ChatInput,
  SendButton, LiveGameInfo, QuickButtonsContainer, QuickButton, ContentWrapper, FansSection,
  FansSectionHeader, OnlineFans, ToggleFansButton, FanMessage, FanName
} from './ChatWindow.styles';

// Importando custom hooks
import useChat from '../../hooks/useChat';
import useQuiz from '../../hooks/useQuiz';
import useLiveGame from '../../hooks/useLiveGame';

export default function ChatWindow() {
  // Inicializando os hooks customizados
  const chat = useChat(() => {
    quiz.startQuiz();
  });
  
  const quiz = useQuiz(chat.setMessages);
  
  const liveGame = useLiveGame(chat.setMessages, chat.addFanMessage);

  // Efeito para atualizar o número de fãs online aleatoriamente
  useEffect(() => {
    if (!liveGame.gameActive || !chat.showFans) return;

    // Número inicial aleatório de fãs online
    chat.setOnlineFans(Math.floor(Math.random() * 300) + 150);

    // Aleatoriamente mudar o número de fãs online
    const fansInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        chat.setOnlineFans(prev => {
          const change = Math.floor(Math.random() * 10) - 5;
          return Math.max(100, prev + change);
        });
      }
    }, 5000);

    return () => clearInterval(fansInterval);
  }, [liveGame.gameActive, chat.showFans]);

  return (
    <>
      <ChatBox>
        <ChatHeader>
          <ChatLogo src={FuriaSign} alt="FURIA logo" />
        </ChatHeader>

        {liveGame.gameStarted && (
          <LiveGameInfo>
            Furia x Faze: {liveGame.liveGame.placar} ({liveGame.liveGame.minuto}min ao vivo)
          </LiveGameInfo>
        )}

        <ContentWrapper>
          <ChatMessages ref={chat.chatMessagesRef}>
            {chat.messages.map((m, i) => (
              <Message
                key={i}
                sender={m.sender}
                text={m.text}
                type={m.type}
                options={m.options}
                onOptionClick={quiz.handleOptionClick}
                onPlayerClick={(name) => chat.setSelectedPlayer(name)}
              />
            ))}
          </ChatMessages>

          {chat.showFans && (
            <FansSection ref={chat.fansMessagesRef}>
              <FansSectionHeader>
                <OnlineFans>{chat.onlineFans} torcedores online</OnlineFans>
                <ToggleFansButton onClick={() => chat.setShowFans(false)}>Ocultar conversa</ToggleFansButton>
              </FansSectionHeader>

              {chat.fanMessages.map((msg, i) => (
                <FanMessage key={i} highlight={msg.highlight}>
                  <FanName>{msg.name}:</FanName>
                  {msg.text}
                </FanMessage>
              ))}
            </FansSection>
          )}

          {!chat.showFans && (
            <ToggleFansButton
              onClick={() => chat.setShowFans(true)}
              style={{ margin: '10px 15px', display: 'block' }}
            >
              Mostrar conversa entre torcedores ({chat.onlineFans})
            </ToggleFansButton>
          )}
        </ContentWrapper>

        <QuickButtonsContainer>
          <QuickButton onClick={() => chat.handleQuickMessage('🔥 VAMO FURIA! 🔥')}>🔥 Mandar Fogo</QuickButton>
          <QuickButton onClick={() => chat.handleQuickMessage('👏 Que jogada! 👏')}>👏 Aplaudir</QuickButton>
          <QuickButton onClick={() => chat.handleQuickMessage('❤️ Estamos com vocês! ❤️')}>❤️ Apoiar</QuickButton>
        </QuickButtonsContainer>

        <ChatInputContainer>
          <ChatInput
            type="text"
            placeholder="Digite sua mensagem..."
            value={chat.input}
            onChange={(e) => chat.setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && chat.handleSend()}
          />
          <SendButton onClick={chat.handleSend}>Enviar</SendButton>
        </ChatInputContainer>
      </ChatBox>

      {chat.selectedPlayer && (
        <Modal jogador={chat.selectedPlayer} onClose={() => chat.setSelectedPlayer(null)} />
      )}
    </>
  );
}