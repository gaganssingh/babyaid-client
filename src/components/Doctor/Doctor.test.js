import React from "react";
import ReactDOM from "react-dom";
import Doctor from "./Doctor";

describe(`Doctor component`, () => {
	const props = {
		result : [
			{
				name    : "test name",
				phone   : "123456789",
				address : "123 Address",
				city    : "City",
				rating  : "4.5",
				url     : "www.testwebsite.com"
			}
		]
	};

	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Doctor {...props} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
