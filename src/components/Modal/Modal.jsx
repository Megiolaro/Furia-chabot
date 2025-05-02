import React from 'react';
import FallenImage from '../../assets/fallen.png';
import YuuhihImage from '../../assets/yuurih.png';
import KSImage from '../../assets/ks.png';
import MolodoyImage from '../../assets/molodoy.png';
import YedindarImage from '../../assets/yekindar.png';
import { ModalOverlay, ModalContent, CloseButton, PlayerImage, PlayerName,
   PlayerRole, StatRow, StatLabel, Bio, StatValue } from './Modal.styles'


const Modal = ({ jogador, onClose }) => {
  // Dados mockados para demonstração
  const jogadores = {
    fallen: {
      nome: 'Gabriel "FalleN" Toledo',
      posicao: 'AWPer / IGL',
      imagem: FallenImage,
      estatisticas: {
        kd: '1.15',
        rating: '1.12',
        hs: '38.5%',
        campeonatos: 'Major (2x), ESL One, BLAST'
      },
      bio: 'Gabriel "FalleN" Toledo é considerado um dos maiores jogadores de CS:GO da história do Brasil. Além de ser um excelente AWPer, é também um líder nato, conhecido por sua visão estratégica e capacidade de desenvolver novos talentos.'
    },
    kscerato: {
      nome: 'Kaike "KSCERATO" Cerato',
      posicao: 'Rifler',
      imagem: KSImage,
      estatisticas: {
        kd: '1.25',
        rating: '1.21',
        hs: '62.7%',
        campeonatos: 'DreamHack, IEM Rio'
      },
      bio: 'Kaike "KSCERATO" Cerato é um dos maiores talentos do CS:GO brasileiro. Conhecido por sua consistência e precisão impressionante, destaca-se especialmente em situações de clutch.'
    },
    molodoy: {
      nome: 'Dmitry "Molodoy" Frolov',
      posicao: 'AWPer',
      imagem: MolodoyImage,
      estatisticas: {
        kd: '1.18',
        rating: '1.15',
        hs: '35.2%',
        campeonatos: 'IEM Rio, BLAST'
      },
      bio: 'Dmitry "Molodoy" Frolov é um AWPer talentoso conhecido por seu estilo agressivo e jogadas de alto risco que frequentemente surpreendem os adversários.'
    },
    yuurih: {
      nome: 'Yuri "yuurih" Santos',
      posicao: 'Rifler',
      imagem: YuuhihImage,
      estatisticas: {
        kd: '1.20',
        rating: '1.19',
        hs: '59.1%',
        campeonatos: 'IEM Dallas, ESL Pro League'
      },
      bio: 'Yuri "yuurih" Santos é uma peça chave na equipe da FURIA, conhecido por sua mira afiada e posicionamento inteligente. É um dos riflers mais consistentes do cenário brasileiro.'
    },
    yekindar: {
      nome: 'Mareks "YEKINDAR" Gaļinskis',
      posicao: 'Entry Fragger',
      imagem: YedindarImage,
      estatisticas: {
        kd: '1.10',
        rating: '1.13',
        hs: '67.4%',
        campeonatos: 'ESL Pro League, IEM Katowice'
      },
      bio: 'Mareks "YEKINDAR" Gaļinskis é conhecido por seu estilo agressivo como entry fragger. Ex-jogador da Virtus.pro e Liquid, destaca-se pela capacidade de abrir espaço nas rodadas com muita confiança.'
    }
  };

  const player = jogadores[jogador] || {
    nome: 'Jogador não encontrado',
    posicao: '-',
    imagem: '../assets/furia-icon.png',
    estatisticas: {
      kd: '-',
      rating: '-',
      hs: '-',
      campeonatos: '-'
    },
    bio: 'Informações não disponíveis para este jogador.'
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <PlayerImage src={player.imagem} alt={player.nome} />
        <PlayerName>{player.nome}</PlayerName>
        <PlayerRole>{player.posicao}</PlayerRole>
        
        <StatRow>
          <StatLabel>K/D Ratio:</StatLabel>
          <StatValue>{player.estatisticas.kd}</StatValue>
        </StatRow>
        <StatRow>
          <StatLabel>Rating 2.0:</StatLabel>
          <StatValue>{player.estatisticas.rating}</StatValue>
        </StatRow>
        <StatRow>
          <StatLabel>Headshot %:</StatLabel>
          <StatValue>{player.estatisticas.hs}</StatValue>
        </StatRow>
        <StatRow>
          <StatLabel>Campeonatos:</StatLabel>
          <StatValue>{player.estatisticas.campeonatos}</StatValue>
        </StatRow>
        
        <Bio>{player.bio}</Bio>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;