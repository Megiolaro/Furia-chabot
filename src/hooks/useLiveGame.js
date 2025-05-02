import { useState, useEffect } from 'react';
import { generateRandomGameResult } from '../utils/randomGenerators';
import { getRandomEventReaction, getRandomFanMessage } from '../utils/randomGenerators';

export default function useLiveGame(setMessages, addFanMessage) {
  const [gameStarted, setGameStarted] = useState(false);
  const [liveGame, setLiveGame] = useState({ placar: '', minuto: 0 });
  const [gameActive, setGameActive] = useState(false);

  // Efeito para iniciar o jogo após 15 segundos e simular o jogo ao vivo
  useEffect(() => {
    if (!gameStarted) {
      const gameTimer = setTimeout(() => {
        setGameStarted(true);
        setGameActive(true);
        // Notificar o usuário
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: '🔴 JOGO COMEÇANDO AGORA! FURIA vs FaZe! Acompanhe ao vivo!'
        }]);

        // Gerar placares aleatórios
        const placares = generateRandomGameResult();
        let index = 0;

        const interval = setInterval(() => {
          if (index < placares.length) {
            const update = placares[index];
            setLiveGame(update);
            setMessages(prev => [...prev, {
              sender: 'bot',
              text: `🕒 ${update.minuto}min: Placar Atual - ${update.placar}`
            }]);

            // Adicionar reações de fãs quando atualiza o placar
            setTimeout(() => {
              const isLastRound = index === placares.length - 1;
              const isVictory = placares[placares.length - 1].placar.includes('VITÓRIA');
              const reactionCount = isLastRound ? 8 : Math.floor(Math.random() * 3) + 2;

              for (let i = 0; i < reactionCount; i++) {
                setTimeout(() => {
                  // Nas rodadas finais ou vitória, destaque as mensagens
                  const highlight = isLastRound || Math.random() > 0.7;
                  const eventType = isLastRound ? 'clutch' : (Math.random() > 0.5 ? 'kill' : 'round');

                  // Mensagens diferentes dependendo se é vitória ou derrota
                  if (isLastRound && !isVictory) {
                    addFanMessage(["Poxa, na próxima a gente consegue!",
                      "Não foi hoje, mas somos FURIA!",
                      "Vamos melhorar na próxima!",
                      "Ainda acredito nesse time!"][Math.floor(Math.random() * 4)], highlight);
                  } else {
                    addFanMessage(getRandomEventReaction(eventType), highlight);
                  }
                }, i * 800);
              }
            }, 1000);

            index++;
          } else {
            clearInterval(interval);
            setGameActive(false);

            // Mensagem final depende do resultado
            const isVictory = placares[placares.length - 1].placar.includes('VITÓRIA');
            if (isVictory) {
              addFanMessage("CAMPEÕES!!! FURIA É A MELHOR!!!", true);
            } else {
              addFanMessage("Não foi dessa vez... Mas seguimos com vocês! ❤️", true);
            }
          }
        }, 30000); // Atualiza a cada 30 segundos

        return () => {
          clearInterval(interval);
          clearTimeout(gameTimer);
        };
      }, 15000); // Iniciar após 15 segundos

      return () => clearTimeout(gameTimer);
    }
  }, [gameStarted, setMessages, addFanMessage]);

  // Simular mensagens de fãs durante o jogo
  useEffect(() => {
    if (!gameActive) return;

    // Gerar mensagens de fãs aleatórias
    const messageInterval = setInterval(() => {
      // Chance maior de mensagens durante momentos importantes do jogo
      if (Math.random() > 0.7) {
        addFanMessage(getRandomFanMessage());
      }
    }, 5000);

    return () => clearInterval(messageInterval);
  }, [gameActive, addFanMessage]);

  return {
    gameStarted,
    setGameStarted,
    liveGame,
    setLiveGame,
    gameActive,
    setGameActive
  };
}