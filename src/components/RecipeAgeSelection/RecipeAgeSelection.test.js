import React from "react";
import ReactDOM from "react-dom";
import RecipeAgeSelection from "./RecipeAgeSelection";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<RecipeAgeSelection />, div);
	ReactDOM.unmountComponentAtNode(div);
});
