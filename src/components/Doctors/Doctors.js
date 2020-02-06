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
		// Conditional rendering for behaviour before and after
		// user selection of age group in the DoctorSearch
		// component
		let results;
		if (this.state.results.length === 0) {
			results = <h4>Please enter a valid city name</h4>;
		} else {
			results = <DoctorList results={this.state.results} />;
		}
		return (
			<div className="Doctors">
				<h2>Find a Doctor</h2>
				{/* user input for location to search for pediatricians */}
				<DoctorSearch handleSearch={this.handleSearch} />
				{/* pass the list of pediatricians from yelp helper function */}
				<section className="Recipes__results">{results}</section>
			</div>
		);
	}
}

export default Doctors;
