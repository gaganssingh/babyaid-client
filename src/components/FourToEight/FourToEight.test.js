import React from "react";
import ReactDOM from "react-dom";
import FourToEight from "./FourToEight";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<FourToEight />, div);
	ReactDOM.unmountComponentAtNode(div);
});
