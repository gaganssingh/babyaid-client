import React from "react";
import recipes from "../../utilities/recipes";
import RecipeAgeSelection from "../RecipeAgeSelection/RecipeAgeSelection";
import RecipeList from "../RecipeList/RecipeList";
import "./Recipes.css";

class Recipes extends React.Component {
	state = {
		recipes   : [],
		isLoading : false
	};

	// Receives age range info from RecipeAgeSelection component,
	// passes it to the recipes helper function that fetches
	// recipes from the PostgreSQL database and send them to the
	// RecipeList component as a prop
	handleSelectedAge = age => {
		this.toggleIsLoading();
		recipes.searchByAge(age).then(response => {
			this.setState({
				recipes : response
			});
		});
	};

	toggleIsLoading = () => {
		this.setState({
			isLoading : true
		});
	};

	render() {
		// Conditional rendering for behaviour before and after
		// user selection of age group in the RecipeAgeSelection
		// component
		let results;
		if (this.state.recipes.length === 0) {
			results = <h4>Please select age from the dropdown</h4>;
		} else {
			results = <RecipeList recipes={this.state.recipes} />;
		}

		return (
			<section className="Recipes">
				<div className="Recipes__selector">
					<h1>Find A Recipe</h1>
					{/* handles user input of age selection */}
					<RecipeAgeSelection handleSelectedAge={this.handleSelectedAge} />
				</div>

				{/* displays either a prompt to the user for selection
				or the RecipeList component */}
				<section className="Recipes__results">{results}</section>
			</section>
		);
	}
}

export default Recipes;
