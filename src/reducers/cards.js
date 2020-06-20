import { NEW_GAME, CHANGE_TO_32, CHANGE_TO_52 } from "../actions/cards";
import { getShuffledCards } from "../components/Utils";

function createCards(num) {
	const cards = getShuffledCards(num);
	const cardsWithID = cards.map((card) => ({
		id: card,
	}));
	return cardsWithID;
}
const initialState = {
	numOfCards: 52,
	cardsSet: createCards(52),
};

export default function cards(state = initialState, action) {
	switch (action.type) {
		case NEW_GAME:
			return {
				...state,
				cards: createCards(state.numOfCards),
			};
		case CHANGE_TO_52:
			return {
				numOfCards: 52,
				cardsSet: createCards(52),
			};
		case CHANGE_TO_32:
			return {
				numOfCards: 32,
				cardsSet: createCards(32),
			};
		default:
			return state;
	}
}
