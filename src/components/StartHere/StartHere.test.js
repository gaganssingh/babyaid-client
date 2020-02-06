import React from "react";
import ReactDOM from "react-dom";
import StartHere from "./StartHere";
import { BrowserRouter } from "react-router-dom";

describe(`StartHere component`, () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(
			<BrowserRouter>
				<StartHere />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
