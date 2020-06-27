import React from "react";
import CardsBoard from "./CardsBoard";
import Header from "./Header";
import ControlBoard from "./ControlBoard";
import Footer from "./Footer";

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<ControlBoard />
				<CardsBoard />;
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
