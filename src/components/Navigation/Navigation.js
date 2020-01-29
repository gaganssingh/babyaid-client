import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<nav className="Navigation">
			<ul>
				<li>
					<Link to="/">Nav Item 1</Link>
				</li>
				<li>
					<Link to="/">Nav Item 2</Link>
				</li>
				<li>
					<Link to="/">Nav Item 3</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
