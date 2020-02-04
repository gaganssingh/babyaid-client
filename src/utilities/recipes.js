import config from "./config";

const recipes = {
	searchByAge(selectedAge) {
		return fetch(`${config.API_BASE_URL}${selectedAge}`)
			.then(res => {
				console.log(config.API_BASE_URL);
				if (!res.ok) {
					throw new Error(res.status);
				}
				return res.json();
			})
			.then(results => {
				if (results) {
					return results.map(result => {
						return {
							id          : result.id,
							title       : result.title,
							nutrients   : result.nutrients,
							ingredients : result.ingredients,
							directions  : result.directions,
							recipe_url  : result.recipe_url
						};
					});
				}
			})
			.catch(error => {
				this.setState({
					isLoading : false,
					error
				});
			});
	}
};

export default recipes;
