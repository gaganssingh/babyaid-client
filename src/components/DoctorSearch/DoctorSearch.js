import React from "react";

class DoctorSearch extends React.Component {
	state = {
		location : "Toronto"
	};

	onFormSubmit = e => {
		e.preventDefault();
		this.props.handleSearch(this.state.location);
	};

	render() {
		return (
			<form className="DoctorSearch" onSubmit={this.onFormSubmit}>
				<input
					type="text"
					name="location"
					id="location"
					value={this.state.location}
					onChange={e => this.setState({ location: e.target.value })}
					required
				/>
				<button type="submit">Search</button>
			</form>
		);
	}
}

export default DoctorSearch;
