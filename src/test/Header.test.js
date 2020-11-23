import React from "react";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Header />  render correctly", () => {
	it("should display Memory Cards as a title", () => {
		render(<Header />);
		screen.debug();
	});
});
