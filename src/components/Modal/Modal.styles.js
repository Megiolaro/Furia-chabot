import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

export const ModalContent = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const PlayerImage = styled.img`
  width: 220px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
`;

export const PlayerName = styled.h2`
  margin: 15px 0 5px;
  font-size: 22px;
`;

export const PlayerRole = styled.div`
  font-size: 16px;
  color: #666666;
  margin-bottom: 15px;
`;

export const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
`;

export const StatLabel = styled.span`
  font-weight: bold;
`;

export const StatValue = styled.span``;

export const Bio = styled.p`
  margin-top: 15px;
  line-height: 1.5;
`;