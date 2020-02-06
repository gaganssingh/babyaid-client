import React from "react";
import ReactDOM from "react-dom";
import Recipe from "./Recipe";

describe(`Recipe component`, () => {
	const props = {
		recipe : {
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
	};

	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Recipe {...props} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
