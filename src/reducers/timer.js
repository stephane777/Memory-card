import { TIMER_INCREMENT, SET_TIMER_ID, NEW_GAME } from "../actions/cards";
const initialstate = {
	timerId: 0,
	timer: "00:00",
};

export default function timer(state = initialstate, action) {
	switch (action.type) {
		case NEW_GAME:
			return {
				...state,
				timer: "00:00",
			};
		case TIMER_INCREMENT:
			function incrementSeconde() {
				let [min, sec] = state.timer.split(":");
				if (sec < 59) {
					sec = +sec + 1;
				}
				if (sec == 59) {
					sec = 0;
					if (min == 59) {
						min = 0;
					} else {
						min = +min + 1;
					}
				}
				String(min).length === 1 ? (min = "0" + min) : min;
				String(sec).length === 1 ? (sec = "0" + sec) : sec;
				return `${min}:${sec}`;
			}
			return {
				...state,
				timer: incrementSeconde(),
			};
		case SET_TIMER_ID:
			return {
				...state,
				timerId: action.timerId,
			};
		default:
			return state;
	}
}
