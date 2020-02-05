import config from "./config";

// Fires up the fetch call to the PostgreSQL
// database to get a list of recipes and
// passes it to the Recipes component
const recipes = {
	searchByAge(selectedAge) {
		return fetch(`${config.API_BASE_URL}${selectedAge}`)
			.then(res => {
				if (!res.ok) {
					throw new Error(res.status);
				}
				return res.json();
			})
			.then(results => {
				if (results) {
					return results.map(result => {
						// formatting the list for
						// easy consumption by the
						// Recipes component
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
			});
	}
};

export default recipes;
