// black (spades ♠), red (hearts ♥), blue (diamonds ♦) and green (clubs ♣).
// S, H, D, C
const _52Cards = [
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
const _32Cards = [
	"AS",
	"AH",
	"AD",
	"AC",
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
// export function getCard(player_cards) {
// 	return Math.floor(Math.random() * _52Cards.length);
// }

export function getShuffledCards(num = 52) {
	const cards = num === 52 ? _52Cards : _32Cards;
	const newCards = [...cards];
	newCards.sort(() => Math.random() - 0.5);
	return newCards;
}
