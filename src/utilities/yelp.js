import config from "./config";

const yelp = {
	searchByLocation(location) {
		return fetch(`${config.YELP_ENDPOINT}/businesses/search?term=pediatrician&sort_by=rating&location=${location}`, {
			headers : {
				Authorization : `Bearer ${config.API_KEY}`
			}
		})
			.then(res => {
				if (!res.ok) {
					throw new Error(res.status);
				}
				return res.json();
			})
			.then(results => {
				if (results.businesses) {
					return results.businesses.map(business => {
						return {
							id       : business.id,
							name     : business.name,
							phone    : business.display_phone,
							address  : business.location.address1,
							city     : business.location.city,
							state    : business.location.state,
							zipCode  : business.location.zip_code,
							rating   : business.rating,
							url      : business.url,
							imageSrc : business.image_url
						};
					});
				}
			});
	}
};

export default yelp;
