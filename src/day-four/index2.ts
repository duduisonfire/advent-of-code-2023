import fs from 'fs/promises';

const buffer = (await fs.readFile('./src/day-four/input.txt', 'utf-8')).split('\n');
const cardCounter: number[] = [];
const wins: number[] = [];
const cards: string[] = [];

function getTitle(card: string) {
	let cardTitle = '';
	const cardArray = card.split('');
	let index = 0;

	while (cardArray[index] !== ':') {
		cardTitle += cardArray[index];
		index++;
	}

	return cardTitle;
}

function parseCard(card: string) {
	const cardTitle = getTitle(card);

	return card.replace(cardTitle + ':' + ' ', '');
}

function countWins(number: string[], victoryNumber: string[]) {
	let count = 0;

	number.forEach((number) => {
		if (number !== '') {
			if (victoryNumber.includes(number)) {
				count++;
			}
		}
	});

	return count;
}

buffer.forEach((card) => {
	cardCounter.push(1);
	cards.push(parseCard(card));
});

cards.forEach((card) => {
	const parsedCard = card.split('|');
	const myNumbers = parsedCard[1].split(' ');
	const victoryNumber = parsedCard[0].split(' ');
	const win = countWins(myNumbers, victoryNumber);

	wins.push(win);
});

for (let i = 0; i < cardCounter.length; i++) {
	for (let j = i; j < wins[i] + i; j++) {
		cardCounter[j + 1] += cardCounter[i];
	}
}

console.log(cardCounter);
console.log(wins);
console.log(cardCounter.reduce((a, b) => a + b, 0));
