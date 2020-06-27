import React from "react";
import {
	changeTo32,
	changeTo52,
	newGame,
	toggleHideCard,
	togglePlay,
	setTimerId,
	timerIncrement,
} from "../actions/cards";

import { connect } from "react-redux";
import { FaPlay, FaPause } from "react-icons/fa";
import Timer from "./Timer";

class ControlBoard extends React.Component {
	handleChangeCardsSet = (event) => {
		// event.preventDefault();
		const { dispatch } = this.props;
		const nbCard = +event.target.value;
		// console.log(`[ST] CardsSet: ${event.target.value}`);
		dispatch(nbCard === 32 ? changeTo32() : changeTo52());
	};

	handleNewGame = (event) => {
		event.preventDefault();
		const { dispatch } = this.props;
		dispatch(newGame());
	};
	handleTogglePlayGame = (event) => {
		event.preventDefault();
		const { dispatch } = this.props;
		dispatch(togglePlay());
	};
	handleHideDiscovered = (event) => {
		// event.preventDefault();
		const { dispatch } = this.props;
		dispatch(toggleHideCard());
	};
	handleTimerIncrement = () => {
		const { dispatch } = this.props;
		dispatch(timerIncrement());
	};
	componentDidUpdate() {
		const { dispatch } = this.props;
		const { play_game } = this.props.control;
		const { timerId } = this.props.timer;
		console.log("should timer run: " + play_game);
		if (play_game && !timerId) {
			const timer = setInterval(this.handleTimerIncrement, 1000);
			dispatch(setTimerId(timer));
		} else if (!play_game && timerId) {
			dispatch(setTimerId(0));
			clearInterval(timerId);
		}
	}
	componentWillUnmount() {
		console.log("ControlBoard componentWillUnmount");
	}
	render() {
		const {
			play_game,
			cardsFlipped,
			pairsFound,
			hideDiscovered,
			timer,
		} = this.props.control;
		const { cards } = this.props;
		return (
			<div className="controlBoard-container">
				<div className="controlBoard-userAction">
					<div className="controlBoard-btn">
						<button onClick={this.handleNewGame}>New game</button>
						<button onClick={this.handleTogglePlayGame}>
							{play_game ? <FaPause /> : <FaPlay />}
						</button>
					</div>
					<div className="controlBoard-radioBtnd">
						<div>
							<input
								type="radio"
								id="_32Card"
								name="NumberOfCards"
								value="32"
								checked={cards.numOfCards === 32}
								onChange={this.handleChangeCardsSet}
								disabled={play_game}
							/>
							<label htmlFor="contactChoice1">32 Cards</label>
						</div>
						<div>
							<input
								type="radio"
								id="_52Card"
								name="NumberOfCards"
								value="52"
								checked={cards.numOfCards === 52}
								onChange={this.handleChangeCardsSet}
								disabled={play_game}
							/>
							<label htmlFor="contactChoice2">52 Cards</label>
						</div>
					</div>
					<div>
						<input
							type="checkbox"
							name="hide"
							checked={hideDiscovered}
							onChange={this.handleHideDiscovered}
						></input>
						<label htmlFor="hide">hide discovered Pair ?</label>
					</div>
				</div>
				<div className="controlBoard-stats">
					<div>
						<span>Card(s) flipped : </span>
						<span>{cardsFlipped}</span>
					</div>
					<div>
						<span>Pair(s) found : </span>
						<span>{pairsFound}</span>
					</div>
					<Timer />
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	cards: state.cards,
	control: state.control,
	timer: state.timer,
});
export default connect(mapStateToProps)(ControlBoard);
