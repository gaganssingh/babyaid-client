import React from "react";
import yelp from "../../utilities/yelp";
import DoctorSearch from "../DoctorSearch/DoctorSearch";
import DoctorList from "../DoctorList/DoctorList";

class Doctors extends React.Component {
	state = {
		results : []
	};

	handleSearch = location => {
		yelp.searchByLocation(location).then(response => {
			this.setState({
				results : response
			});
		});
	};

	render() {
		return (
			<div className="Doctors">
				<h2>Find a Doctor</h2>
				{/* input field for searching for a doctor in a city */}
				<DoctorSearch handleSearch={this.handleSearch} />
				{/* Pushing the list of doctors from yelp to a list */}
				<DoctorList results={this.state.results} />
			</div>
		);
	}
}

export default Doctors;
