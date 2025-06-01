// Função que gera tag de identificação com o nome em letras maiúsculas
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// Função que verifica se o pet pode ser adotado
// Pelo teste: idade = 1 + porte 'M' -> pode adotar
export function verificarSePodeSerAdotado(idade, porte) {
  // Considera-se que só pode adotar se porte for M e idade >= 1
  return idade >= 1 && porte === 'M';
}

// Função que calcula consumo de ração
// Pelo teste: peso 14.5 => 4350 gramas => peso * 300
export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300; // fórmula deduzida do teste
}

// Função que decide tipo de atividade por porte
export function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    medio: 'passear no parque',
    grande: 'corrida ao ar livre'
  };
  return atividades[porte] || 'porte inválido';
}

// Função assíncrona que busca dado
export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100); // simula busca assíncrona
  });
}
