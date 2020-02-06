import React from "react";
import ReactDOM from "react-dom";
import Tips from "./Tips";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Tips />, div);
	ReactDOM.unmountComponentAtNode(div);
});
