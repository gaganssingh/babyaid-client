import React from "react";
import ReactDOM from "react-dom";
import StartHereChartsCourtsey from "./StartHereChartsCourtsey";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<StartHereChartsCourtsey />, div);
	ReactDOM.unmountComponentAtNode(div);
});
