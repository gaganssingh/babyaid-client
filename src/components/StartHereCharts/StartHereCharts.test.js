import React from "react";
import ReactDOM from "react-dom";
import StartHereCharts from "./StartHereCharts";
import { BrowserRouter } from "react-router-dom";

describe(`StartHereCharts component`, () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(
			<BrowserRouter>
				<StartHereCharts />
			</BrowserRouter>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
