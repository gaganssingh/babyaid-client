import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
	return (
		<header className="Header">
			<h1>
				<Link to="/">BabyAid</Link>
			</h1>
			<Navigation />
		</header>
	);
}

export default Header;
