import React from "react";
import { changeTo32, changeTo52, newGame } from "../actions/cards";
import { connect } from "react-redux";

class ControlBoard extends React.Component {
	handleChangeCardsSet = (event) => {
		const { dispatch } = this.props;
		const nbCard = +event.target.value;
		console.log(`[ST] CardsSet: ${event.target.value}`);
		dispatch(nbCard === 32 ? changeTo32() : changeTo52());
	};

	handleNewGame(e) {
		e.preventDefault();
		const { dispatch } = this.props;
		dispatch(newGame());
	}
	render() {
		return (
			<div className="controlBoard-container">
				<div className="controlBoard-userAction">
					<div className="controlBoard-btn">
						<button onClick={this.handleNewGame}>New game</button>
						<button>pause</button>
					</div>
					<div
						className="controlBoard-radioBtnd"
						onChange={this.handleChangeCardsSet}
					>
						<div>
							<input
								type="radio"
								id="_32Card"
								name="NumberOfCards"
								value="32"
							/>
							<label htmlFor="contactChoice1">32 Cards</label>
						</div>
						<div>
							<input
								type="radio"
								id="_52Card"
								name="NumberOfCards"
								value="52"
							/>
							<label htmlFor="contactChoice2">52 Cards</label>
						</div>
					</div>
					<div>
						<input type="checkbox" name="hide"></input>
						<label htmlFor="hide">hide discovered Pair ?</label>
					</div>
				</div>
				<div className="controlBoard-stats">
					<div>
						<span>Card(s) flipped</span>
						<span>{this.props.nbFlipped}</span>
					</div>
					<div>
						<span>Pair(s) found</span>
						<span>{this.props.discovered}</span>
					</div>
					<div>
						<span>Timer: </span>
						<span>{this.props.timer}</span>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	cards: state.cards,
});
export default connect(mapStateToProps)(ControlBoard);
