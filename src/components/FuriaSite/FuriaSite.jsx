import { useState, useEffect } from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import { GlobalStyle, Container, Header, MenuButton, Logo, ProfileButton,
  ProfileIcon, MainContent, HeroImage, ChatButton, ChatButtonImage, ChatOverlay,
  ChatContainerFullscreen, BackButton,
 } from './FuriaSite.styles'

import FuriaBackground from '../../assets/furia-background.jpg';
import FuriaIcon from '../../assets/furia-icon.png';
import FuriaSign from '../../assets/assinatura.png';


// Componente principal
function FuriaSite() {
  const [showChat, setShowChat] = useState(false);
  
  // Adicionar useEffect para garantir que o body tenha as propriedades corretas
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
    };
  }, []);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleBackClick = () => {
    console.log("Botão voltar clicado!"); // Para debugging
    setShowChat(false);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <MainContent>
          <HeroImage src={FuriaBackground} alt="FURIA Team Champions" />
        </MainContent>
        
        
        <Header hidden={showChat}>
          <MenuButton>•••</MenuButton>
          <Logo src={FuriaSign} alt="FURIA" />
          <ProfileButton>
            <ProfileIcon />
          </ProfileButton>
        </Header>
      
        <ChatButton onClick={toggleChat} visible={showChat}>
          <ChatButtonImage src={FuriaIcon} alt="Chat" />
        </ChatButton>

        {showChat && (
          <>
            <ChatOverlay visible={true} onClick={() => setShowChat(false)}>
              <ChatContainerFullscreen onClick={(e) => e.stopPropagation()}>
                <ChatWindow />
              </ChatContainerFullscreen>
            </ChatOverlay>
            
            <BackButton onClick={handleBackClick}>&lt;</BackButton>
          </>
        )}
      </Container>
    </>
  );
}

export default FuriaSite;