import fs from 'fs/promises';

const input = await fs.readFile('./src/day-one/day1.txt', 'utf-8');
const regex = /\d/g;
const dictionary = [/(one)/g, /(two)/g, /(three)/g, /(four)/g, /(five)/g, /(six)/g, /(seven)/g, /(eight)/g, /(nine)/g];

const lines = input.split('\n').map((l) => {
  dictionary.map((r, i) => (l = l.replace(r, `$1${i + 1}$1`)));
  return l;
});

const output = lines.reduce((acc, curr) => {
  const matches = curr.match(regex) ?? ['0'];
  const number = (matches.at(0) ?? '') + (matches.at(-1) ?? '');

  return acc + +number;
}, 0);

console.log(output);
