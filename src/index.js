import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer, middleware);

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
