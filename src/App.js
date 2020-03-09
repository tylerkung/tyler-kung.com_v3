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
import SoccerPage from "./Views/SoccerPage";
import PrivacyPage from "./Views/PrivacyPage";
import StylesPage from "./Views/StylesPage";
import ScrollToTop from './Components/ScrollToTop';
class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			loadScreenActive: false,
			initLoadScreen: false,
			overlayStatus: false
		}
		this.goHome = this.goHome.bind(this);
		this.initLoad = this.initLoad.bind(this);
		this.startLoad = this.startLoad.bind(this);
		this.stopLoad = this.stopLoad.bind(this);
		this.history = createBrowserHistory();
	}
	componentDidMount(){
		// console.log(this.history);
	}
	goNext(){
		console.log(this.history);
	}
	goBack(){
		this.history.listen(location => {
			if (this.history.action === 'POP' && location.pathname === '/'){
				// this.goHome();
			}
		});
	}
	goHome(){
		this.startLoad();
		setTimeout(() => {
			console.log('go Home');
			this.history.push('./')}, 800
		);
	}
	initLoad(){
		this.setState({initLoadScreen: true, loadScreenActive: true});
	}
	startLoad(){
		this.setState({loadScreenActive: true});
	}
	stopLoad(){
		this.setState({loadScreenActive: false, initLoadScreen: false});
	}
   render() {
		document.addEventListener('touchstart', {passive: true});
      return (
			<div className="App">
	         <Router history={this.history}>
					<ScrollToTop />
	            <Header goHome={this.goHome}/>
	            <main>
						<Route render={({location}) => {
							const { pathname, key } = location
							this.goBack();
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
												path="/(|index.html|home)/"
												render={(props) =>
													<HomePage {...props} stopLoad={this.stopLoad} initLoad={this.initLoad}/>}
											/>
											<Route exact
												path="/(about|index.html/about)"
												render={(props) =>
													<AboutPage {...props}/>}
											/>
											<Route exact
												path="/(fantasy-football|index.html/fantasy-football)"
												render={(props) =>
													<FootballPage {...props}/>}
											/>
											<Route exact
												path="/(bracket-mania|index.html/bracket-mania)"
												render={(props) =>
													<BasketballPage {...props}/>}
											/>
											<Route exact
												path="/(fantasy-pl|index.html/fantasy.pl)"
												render={(props) =>
													<SoccerPage {...props}/>}
											/>
											<Route exact
												path="/(privacy|index.html/privacy)"
												render={(props) =>
													<PrivacyPage {...props}/>}
											/>
											<Route exact path="/styles" component={StylesPage} />
					               </Switch>
									</Transition>
								</TransitionGroup>
							)
						}}/>
						<div className={'loading-screen ' + (this.state.loadScreenActive ? 'open' : 'close') + (this.state.initLoadScreen ? ' init' : '')}>
							<picture>
								<img src="images/Sleeper-logo.svg" alt="Sleeper Loading"/>
							</picture>
						</div>
	            </main>
					<div className="footer-helper"></div>
					<Footer />
	         </Router>
	      </div>
		);
	}
}


export default App;
