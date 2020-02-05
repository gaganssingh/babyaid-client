import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import StartHere from "./components/StartHere/StartHere";
import Recipes from "./components/Recipes/Recipes";
import Doctors from "./components/Doctors/Doctors";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Navigation />
			<main className="App_main">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/starthere" component={StartHere} />
					<Route path="/recipes" component={Recipes} />
					{/* <Route path="/" component={Safetyguide} /> */}
					<Route path="/doctors" component={Doctors} />
					<Route component={PageNotFound} />
				</Switch>
			</main>
			<Footer />
		</div>
	);
}

export default App;
