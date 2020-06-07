// black (spades ♠), red (hearts ♥), blue (diamonds ♦) and green (clubs ♣).
// S, H, D, C
const player_cards = [
	"AS",
	"AH",
	"AD",
	"AC",
	"2S",
	"2H",
	"2D",
	"2C",
	"3S",
	"3H",
	"3D",
	"3C",
	"4S",
	"4H",
	"4D",
	"4C",
	"5S",
	"5H",
	"5D",
	"5C",
	"6S",
	"6H",
	"6D",
	"6C",
	"7S",
	"7H",
	"7D",
	"7C",
	"8S",
	"8H",
	"8D",
	"8C",
	"9S",
	"9H",
	"9D",
	"9C",
	"10S",
	"10H",
	"10D",
	"10C",
	"JS",
	"JH",
	"JD",
	"JC",
	"QS",
	"QH",
	"QD",
	"QC",
	"KS",
	"KH",
	"KD",
	"KC",
];

export function getCard(player_cards) {
	return Math.floor(Math.random() * player_cards.length);
}

export function getShuffledCards() {
	const newCards = [...player_cards];
	newCards.sort(() => Math.random() - 0.5);
	return newCards;
}
