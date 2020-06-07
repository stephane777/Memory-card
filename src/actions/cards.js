export const FLIP_CARD = "FLIP_CARD";
export const FLIP_CARDS_BACK = "FLIP_CARDS_BACK";
export const DISCOVERED_PAIR = "DISCOVERED_PAIR";
export const SHUFFLE_CARDS = "SHUFFLE_CARDS";

export function flipCard(id) {
	return {
		type: FLIP_CARD,
		id,
	};
}

export function flipCardsBack(ids) {
	return {
		type: FLIP_CARDS_BACK,
	};
}
export function discoveredPair(ids) {
	return {
		type: DISCOVERED_PAIR,
		ids,
	};
}

// FLIPPED CARDS
// [
// 	{
// 		id:"_AC"
// 	},
// 	{
// 		id:"_10C"
// 	}
// ]
// Pair discovered
// [
// 	{
// 		id:"_AC"
// 	},
// 	{
// 		id:"_10C"
// 	}
// ]
