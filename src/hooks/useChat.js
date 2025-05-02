import { useState, useEffect, useRef } from 'react';
import { interpretarComando } from '../utils/commandParser';
import { comandos } from '../data/commands';
import { jogadores } from '../data/players';
import { getRandomFanName, getRandomEventReaction } from '../utils/randomGenerators';

export default function useChat(onQuizStart) {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Fala, torcedor da FURIA! 🐺 Manda um comando ou digite /ajuda.' }
  ]);
  const [input, setInput] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [fanMessages, setFanMessages] = useState([]);
  const [onlineFans, setOnlineFans] = useState(237);
  const [showFans, setShowFans] = useState(false);

  // Refs para rolagem
  const chatMessagesRef = useRef(null);
  const fansMessagesRef = useRef(null);

  // Adicionar mensagem de fã
  const addFanMessage = (messageText, highlight = false) => {
    const newMessage = { 
      name: getRandomFanName(), 
      text: messageText, 
      highlight,
      timestamp: new Date().getTime()
    };
    
    setFanMessages(prev => {
      // Manter apenas as últimas 15 mensagens
      const updatedMessages = [...prev, newMessage];
      return updatedMessages.slice(-15);
    });
  };

  // Rolar para o final quando novas mensagens chegarem
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  // Rolar para o final quando novas mensagens de fãs chegarem
  useEffect(() => {
    if (fansMessagesRef.current && showFans) {
      fansMessagesRef.current.scrollTop = fansMessagesRef.current.scrollHeight;
    }
  }, [fanMessages, showFans]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    let botReply;

    const comando = interpretarComando(input);

    if (comando === '/quiz') {
      onQuizStart();
      setInput('');
      return;
    }

    if (comandos[comando]) {
      const cmd = comandos[comando];
      if (typeof cmd === 'string') {
        botReply = { sender: 'bot', text: cmd };
      } else if (cmd.type === 'elenco') {
        botReply = { sender: 'bot', type: 'elenco' };
      } else {
        botReply = { sender: 'bot', custom: true, content: cmd.content };
      }
    } else if (comando.toLowerCase().startsWith('/jogador ')) {
      const nome = comando.replace('/jogador ', '').trim();
      botReply = { sender: 'bot', text: jogadores[nome] || 'Jogador não encontrado. Tente novamente com outro nome.' };
    } else {
      botReply = { sender: 'bot', text: 'Não entendi 😅 Tenta /ajuda pra ver os comandos.' };
    }

    setMessages([...messages, userMsg, botReply]);
    setInput('');
  };

  const handleQuickMessage = (text) => {
    setMessages(prev => [...prev, { sender: 'user', text }, { sender: 'bot', text: '🐺 A torcida tá insana!' }]);

    // Gera reações de outros fãs ao seu grito
    setTimeout(() => {
      const reactionCount = Math.floor(Math.random() * 3) + 2; // 2-4 reações
      for (let i = 0; i < reactionCount; i++) {
        setTimeout(() => {
          addFanMessage(getRandomEventReaction('round'), false);
        }, i * 800);
      }
    }, 500);
  };

  return {
    messages,
    setMessages,
    input,
    setInput,
    selectedPlayer,
    setSelectedPlayer,
    fanMessages,
    setFanMessages,
    onlineFans,
    setOnlineFans,
    showFans,
    setShowFans,
    chatMessagesRef,
    fansMessagesRef,
    handleSend,
    handleQuickMessage,
    addFanMessage
  };
}