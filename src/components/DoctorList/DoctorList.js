import React from "react";
import Doctor from "../Doctor/Doctor";

class DoctorList extends React.Component {
	render() {
		return (
			<div className="DoctorList">
				{this.props.results.map(result => {
					return <Doctor key={result.id} result={result} />;
				})}
			</div>
		);
	}
}

export default DoctorList;
