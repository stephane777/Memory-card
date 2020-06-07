import React from "react";

class ControlBoard extends React.Component {
	render() {
		return (
			<div className="controlBoard-container">
				<div className="controlBoard-userAction">
					<button>New game</button>
					<div className="controlBoard-radioBtnd">
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
export default ControlBoard;
