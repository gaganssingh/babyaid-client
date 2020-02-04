import React from "react";
import config from "../../utilities/config";
import Recipe from "../Recipe/Recipe";
import "./RecipeList.css";

class RecipeList extends React.Component {
	state = {
		recipes   : [],
		isLoading : true,
		error     : null
	};

	componentDidMount() {
		const { selectedAge } = this.props;
		// fetch(`http://localhost:9000/api/${selectedAge}`)
		fetch(`${config.API_BASE_URL}${selectedAge}`)
			.then(res => {
				if (!res.ok) {
					throw new Error(res.status);
				}
				return res.json();
			})
			.then(data => {
				// console.log(data);
				this.setState({
					recipes   : data,
					isLoading : false
				});
			})
			.catch(error => {
				this.setState({
					isLoading : false,
					error
				});
			});
	}

	renderRecipeList() {
		const { recipes, isLoading } = this.state;
		return (
			<React.Fragment>
				{!isLoading ? (
					<ul className="RecipeList__Recipe">
						{recipes.map(recipe => (
							<li key={recipe.id}>
								<Recipe recipe={recipe} />
							</li>
						))}
					</ul>
				) : (
					<h3>Loading recipes...</h3>
				)}
			</React.Fragment>
		);
	}

	render() {
		return <div className="RecipeList">{this.renderRecipeList()}</div>;
	}
}

export default RecipeList;
