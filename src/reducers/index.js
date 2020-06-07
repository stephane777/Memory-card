import { combineReducers } from "redux";

import flipped from "./flipped";
import discovered from "./discovered";
import cards from "./cards";

export default combineReducers({
	cards,
	flipped,
	discovered,
});
