import React from "react";
import ReactDOM from "react-dom";
import Doctors from "./Doctors";

describe(`Doctors component`, () => {
	const props = {
		results : [
			{
				id      : "noteId",
				name    : "test name1",
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
		ReactDOM.render(<Doctors {...props} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
