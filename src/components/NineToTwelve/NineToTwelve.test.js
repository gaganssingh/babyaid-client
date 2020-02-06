import React from "react";
import ReactDOM from "react-dom";
import NineToTwelve from "./NineToTwelve";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<NineToTwelve />, div);
	ReactDOM.unmountComponentAtNode(div);
});
