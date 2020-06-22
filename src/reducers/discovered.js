import { DISCOVERED_PAIR } from "../actions/cards";
import { NEW_GAME, CHANGE_TO_32, CHANGE_TO_52 } from "../actions/cards";

export default function discovered(state = [], action) {
	switch (action.type) {
		case CHANGE_TO_32:
			return [];
		case CHANGE_TO_52:
			return [];
		case NEW_GAME:
			return [];
		case DISCOVERED_PAIR:
			return [...state, ...action.ids.map((id) => ({ id }))];
		default:
			return state;
	}
}
