import React from "react";
import "./Recipe.css";

function Recipe(props) {
	const { title, nutrients, ingredients, directions, recipe_url } = props.recipe;
	return (
		<div className="Recipe">
			<h1>{title}</h1>
			<ul>
				<span className="nutrients">Nutrients:</span>
				{nutrients.map(nutrient => <li key={nutrient}>{nutrient}</li>)}
			</ul>
			<ul>
				<span className="ingredients">Ingredients:</span>
				{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
			</ul>
			<ul>
				<span className="directions">Directions:</span>
				{directions.map(direction => <li key={direction}>{direction}</li>)}
			</ul>
		</div>
	);
}

export default Recipe;
