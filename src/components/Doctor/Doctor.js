import React from "react";
import "./Doctor.css";

function Doctor(props) {
	const { name, phone, address, city, rating, url } = props.result;
	return (
		<div className="Doctor">
			{/* receives the pediatricians list and displays on page */}
			<h2>{name}</h2>
			<div className="Doctor__information">
				<div className="Doctor__address">
					<p>{phone}</p>
					<p>{address}</p>
					<p>{city}</p>
				</div>
				<div className="Doctor__Ratings">
					<h4 className="rating">{rating} stars</h4>
				</div>
				<a className="Doctor__yelp" href={url} target="__blank">
					View on Yelp
				</a>
			</div>
		</div>
	);
}

export default Doctor;
