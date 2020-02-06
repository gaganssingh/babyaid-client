import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HowToUse from "./HowToUse";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<BrowserRouter>
			<HowToUse />
		</BrowserRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
