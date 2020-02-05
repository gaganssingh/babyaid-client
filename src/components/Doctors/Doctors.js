import React from "react";
import yelp from "../../utilities/yelp";
import DoctorSearch from "../DoctorSearch/DoctorSearch";
import DoctorList from "../DoctorList/DoctorList";

class Doctors extends React.Component {
	state = {
		results : []
	};

	// Receive location information from DoctorSearch component
	// and pass it into the yelp helper function that fetches
	// a list of pediatricians
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
				{/* user input for location to search for pediatricians */}
				<DoctorSearch handleSearch={this.handleSearch} />
				{/* pass the list of pediatricians from yelp helper function */}
				<DoctorList results={this.state.results} />
			</div>
		);
	}
}

export default Doctors;
