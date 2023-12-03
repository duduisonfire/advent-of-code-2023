import fs from 'fs/promises';

const file = (await fs.readFile('./src/day-three/input.txt', 'utf-8')).split('\n');
const matrix: string[][] = [];
const validNumber: string[] = [];

file.forEach((e) => {
  const line: string[] = [];
  e.split('').forEach((char) => {
    line.push(char);
  });
  matrix.push(line);
});

// for (let index = 0; index < matrix.length; index++) {
//   console.log(matrix[index]);
// }

function isNumber(str: string) {
  const num = Number(str);
  return !Number.isNaN(num);
}

function lineIterator(line: string[], index: number) {
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

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (!isNumber(matrix[i][j]) && matrix[i][j] !== '.' && !/^[a-zA-Z]+$/.test(matrix[i][j])) {
      if (i - 1 >= 0) {
        if (isNumber(matrix[i - 1][j - 1])) {
          lineIterator(matrix[i - 1], j - 1);
        }

        if (isNumber(matrix[i - 1][j])) {
          lineIterator(matrix[i - 1], j);
        }

        if (isNumber(matrix[i - 1][j + 1])) {
          lineIterator(matrix[i - 1], j + 1);
        }
      }

      if (isNumber(matrix[i][j - 1])) {
        lineIterator(matrix[i], j - 1);
      }

      if (isNumber(matrix[i][j + 1])) {
        lineIterator(matrix[i], j + 1);
      }

      if (i + 1 < matrix.length) {
        if (isNumber(matrix[i + 1][j - 1])) {
          lineIterator(matrix[i + 1], j - 1);
        }

        if (isNumber(matrix[i + 1][j])) {
          lineIterator(matrix[i + 1], j);
        }

        if (isNumber(matrix[i + 1][j + 1])) {
          lineIterator(matrix[i + 1], j + 1);
        }
      }
    }
  }
}

// console.log(validNumber);
console.log(validNumber.reduce((a, b) => Number(a) + Number(b), 0));
