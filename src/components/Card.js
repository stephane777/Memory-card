//  https://codepen.io/wochap/pen/BzvOZp

import React from "react";
import "../index.css";

import cardBack from "../img/cards_cover/blue_back.png";
import { connect } from "react-redux";
import {
	flipCard,
	flipCardsBack,
	discoveredPair,
	shuffleCards,
} from "../actions/cards";

class Card extends React.Component {
	flipCard = (event) => {
		event.preventDefault();
		let card = document.querySelector(`#${this.props.id}`);
		const card_side = Array.from(event.target.classList);
		card_side.includes("backimg")
			? (card.style.transform = "rotateY(180deg)")
			: (card.style.transform = "rotateY(0deg)");
	};
	handleActionDelay = (action) => {
		// Border effect
		const { flipped } = this.props;
		let cardElement1, cardElement2;
		if (action === "equal") {
			const flippedCards = flipped.map((card) => card.id);
			cardElement1 = document.querySelector(
				`#_${flippedCards[0]} div.back img`
			);
			cardElement2 = document.querySelector(
				`#_${flippedCards[1]} div.back img`
			);
			setTimeout(() => {
				cardElement1.classList.add("discovered-pair");
				cardElement2.classList.add("discovered-pair");
			}, 500);
		}
		setTimeout(() => {
			const { dispatch } = this.props;
			const ids = flipped.map((card) => card.id);
			if (action === "equal") {
				cardElement1.classList.remove("discovered-pair");
				cardElement2.classList.remove("discovered-pair");
			}

			action === "equal"
				? dispatch(discoveredPair(ids))
				: dispatch(flipCardsBack());
			// this.props.dispatch( );
		}, 1500);
	};

	handleFlip = (event) => {
		// user should only click the front to show up the card value
		// front img is the hidden img
		// back img is the card value shown up
		event.preventDefault();

		const { dispatch, flipped } = this.props;
		const isBackCardClicked = Array.from(event.target.classList).includes(
			"backimg"
		);
		if (flipped.length <= 1 && !isBackCardClicked) {
			const id = event.target.parentNode.parentNode.getAttribute("id").slice(1);
			dispatch(flipCard(id));
		}
	};
	handle2CardsShown = () => {
		const { flipped, dispatch } = this.props;
		// Remove the card color to compare cards value
		const card1 = flipped[0].id.slice(0, flipped.length - 1);
		const card2 = flipped[1].id.slice(0, flipped.length - 1);
		// check if the cards are identical
		card1 === card2
			? this.handleActionDelay("equal")
			: this.handleActionDelay();
	};
	componentDidMount() {
		let card = document.querySelector(`#${this.props.id}`);
		card.addEventListener("click", this.handleFlip);
	}
	componentWillUnmount() {
		let card = document.querySelector(`#${this.props.id}`);
		card.removeEventListener("click", this.flipCard, true);
	}

	componentDidUpdate() {
		const { flipped, discovered, dispatch } = this.props;
		let cardElement = document.querySelector(`#${this.props.id}`);
		const id = this.props.id.slice(1);

		const discoveredCards = discovered.map((card) => card.id);
		const flippedCards = flipped.map((card) => card.id);

		const isCurrentCardDiscovered = discoveredCards.includes(id);
		const isCurrentCardFlipped = flippedCards.includes(id);
		const status = isCurrentCardDiscovered
			? "discovered"
			: isCurrentCardFlipped
			? "flipped"
			: null;

		switch (status) {
			case "discovered":
				break;
			case "flipped":
				// console.log(cardElement);
				cardElement.style.transform = "rotateY(180deg)";
				flipped.length > 1 && flipped[1].id === id
					? this.handle2CardsShown()
					: null;
				break;
			default:
				cardElement.style.transform = "rotateY(0deg)";
		}
	}

	render() {
		const { id, imageCard } = this.props;
		// return <img className="card" src={images["0"].default} alt="card" />;
		return (
			<div className="card--container">
				<div id={id} className="card">
					<div className="front">
						<img className="frontimg" src={cardBack} alt="Avatar" />
					</div>
					<div className="back">
						<img className="backimg" src={imageCard} alt="Avatar" />
					</div>
				</div>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		flipped: state.flipped,
		discovered: state.discovered,
	};
})(Card);
