import React from "react";
import { connect } from "react-redux";

class Timer extends React.Component {
	render() {
		const { timer } = this.props.timer;
		console.log(`timer: ${timer}`);
		return (
			<div>
				<span>Timer: </span>
				<span>{timer}</span>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	timer: state.timer,
});
export default connect(mapStateToProps)(Timer);
