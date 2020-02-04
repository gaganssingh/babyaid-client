import React from "react";
import recipes from "../../utilities/recipes";
import RecipeAgeSelection from "../RecipeAgeSelection/RecipeAgeSelection";
import RecipeList from "../RecipeList/RecipeList";
import "./Recipes.css";

class Recipes extends React.Component {
	state = {
		recipes : []
	};

	handleSelectedAge = age => {
		recipes.searchByAge(age).then(response => {
			this.setState({
				recipes : response
			});
		});
	};

	render() {
		let results;
		if (this.state.recipes.length === 0) {
			results = <h4>Please select age from the dropdown</h4>;
		} else {
			results = <RecipeList recipes={this.state.recipes} />;
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
