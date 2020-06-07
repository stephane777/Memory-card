import React from "react";
import Card from "./Card";
import { getShuffledCards } from "./Utils";
import { connect } from "react-redux";

const context = require.context("../img/player_cards", false, /\.png$/);

let playerCards = context
	.keys()
	.map((file) => require(`../img/player_cards/${file.replace(/\.\//, "")}`));

class CardsBoard extends React.Component {
	componentDidMount() {
		// const cards = getShuffledCards();
	}
	render() {
		const { cards, dispatch } = this.props;
		return (
			<div className="CardsBoard--wrapper">
				{cards.map((card, i) => {
					return (
						<Card
							key={card.id}
							imageCard={`${card.id}.png`}
							id={"_" + card.id}
						/>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	cards: state.cards,
});
export default connect(mapStateToProps)(CardsBoard);
