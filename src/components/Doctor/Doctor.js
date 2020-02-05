import React from "react";

class Doctor extends React.Component {
	render() {
		return (
			<div className="Doctor">
				{/* received the pediatricians list and displays on page */}
				<h2>{this.props.result.name}</h2>
				<div className="Doctor-information">
					<div className="Doctor-address">
						<p>{this.props.result.phone}</p>
						<p>{this.props.result.address}</p>
						<p>{this.props.result.city}</p>
						<p>{`${this.props.result.state} ${this.props.result.zipCode}`}</p>
					</div>
					<div className="Doctor__Ratings">
						<h3 className="rating">{`${this.props.result.rating} stars`}</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default Doctor;
