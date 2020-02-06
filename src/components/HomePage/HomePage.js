import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
	return (
		<div className="HomePage">
			<section className="HomePage__hero">
				<h1>Too much information?</h1>
				<p>Demistifying infant feeding for new parents</p>
				<button>
					<Link to="/starthere">Start Here</Link>
				</button>
			</section>

			<section className="HomePage__section">
				<div className="HomePage__section__div">
					<h2>mom, i'm 'ungry!</h2>
					<p>A few minutes is all it takes to make a healthy, nutritious meal for the kids</p>
					<button>
						<Link to="/recipes">Find A Recipe</Link>
					</button>
				</div>
				<div className="HomePage__section__div">
					<h2>need a doctor?</h2>
					<p>
						Whether your doctor isn't available, or you are in a different city, finding a doctor can be
						stressfull. Let's make that easy.
					</p>
					<button>
						<Link to="/doctors">Find A Doctor</Link>
					</button>
				</div>
			</section>
		</div>
	);
}

export default HomePage;
