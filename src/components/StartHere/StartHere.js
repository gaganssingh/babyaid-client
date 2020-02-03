import React from "react";
import StartHereHero from "../StartHereHero/StartHereHero";
import HowToUse from "../HowToUse/HowToUse";
import Tips from "../Tips/Tips";
import StartHereCharts from "../StartHereCharts/StartHereCharts";
import "./StartHere.css";

function StartHere() {
	return (
		<main className="StartHere">
			<StartHereHero />
			<HowToUse />
			<Tips />
			<StartHereCharts />
		</main>
	);
}

export default StartHere;
