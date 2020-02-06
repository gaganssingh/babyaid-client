import React from "react";
import ReactDOM from "react-dom";
import Recipes from "./Recipes";

describe(`Recipes component`, () => {
	const props = {
		recipes : [
			{
				title       : "test title",
				ingredients : [
					"Ingredient1",
					"Ingredient2"
				],
				directions  : [
					"Direction1",
					"Direction2"
				]
			}
		]
	};

	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Recipes {...props} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
