import React from "react";
import "./Recipes.css";
import STORE from "../../STORE";
import RecipeList from "../RecipeList/RecipeList";

function Recipes() {
	return (
		<section className="Recipes">
			<section className="Recipes__selector">
				<h1>Find A Recipe</h1>
				<form className="recipe-form">
					<label htmlFor="select-age">Age:</label>
					<select name="select-age" id="select-age">
						<option value="birthto4">Birth to 4 months</option>
						<option value="fourto6" selected="selected">
							4 to 6 months
						</option>
						<option value="sixto8">6 to 8 months</option>
						<option value="eightto10">8 to 10 months</option>
						<option value="tento12">10 to 12 months</option>
					</select>
				</form>
			</section>

			<section className="Recipes__results">
				<h2>RecipeList</h2>
				{STORE.recipes.map(recipe => <RecipeList key={recipe.id} recipe={recipe} />)}
			</section>
		</section>
	);
}

export default Recipes;
