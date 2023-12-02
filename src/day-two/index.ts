import fs from 'fs/promises';

class ColorScore {
  constructor(
    public score: string,
    public color: string,
  ) {}
}

function ScoreFactory(combination: string) {
  let score = '';
  let color = '';

  combination.split('').forEach((char) => {
    if ('0123456789'.includes(char)) score += char;
    else color += char;
  });

  return new ColorScore(score, color);
}

const games: Map<string, ColorScore[]> = new Map();
const file = (await fs.readFile('./src/day-two/input.txt', 'utf-8')).split('\n');

file.forEach((e) => {
  let game = '';

  for (let index = 0; index < 8; index++) {
    if (e.charAt(index) !== ':' && e.charAt(index) !== ' ') game += e.charAt(index);
  }

  const element = e.split('');
  element.splice(0, 8);
  const match = element
    .join('')
    .split(';')
    .map((e) => e.replaceAll(' ', ''));

  const rounds: ColorScore[] = [];

  match.forEach((round) => {
    round.split(',').forEach((combination) => {
      const score = ScoreFactory(combination);
      rounds.push(score);
    });
  });

  games.set(game, rounds);
});

const red = 12;
const green = 13;
const blue = 14;

const possibleGame: string[] = [];

games.forEach((rounds, game) => {
  interface IColors {
    [index: string]: number;
  }
  const colors = {
    blue: 0,
    red: 0,
    green: 0,
  } as IColors;

  rounds.forEach((round) => {
    if (Number(round.score) > colors[round.color]) colors[round.color] = Number(round.score);
  });

  if (colors['blue'] <= blue && colors['green'] <= green && colors['red'] <= red) possibleGame.push(game);
});

const output = possibleGame.map((e) => e.replace(/\D/g, '')).reduce((a, b) => Number(a) + Number(b), 0);

console.log(output);
