import fs from 'fs/promises';

const buffer = await fs.readFile('./src/day-one/input.txt', 'utf-8');
const file = buffer.split('\n');

function contains(str: string) {
  if (str.includes('one')) return '1';
  if (str.includes('two')) return '2';
  if (str.includes('three')) return '3';
  if (str.includes('four')) return '4';
  if (str.includes('five')) return '5';
  if (str.includes('six')) return '6';
  if (str.includes('seven')) return '7';
  if (str.includes('eight')) return '8';
  if (str.includes('nine')) return '9';

  return '';
}

let finalString = '';
let numString = '';
const list: string[] = [];

file.forEach((string) => {
  finalString = '';
  numString = '';

  string.split('').forEach((char) => {
    if ('123456789'.includes(char)) {
      finalString += char;
      numString = '';
    } else {
      numString += char;
      if (contains(numString) !== '') {
        finalString += contains(numString);
        numString = '';
      }
    }
  });

  list.push(finalString);
});

const output = list.map((e) => e.charAt(0) + e.charAt(e.length - 1)).reduce((a, b) => Number(a) + Number(b), 0);

console.log(output);
