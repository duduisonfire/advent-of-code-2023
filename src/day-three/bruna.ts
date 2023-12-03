const fs = require('fs/promises');

async function main() {
  const buffer = await fs.readFile('./src/day-three/input2.txt', 'utf-8');
  const file = buffer.split('\n');
  const hq = makeHeadquartes(file);
  analyseHeadquartes(hq);
}
main();

function makeHeadquartes(array) {
  const hq = [];

  array.forEach((e) => {
    const line: string[] = [];
    e.split('').forEach((char) => {
      line.push(char);
    });
    hq.push(line);
  });
  return hq;
}
function isNumber(str: string) {
  const num = Number(str);
  return !Number.isNaN(num);
}
function analyseHeadquartes(hq) {
  for (let i = 0; i < hq.length; i++) {
    for (let j = 0; j < hq[i].length; j++) {
      if (!isNumber(hq[i][j]) && hq[i][j] !== '.' && !/^[a-zA-Z]+$/.test(hq[i][j])) {
        if (i - 1 >= 0 && j - 1 >= 0 && hq[i - 1][j - 1] !== '.') {
          console.log('yey é um numero adjacente diagonal esquerda superior');
          console.log('linha: ', i, 'coluna: ', j);
          console.log('O simbolo que esta adjacente: ', hq[i - 1][j - 1]);
        }
        if (i - 1 >= 0 && j >= 0 && hq[i - 1][j] !== '.') {
          console.log('yey é um numero adjacente superior');
          console.log('linha: ', i, 'coluna: ', j);
          console.log('O simbolo que esta adjacente: ', hq[i - 1][j]);
        }
        if (i - 1 >= 0 && j + 1 >= 0 && hq[i - 1][j + 1] !== '.') {
          console.log('yey é um numero adjacente diagonal direita superior');
          console.log('linha: ', i, 'coluna: ', j);
          console.log('O simbolo que esta adjacente: ', hq[i - 1][j + 1]);
        }
        if (i >= 0 && j + 1 >= 0 && hq[i][j + 1] !== '.') {
          console.log('yey é um numero adjacente  direita ');
          console.log('linha: ', i, 'coluna: ', j);
          console.log('O simbolo que esta adjacente: ', hq[i][j + 1]);
        }
        if (i + 1 >= 0 && j + 1 >= 0 && hq[i + 1][j + 1] !== '.') {
          console.log('yey é um numero adjacente diagonal direita inferior');
          console.log('linha: ', i, 'coluna: ', j);
          console.log('O simbolo que esta adjacente: ', hq[i + 1][j + 1]);
        }
        if (i + 1 >= 0 && j >= 0 && hq[i + 1][j] !== '.') {
          console.log('yey é um numero adjacente embaixo');
          console.log('linha: ', i, 'coluna: ', j);
          console.log('O simbolo que esta adjacente: ', hq[i + 1][j]);
        }
        if (i - 1 >= 0 && j - 1 >= 0 && hq[i - 1][j - 1] !== '.') {
          console.log('yey é um numero adjacente diagonal esquerda inferior');
          console.log('linha: ', i, 'coluna: ', j);
          console.log('O simbolo que esta adjacente: ', hq[i - 1][j - 1]);
        }
      }
    }
  }
}
