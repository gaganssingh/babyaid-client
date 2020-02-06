import React from "react";
import "./Recipe.css";

// Receives the recipe props and displays on page
function Recipe(props) {
	const { title, ingredients, directions } = props.recipe;
	return (
		<div className="Recipe">
			<h2>{title}</h2>
			<p>
				<span className="ingredients">Ingredients:</span>
			</p>
			<ul className="Recipe__lists">{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>

			<p>
				<span className="directions">Directions:</span>
			</p>
			<ul className="Recipe__lists__directions">
				{directions.map(direction => <li key={direction}>{direction}</li>)}
			</ul>
		</div>
	);
}

export default Recipe;
