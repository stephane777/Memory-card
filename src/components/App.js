import React from "react";
import CardsBoard from "./CardsBoard";
import Header from "./Header";
import ControlBoard from "./ControlBoard";

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<ControlBoard />
				<CardsBoard />;
			</React.Fragment>
		);
	}
}

export default App;
