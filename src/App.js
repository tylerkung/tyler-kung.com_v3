import React, { Component } from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from './timelines';
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import HomePage from "./Views/HomePage";
import AboutPage from "./Views/AboutPage";
import FootballPage from "./Views/FootballPage";
import BasketballPage from "./Views/BasketballPage";
import StylesPage from "./Views/StylesPage";

class App extends Component {
	constructor(props){
		 super(props);

		 this.state = {
			 loadScreenActive: true
		 }
	}
   render() {
      return (
			<div className="App">
	         <Router>
	            <Header />
	            <main>
						<Route render={({location}) => {
							const { pathname, key } = location

							return (
								<TransitionGroup component={null}>
									<Transition
										key={key}
										appear={true}
										onEnter={(node, appears) => play(pathname, node, appears)}
										onExit={(node, appears) => exit(pathname, node, appears)}
										timeout={{enter: 0, exit: 500}}
									>
										<Switch location={location}>
					                  <Route exact path="/" component={HomePage} />
											<Route exact path="/about" component={AboutPage} />
					                  <Route exact path="/football" component={FootballPage} />
					                  <Route exact path="/basketball" component={BasketballPage} />
											<Route exact path="/styles" component={StylesPage} />
					               </Switch>
									</Transition>
								</TransitionGroup>
							)
						}}/>
	            </main>
					<Footer />
	         </Router>
	      </div>
		);
	}
}


export default App;
