import React, { Component } from "react";
import {
   Router,
   Switch,
   Route
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from './timelines';
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import HomePage from "./Views/HomePage";
import AboutPage from "./Views/AboutPage";
import FootballPage from "./Views/FootballPage";
import BasketballPage from "./Views/BasketballPage";
import StylesPage from "./Views/StylesPage";
import ScrollToTop from './Components/ScrollToTop';

class App extends Component {
	constructor(props){
		 super(props);

		 this.state = {
			 loadScreenActive: false
		 }
		 this.goHome = this.goHome.bind(this);
		 this.startLoad = this.startLoad.bind(this);
		 this.stopLoad = this.stopLoad.bind(this);
		 this.history = createBrowserHistory();
	}
	goHome(){
		this.startLoad();
		setTimeout(() => {
			console.log('go Home');
			this.history.push('/home')}, 1000
		);
	}
	startLoad(){
		this.setState({loadScreenActive: true});
	}
	stopLoad(){
		setTimeout(() => {
			this.setState({loadScreenActive: false});}, 1000
		);
	}
   render() {
      return (
			<div className="App">
	         <Router history={this.history}>
					<ScrollToTop />
	            <Header goHome={this.goHome}/>
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
					                  <Route exact
												path="/(home|)/"
												render={(props) =>
													<HomePage {...props} stopLoad={this.stopLoad} />}
											/>
											<Route exact path="/about" component={AboutPage} />
											<Route exact
												path="/football"
												render={(props) =>
													<FootballPage {...props} goHome={this.goHome} />}
											/>
											<Route exact
												path="/basketball"
												render={(props) =>
													<BasketballPage {...props} goHome={this.goHome} />}
											/>
											<Route exact path="/styles" component={StylesPage} />
					               </Switch>
									</Transition>
								</TransitionGroup>
							)
						}}/>
						<div className={'loading-screen ' + (this.state.loadScreenActive ? 'open' : 'close')}>
							<video autoPlay muted loop>
								<source src="./videos/loading-bot.mp4" type="video/mp4" />
							</video>
						</div>
	            </main>
					<Footer />
	         </Router>
	      </div>
		);
	}
}


export default App;
