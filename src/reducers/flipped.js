import { FLIP_CARD, FLIP_CARDS_BACK, DISCOVERED_PAIR } from "../actions/cards";
import { NEW_GAME, CHANGE_TO_32, CHANGE_TO_52 } from "../actions/cards";

export default function flipped(state = [], action) {
	switch (action.type) {
		case FLIP_CARD:
			return [...state, { id: action.id }];
		case FLIP_CARDS_BACK:
			return [];
		case DISCOVERED_PAIR:
			return [];
		case NEW_GAME:
			return [];
		case CHANGE_TO_32:
			return [];
		case CHANGE_TO_52:
			return [];
		default:
			return state;
	}
}
