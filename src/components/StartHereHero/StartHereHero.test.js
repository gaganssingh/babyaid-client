import React from "react";
import ReactDOM from "react-dom";
import StartHereHero from "./StartHereHero";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<StartHereHero />, div);
	ReactDOM.unmountComponentAtNode(div);
});
