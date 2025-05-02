import styled, { createGlobalStyle } from 'styled-components';

// Adicionar reset global
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

// Componentes estilizados para o layout principal
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: #000000;
  overflow: hidden;
`;

export const Header = styled.header`
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: ${props => (props.hidden ? 'none' : 'flex')};
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 40px;
  margin: 0 auto;
`;

export const ProfileButton = styled.button`
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const HeroImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  display: block;
  max-width: none;
`;

export const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
  display: ${props => (props.visible ? 'none' : 'block')};
`;

export const ChatButtonImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ChatOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1001;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;


export const ChatContainerFullscreen = styled.div`
  position: relative;
  width: 450px;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1100;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  pointer-events: auto;
`;