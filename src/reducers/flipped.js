import { FLIP_CARD, FLIP_CARDS_BACK, DISCOVERED_PAIR } from "../actions/cards";

export default function flipped(state = [], action) {
	switch (action.type) {
		case FLIP_CARD:
			return [...state, { id: action.id }];
		case FLIP_CARDS_BACK:
			return [];
		case DISCOVERED_PAIR:
			return [];
		default:
			return state;
	}
}
