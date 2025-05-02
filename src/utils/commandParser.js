export function interpretarComando(texto) {
    const lower = texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  
    if (
      lower.includes('quiz') ||
      lower.includes('quero jogar') ||
      lower.includes('teste de conhecimento')
    ) return '/quiz';
  
    if (
      lower.includes('ajuda') ||
      lower.includes('comandos') ||
      lower.includes('o que posso') ||
      lower.includes('como usar')
    ) return '/ajuda';
  
    if (
      lower.includes('elenco') ||
      lower.includes('jogadores') ||
      lower.includes('quem joga') ||
      (lower.includes('quem sao') && lower.includes('jogadores'))
    ) return '/elenco';
  
    if (
      lower.includes('proximo jogo') ||
      lower.includes('agenda') ||
      lower.includes('quando a furia joga') ||
      lower.includes('qual o jogo') ||
      lower.includes('jogo')
    ) return '/jogos';
  
    if (
      lower.includes('curiosidade') ||
      lower.includes('me conta algo') ||
      lower.includes('fato curioso')
    ) return '/curiosidade';
  
    if (
      lower.includes('noticia') ||
      lower.includes('novidade') ||
      lower.includes('ultimas da furia')
    ) return '/news';
  
    if (
      lower.includes('grito') ||
      lower.includes('vamos furia') ||
      lower.includes('torcida')
    ) return '/grito';
  
    if (
      lower.includes('loja') ||
      lower.includes('camisa') ||
      lower.includes('manto') ||
      lower.includes('comprar') ||
      lower.includes('site')
    ) return '/loja';
  
    return texto;
  }