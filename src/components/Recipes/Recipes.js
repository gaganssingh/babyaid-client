import React from "react";
import "./Recipes.css";
import RecipeAgeSelection from "../RecipeAgeSelection/RecipeAgeSelection";
import RecipeList from "../RecipeList/RecipeList";

class Recipes extends React.Component {
	state = {
		selectedAge : "",
		recipes     : []
	};

	handleSelectedAge = age => {
		this.setState({
			selectedAge : age
		});
	};

	render() {
		let results;
		if (this.state.selectedAge === "") {
			results = <h4>Please select age from the dropdown</h4>;
		} else {
			results = <RecipeList selectedAge={this.state.selectedAge} />;
		}

		return (
			<section className="Recipes">
				<section className="Recipes__selector">
					<h1>Find A Recipe</h1>
					<RecipeAgeSelection handleSelectedAge={this.handleSelectedAge} />
				</section>

				<section className="Recipes__results">{results}</section>
			</section>
		);
	}
}

export default Recipes;
