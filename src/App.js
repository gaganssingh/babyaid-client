import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Recipes from "./components/Recipes/Recipes";
import Doctors from "./components/Doctors/Doctors";
import SignupLogin from "./components/SignupLogin/SignupLogin";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<main className="App_main">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/recipes" component={Recipes} />
					{/* <Route path="/" component={Safetyguide} /> */}
					<Route path="/doctors" component={Doctors} />
					<Route path="/signuplogin" component={SignupLogin} />
					<Route component={PageNotFound} />
				</Switch>
			</main>
			<Footer />
		</div>
	);
}

export default App;
