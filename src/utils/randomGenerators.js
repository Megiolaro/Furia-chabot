import { fanNamesList, fanMessagesList, eventReactions } from '../data/fanMessages';

// Gerar um nome de fã aleatório
export const getRandomFanName = () => {
  return fanNamesList[Math.floor(Math.random() * fanNamesList.length)];
};

// Gerar uma mensagem aleatória de fã
export const getRandomFanMessage = () => {
  return fanMessagesList[Math.floor(Math.random() * fanMessagesList.length)];
};

// Gerar uma reação aleatória para um evento específico
export const getRandomEventReaction = (eventType) => {
  const reactions = eventReactions[eventType];
  return reactions[Math.floor(Math.random() * reactions.length)];
};

// Função para gerar resultado aleatório (vitória ou derrota)
export const generateRandomGameResult = () => {
  // 60% chance de vitória, 40% chance de derrota
  const furiaScorerWill = Math.random() > 0.4;

  if (furiaScorerWill) {
    return [
      { minuto: 5, placar: '3 x 1' },
      { minuto: 10, placar: '7 x 4' },
      { minuto: 15, placar: '10 x 8' },
      { minuto: 20, placar: '13 x 12' },
      { minuto: 25, placar: '16 x 14 - VITÓRIA DA FURIA! 🏆' }
    ];
  } else {
    return [
      { minuto: 5, placar: '2 x 4' },
      { minuto: 10, placar: '5 x 8' },
      { minuto: 15, placar: '8 x 11' },
      { minuto: 20, placar: '12 x 14' },
      { minuto: 25, placar: '14 x 16 - DERROTA DA FURIA! 😢' }
    ];
  }
};