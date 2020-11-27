import React from "react";
import cards from "../img/cards_cover/honor_heart-14.png";

const Header = () => {
	// console.log(cards);
	return (
		<div className="header-container">
			<div className="header-img-container">
				<img src={cards} alt="heart card" />
			</div>
			<div className="header-title-container">
				<h2 className="header-title">Memory Cards</h2>
			</div>
		</div>
	);
};

export default Header;
