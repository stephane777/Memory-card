import { DISCOVERED_PAIR } from "../actions/cards";

export default function discovered(state = [], action) {
	switch (action.type) {
		case DISCOVERED_PAIR:
			return [...state, ...action.ids.map((id) => ({ id }))];
		default:
			return state;
	}
}
