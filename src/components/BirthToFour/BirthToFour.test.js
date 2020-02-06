import React from "react";
import ReactDOM from "react-dom";
import BirthToFour from "./BirthToFour";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<BirthToFour />, div);
	ReactDOM.unmountComponentAtNode(div);
});
