import React from "react";
import BirthToFour from "../BirthToFour/BirthToFour";
import FourToEight from "../FourToEight/FourToEight";
import NineToTwelve from "../NineToTwelve/NineToTwelve";
import StartHereChartsCourtsey from "../StartHereChartsCourtsey/StartHereChartsCourtsey";
import "./StartHereCharts.css";

function StartHereCharts() {
	return (
		<section className="StartHereCharts">
			<div>
				<h3>Formula feeding guide (Birth to 4 months old)</h3>
				<BirthToFour />
				<StartHereChartsCourtsey />
			</div>
			<div>
				<h3>4 to 8 months feeding guide</h3>
				<FourToEight />
				<StartHereChartsCourtsey />
			</div>
			<div className="StartHereCharts__last">
				<h3>8 to 12 months feeding guide</h3>
				<NineToTwelve />
				<StartHereChartsCourtsey />
			</div>
		</section>
	);
}

export default StartHereCharts;
