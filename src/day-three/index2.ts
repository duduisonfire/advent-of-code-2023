import fs from 'fs/promises';

const file = (await fs.readFile('./src/day-three/input.txt', 'utf-8')).split('\n');
const matrix: string[][] = [];

file.forEach((e) => {
  const line: string[] = [];
  e.split('').forEach((char) => {
    line.push(char);
  });
  matrix.push(line);
});

for (let index = 0; index < matrix.length; index++) {
  console.log(matrix[index]);
}

function isNumber(str: string) {
  const num = Number(str);
  return !Number.isNaN(num);
}

function lineIterator(line: string[], index: number, validNumber: string[]) {
  while (isNumber(line[index])) {
    index--;
  }

  index++;
  let string = '';

  while (isNumber(line[index])) {
    string += line[index];
    line[index] = '.';
    index++;
  }

  if (string !== '') validNumber.push(string);
}

let output = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    const valid: string[] = [];

    if (matrix[i][j] === '*') {
      if (matrix[i - 1][j - 1] !== null && isNumber(matrix[i - 1][j - 1])) {
        lineIterator(matrix[i - 1], j - 1, valid);
      }

      if (matrix[i - 1][j] !== null && isNumber(matrix[i - 1][j])) {
        lineIterator(matrix[i - 1], j, valid);
      }

      if (matrix[i - 1][j + 1] !== null && isNumber(matrix[i - 1][j + 1])) {
        lineIterator(matrix[i - 1], j + 1, valid);
      }

      if (matrix[i][j - 1] !== null && isNumber(matrix[i][j - 1])) {
        lineIterator(matrix[i], j - 1, valid);
      }

      if (matrix[i][j + 1] !== null && isNumber(matrix[i][j + 1])) {
        lineIterator(matrix[i], j + 1, valid);
      }

      if (matrix[i + 1][j - 1] !== null && isNumber(matrix[i + 1][j - 1])) {
        lineIterator(matrix[i + 1], j - 1, valid);
      }

      if (matrix[i + 1][j] !== null && isNumber(matrix[i + 1][j])) {
        lineIterator(matrix[i + 1], j, valid);
      }

      if (matrix[i + 1][j + 1] !== null && isNumber(matrix[i + 1][j + 1])) {
        lineIterator(matrix[i + 1], j + 1, valid);
      }
    }

    if (valid.length === 2) {
      const value = Number(valid[0]) * Number(valid[1]);
      output += value;
    }
  }
}

// console.log(validNumber);
console.log(output);
