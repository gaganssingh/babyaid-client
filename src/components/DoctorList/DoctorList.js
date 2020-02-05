import React from "react";
import Doctor from "../Doctor/Doctor";

class DoctorList extends React.Component {
	render() {
		return (
			<div className="DoctorList">
				{/* gets the pediatricians list prop and maps to Doctor component */}
				{this.props.results.map(result => {
					return <Doctor key={result.id} result={result} />;
				})}
			</div>
		);
	}
}

export default DoctorList;
