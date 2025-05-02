import { useState } from 'react';
import { quizQuestions } from '../data/quizQuestions';

export default function useQuiz(setMessages) {
  const [quizIndex, setQuizIndex] = useState(null);
  const [quizScore, setQuizScore] = useState(0);

  const startQuiz = () => {
    setQuizIndex(0);
    setMessages(prev => [...prev, 
      { sender: 'user', text: '/quiz' }, 
      {
        sender: 'bot',
        text: quizQuestions[0].question,
        quiz: true,
        options: quizQuestions[0].options
      }
    ]);
  };

  const handleOptionClick = (index) => {
    const isCorrect = index === quizQuestions[quizIndex].answer;
    if (isCorrect) setQuizScore((prev) => prev + 1);

    if (quizIndex + 1 < quizQuestions.length) {
      const nextIndex = quizIndex + 1;
      setQuizIndex(nextIndex);
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: quizQuestions[nextIndex].question,
        quiz: true,
        options: quizQuestions[nextIndex].options
      }]);
    } else {
      const acertos = isCorrect ? quizScore + 1 : quizScore;
      const acertosPercent = (acertos / quizQuestions.length) * 100;
      const msg =
        acertosPercent >= 75
          ? `🔥 Parabéns! Você acertou ${acertos}/5. Você é um FURIOSO de verdade!`
          : `😅 Você acertou ${acertos}/5. Ainda falta viver mais o universo FURIA.`;
      setMessages(prev => [...prev, { sender: 'bot', text: msg }]);
      setQuizIndex(null);
      setQuizScore(0);
    }
  };

  return {
    quizIndex,
    quizScore,
    startQuiz,
    handleOptionClick
  };
}
