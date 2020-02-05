import React from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipeList.css";

// Receives recipe list from Recipes component,
// maps it to display the Recipe component
function RecipeList(props) {
	return (
		<React.Fragment>
			{
				<ul className="RecipeList__Recipe">
					{props.recipes.map(recipe => (
						<li key={recipe.id}>
							<Recipe recipe={recipe} />
						</li>
					))}
				</ul>
			}
		</React.Fragment>
	);
}

export default RecipeList;
