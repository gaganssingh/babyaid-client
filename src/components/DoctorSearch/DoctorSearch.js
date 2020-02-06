import React from "react";
import "./DoctorSearch.css";

class DoctorSearch extends React.Component {
	state = {
		location : ""
	};

	onFormSubmit = e => {
		e.preventDefault();
		this.props.handleSearch(this.state.location);
	};

	render() {
		return (
			<form className="doctor-form" onSubmit={this.onFormSubmit}>
				<input
					type="text"
					name="location"
					id="location"
					value={this.state.location}
					onChange={e => this.setState({ location: e.target.value })}
					placeholder="Enter city name"
					required
				/>
				<button type="submit">Search</button>
			</form>
		);
	}
}

export default DoctorSearch;
