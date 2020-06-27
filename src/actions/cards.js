export const FLIP_CARD = "FLIP_CARD";
export const FLIP_CARDS_BACK = "FLIP_CARDS_BACK";
export const DISCOVERED_PAIR = "DISCOVERED_PAIR";
export const NEW_GAME = "NEW_GAME";
export const CHANGE_TO_32 = "CHANGE_TO_32";
export const CHANGE_TO_52 = "CHANGE_TO_52";
export const TOGGLE_HIDE_CARD = "TOGGLE_HIDE_CARD";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TIMER_INCREMENT = "TIMER_INCREMENT";
export const SET_TIMER_ID = "SET_TIMER_ID";

export function setTimerId(id) {
	return {
		type: SET_TIMER_ID,
		timerId: id,
	};
}
export function timerIncrement() {
	return {
		type: TIMER_INCREMENT,
	};
}
export function toggleHideCard() {
	return {
		type: TOGGLE_HIDE_CARD,
	};
}

export function togglePlay() {
	return {
		type: TOGGLE_PLAY,
	};
}

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

export function newGame() {
	return {
		type: NEW_GAME,
	};
}
export function changeTo32() {
	return {
		type: CHANGE_TO_32,
		totalCard: 32,
	};
}
export function changeTo52() {
	return {
		type: CHANGE_TO_52,
		totalCard: 52,
	};
}
