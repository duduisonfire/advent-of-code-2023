import fs from 'fs/promises';

interface IJogadas {
  [key: string]: string;
}

interface IPontos {
  [key: string]: number;
}

function winner(jogador: string, maquina: string) {
  if (jogador === 'pedra' && maquina === 'tesoura') return 6;
  if (jogador === 'papel' && maquina === 'pedra') return 6;
  if (jogador === 'tesoura' && maquina === 'papel') return 6;

  if (jogador === 'tesoura' && maquina === 'pedra') return 0;
  if (jogador === 'pedra' && maquina === 'papel') return 0;
  if (jogador === 'papel' && maquina === 'tesoura') return 0;

  return 3;
}

const buffer = await fs.readFile('./src/day-two/input.txt', 'utf-8');
const file = buffer.split('\n');

const jogadas = {
  a: 'pedra',
  x: 'pedra',
  b: 'papel',
  y: 'papel',
  c: 'tesoura',
  z: 'tesoura',
} as IJogadas;

const pontos = {
  pedra: 1,
  papel: 2,
  tesoura: 3,
} as IPontos;

const partidas: number[] = [];

for (let index = 0; index < file.length; index++) {
  let score = 0;
  const player = jogadas[file[index].charAt(2).toLowerCase()];
  const bot = jogadas[file[index].charAt(0).toLowerCase()];
  score += pontos[player];
  score += winner(player, bot);

  partidas.push(score);
}

const result = partidas.reduce((a, b) => a + b, 0);

console.log(result);
