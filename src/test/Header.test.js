import React from "react";
import Header from "../components/Header";
import { shallow } from "enzyme";
// import cards from "../img/cards_cover/honor_heart-14.png";

it("should render an img with src", () => {
	const wrapper = shallow(<Header />);
	const image = wrapper.find("img").prop("src");

	expect(image).toEqual(cards);
});
