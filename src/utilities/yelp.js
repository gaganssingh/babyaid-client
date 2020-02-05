import config from "./config";

// Fires up the fetch call to the Yelp api
// to get a list of pediatricians and passes
// it to the Doctors component
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
						// formatting the list for
						// easy consumption by the
						// Doctors component
						return {
							id      : business.id,
							name    : business.name,
							phone   : business.display_phone,
							address : business.location.address1,
							city    : business.location.city,
							rating  : business.rating,
							url     : business.url
						};
					});
				}
			});
	}
};

export default yelp;
