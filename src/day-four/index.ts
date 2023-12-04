import fs from 'fs/promises';

const buffer = (await fs.readFile('./src/day-four/input.txt', 'utf-8')).split('\n');
const cards: string[] = [];
const cardsNumbers: number[] = [];

buffer.forEach((card) => {
	let cardTitle = '';
	const cardArray = card.split('');
	let index = 0;

	while (cardArray[index] !== ':') {
		cardTitle += cardArray[index];
		index++;
	}

	let parsedCard = cardArray.join('');

	parsedCard = parsedCard.replace(cardTitle + ':' + ' ', '');
	cards.push(parsedCard);
});

cards.forEach((card) => {
	const parsedCard = card.split('|');
	const victoryNumber = parsedCard[0].split(' ');
	const myNumbers = parsedCard[1].split(' ');

	let count = 0;
	console.log(victoryNumber);

	myNumbers.forEach((number) => {
		if (number !== '') {
			if (victoryNumber.includes(number)) {
				if (count === 0) count++;
				else count *= 2;
			}
		}
	});

	cardsNumbers.push(count);
});

console.log(cardsNumbers.reduce((a, b) => a + b, 0));
