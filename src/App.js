import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import FeedingGuide from "./components/FeedingGuide/FeedingGuide";
import FindDoctor from "./components/FindDoctor/FindDoctor";
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
					<Route path="/feeding" component={FeedingGuide} />
					{/* <Route path="/" component={Safetyguide} /> */}
					<Route path="/find" component={FindDoctor} />
					<Route component={PageNotFound} />
				</Switch>
			</main>
			<Footer />
		</div>
	);
}

export default App;
