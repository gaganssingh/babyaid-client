import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
	return (
		<nav className="Navigation">
			<ul>
				<li>
					<Link to="/starthere">Start Here</Link>
				</li>
				<li>
					<Link to="/recipes">Recipes</Link>
				</li>
				<li>
					<Link to="/doctors">Doctors</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
