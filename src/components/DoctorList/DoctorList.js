import React from "react";
import Doctor from "../Doctor/Doctor";
import "./DoctorList.css";

function DoctorList(props) {
	return (
		<React.Fragment>
			{
				<ul className="DoctorList__Doctor">
					{props.results.map(result => (
						<li key={result.id}>
							<Doctor result={result} />
						</li>
					))}
				</ul>
			}
		</React.Fragment>
	);
}

export default DoctorList;
