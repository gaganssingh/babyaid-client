import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
	return (
		<div className="HomePage">
			<section className="HomePage__section">
				<h1>mom, i'm 'ungry!</h1>
				<p>A few minutes and you're done</p>
				<button>
					<Link to="/starthere">Start Here</Link>
				</button>
			</section>
			<section className="HomePage__section">
				<h2>Easy recipes for the little one</h2>
				<p>
					A couple of ingredients and a few minutes is all it takes to make a healthy, nutritious meal for the kids
				</p>
				<button>
					<Link to="/recipes">Find A Recipe</Link>
				</button>
			</section>
			<section className="HomePage__section HomePage__section__last">
				<h2>Need a doctor?</h2>
				<p>
					Whether your doctor isn't available, or you are in a different city, finding a doctor can be stressfull.
					Let's make that easy.
				</p>
				<button>
					<Link to="/doctors">Find A Doctor</Link>
				</button>
			</section>
		</div>
	);
}

export default HomePage;
