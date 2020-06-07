import { SHUFFLE_CARDS } from "../actions/cards";
import { getShuffledCards } from "../components/Utils";

function createCards() {
	const cards = getShuffledCards();
	const state = cards.map((card) => ({
		id: card,
	}));
	return state;
}
const initialState = createCards();

export default function cards(state = initialState, action) {
	switch (action.type) {
		case SHUFFLE_CARDS:
			return createCards();
		default:
			return state;
	}
}
