import fs from 'fs/promises';

interface hash {
  [index: string]: string;
}

function contains(str: string) {
  if (str.includes('one')) return 'one';
  if (str.includes('two')) return 'two';
  if (str.includes('three')) return 'three';
  if (str.includes('four')) return 'four';
  if (str.includes('five')) return 'five';
  if (str.includes('six')) return 'six';
  if (str.includes('seven')) return 'seven';
  if (str.includes('eight')) return 'eight';
  if (str.includes('nine')) return 'nine';

  return '';
}

const buffer = await fs.readFile('./src/input.txt', 'utf-8');
const file = buffer.split('\n');
const numbers = '123456789';
const numHash = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
} as hash;

let finalString = '';
let numString = '';

const list: string[] = [];

file.forEach((string) => {
  finalString = '';
  numString = '';

  string.split('').forEach((char) => {
    if (numbers.includes(char)) {
      finalString += char;
      numString = '';
    } else {
      numString += char;
      if (contains(numString) !== '') {
        finalString += numHash[contains(numString)];
        numString = '';
      }
    }
  });

  list.push(finalString);
});

const output = list.map((e) => e.charAt(0) + e.charAt(e.length - 1)).reduce((a, b) => Number(a) + Number(b), 0);

console.log(output);
