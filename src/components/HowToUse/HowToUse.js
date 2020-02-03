import React from "react";
import { Link } from "react-router-dom";
import "./HowToUse.css";

function HowToUse() {
	return (
		<section className="HowToUse">
			<h3>How to use this guide:</h3>
			<p>
				Below this section, you'll find the suggested feeding recomendations from The American Academy of Pediatrics
				&#40;AAP&#41;, as documented by the Stanford Children's Health Institute.
			</p>
			<p>If you would like to jump directly to the recipe or doctors section, you can do so below.</p>
			<div className="HowToUse__buttons">
				<button>
					<Link to="/recipes">Recipes</Link>
				</button>
				<br />
				<button>
					<Link to="/doctors">Doctors</Link>
				</button>
			</div>
		</section>
	);
}

export default HowToUse;
