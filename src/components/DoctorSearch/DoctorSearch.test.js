import React from "react";
import ReactDOM from "react-dom";
import DoctorSearch from "./DoctorSearch";

describe(`DoctorSearch component`, () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<DoctorSearch />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
