import {
	TOGGLE_HIDE_CARD,
	TOGGLE_PLAY,
	NEW_GAME,
	FLIP_CARD,
	DISCOVERED_PAIR,
	CHANGE_TO_32,
	CHANGE_TO_52,
} from "../actions/cards";

const initialState = {
	play_game: false, // or stop
	hideDiscovered: false,
	cardsFlipped: 0,
	pairsFound: 0,
	timer: "00:00:00", // mm:ss:ms
};

export default function control(state = initialState, action) {
	switch (action.type) {
		case DISCOVERED_PAIR:
			return {
				...state,
				pairsFound: state.pairsFound + 1,
			};
		case FLIP_CARD:
			return {
				...state,
				cardsFlipped: state.cardsFlipped + 1,
			};
		case TOGGLE_HIDE_CARD:
			return {
				...state,
				hideDiscovered: !state.hideDiscovered,
			};
		case TOGGLE_PLAY:
			return {
				...state,
				play_game: !state.play_game,
			};
		case NEW_GAME:
			return {
				...state,
				play_game: false,
				cardsFlipped: 0,
				pairsFound: 0,
			};
		case CHANGE_TO_52:
			return {
				...state,
				cardsFlipped: 0,
				pairsFound: 0,
			};
		case CHANGE_TO_32:
			return {
				...state,
				cardsFlipped: 0,
				pairsFound: 0,
			};
		default:
			return state;
	}
}
