import React from "react";

class RecipeAgeSelection extends React.Component {
	state = {
		age : ""
	};

	handleChange = e => {
		// console.log(e.target.value);
		this.setState({
			age : e.target.value
		});
	};

	handleAgeSelection = e => {
		e.preventDefault();
		this.props.handleSelectedAge(this.state.age);
		console.log(this.state.age);
	};

	render() {
		return (
			<form className="recipe-form" onSubmit={this.handleAgeSelection}>
				<label htmlFor="select-age">Age:</label>
				<select name="select-age" id="select-age" onChange={this.handleChange}>
					{/* <select name="select-age" id="select-age"> */}
					<option value="">--Select Age--</option>
					<option value="fourtosix">4 to 6 months</option>
					<option value="sixtoeight">6 to 8 months</option>
					<option value="eighttoten">8 to 10 months</option>
					<option value="tentotwelve">10 to 12 months</option>
				</select>
				<button type="submit">See recipes</button>
			</form>
		);
	}
}

export default RecipeAgeSelection;
