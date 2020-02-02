import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
	return (
		<div className="HomePage">
			<section className="HomePage__section">
				<h1>mom, i'm 'ungry!</h1>
				<p>A few minutes and you're done</p>
			</section>
			<section className="HomePage__section">
				<h2>Easy recipes for the little one</h2>
				<p>
					A couple of ingredients and a few minutes is all it takes to make a healthy, nutritious meal for the kids
				</p>
				<button>
					<Link to="/findrecipe">Find A Recipe</Link>
				</button>
			</section>
			<section className="HomePage__section">
				<h2>Need a doctor?</h2>
				<p>
					Whether your doctor isn't available, or you are in a different city, finding a doctor can be stressfull.
					Let's make that easy.
				</p>
				<button>
					<Link to="/findrecipe">Find A Doctor</Link>
				</button>
			</section>
			<section className="HomePage__section HomePage__section__last">
				<header>
					<h3>Let's get you started</h3>
				</header>
				<button>
					<Link to="/signuplogin">Sign up or Login</Link>
				</button>
			</section>
		</div>
	);
}

export default HomePage;
