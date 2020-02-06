import React from "react";
import ReactDOM from "react-dom";
import RecipeList from "./RecipeList";

describe(`RecipeList component`, () => {
	const props = {
		recipes : [
			{
				id          : 1,
				age_group   : "eighttoten",
				title       : "Strawberry passionfruit brulee",
				nutrients   : [
					"Vitamin C",
					"Calcium"
				],
				ingredients : [
					"100g strawberries",
					"100g unsweetened natural yogurt",
					"1/2 passionfruit"
				],
				directions  : [
					"1. Blend stratberries and yogurt into a puree.",
					"2. Pour mixture into bowls and add a scoop of passion fruit.",
					"3. Place in a glass container and store in the fridge for about 60 minutes."
				],
				recipe_url  : "https://www.madeformums.com/baby/strawberry-and-passion-fruit-brulee/#sthash.dRGI8UHf.dpbs"
			},
			{
				id          : 2,
				age_group   : "eighttoten",
				title       : "Baked apple",
				nutrients   : [
					"Vitamin A",
					"Vitamin C",
					"Folate",
					"Potassium",
					"Magnesium",
					"Calcium"
				],
				ingredients : [
					"1 medium apple"
				],
				directions  : [
					"1. Optional (if baby has had dairy): Place a wee bit of butter on the inside of the cored apple.",
					"2. Place in a pan with just enough water to slightly cover apples – about an inch of water.",
					"3. Bake in a 400F oven for 30 minutes or until tender; be sure to check on the water level.",
					"4. Once baked, either cut apple into little bits and serve as a finger food or mash as directed above in the Apples/Applesauce recipe."
				],
				recipe_url  : "https://wholesomebabyfood.momtastic.com/stage1_homemade_baby_food_recipes.htm"
			}
		]
	};

	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<RecipeList {...props} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
