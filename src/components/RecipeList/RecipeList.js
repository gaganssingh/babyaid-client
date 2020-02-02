import React from "react";
import "./RecipeList.css";

function RecipeList(props) {
	const { id, age, title, nutrients, ingredients, directions, note, recipeCredit } = props.recipe;
	return (
		<div className="RecipeList">
			<p>{title}</p>
			<img src="https://via.placeholder.com/150" alt={title} />
			<p>Ingredients:</p>
			{ingredients}
			<p>Directions:</p>
			{directions}
			{note === null && <p>Notes: {note}</p>}
			<a href={recipeCredit}>See full recipe</a>
		</div>
	);
}

export default RecipeList;
