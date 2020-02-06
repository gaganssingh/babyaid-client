import React from "react";
import "./RecipeAgeSelection.css";

class RecipeAgeSelection extends React.Component {
	state = {
		age : "fourtosix"
	};

	handleChange = e => {
		this.setState({
			age : e.target.value
		});
	};

	// receives age range info from the form and
	// passes it up to Recipes component
	handleAgeSelection = e => {
		e.preventDefault();
		this.props.handleSelectedAge(this.state.age);
	};

	render() {
		return (
			<form className="recipe-form" onSubmit={this.handleAgeSelection}>
				<label htmlFor="select-age">Please select age:</label>
				<select name="select-age" id="select-age" onChange={this.handleChange}>
					<option value="fourtosix">Ages 4 to 6 months</option>
					<option value="sixtoeight">Ages 6 to 8 months</option>
					<option value="eighttoten">Ages 8 to 10 months</option>
					<option value="tentotwelve">Ages 10 to 12 months</option>
				</select>
				<button type="submit">See recipes</button>
			</form>
		);
	}
}

export default RecipeAgeSelection;
