import fs from 'fs/promises';

const buffer = await fs.readFile('./src/input.txt', 'utf-8');
const file = buffer.split('\n');
const numbers = file
  .map((e) => e.replace(/\D/g, ''))
  .map((e) => e.charAt(0) + e.charAt(e.length - 1))
  .reduce((a, b) => Number(a) + Number(b), 0);

console.log(numbers);
