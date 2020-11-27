import React from "react";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import cards from "../img/cards_cover/honor_heart-14.png";

describe("<Header />  render correctly", () => {
	it("should display Memory Cards as a title", () => {
		render(<Header />);
		// screen.debug();
		expect.assertions(1);
		screen.getByRole("img");
		screen.getByRole("heading");
		screen.getByText(/Memory cards/i);
		screen.getByAltText(/heart card/i);
		expect(screen.getByRole("heading")).toHaveTextContent(
			("text", /Memory cards/i)
		);
	});
});
