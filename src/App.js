import React, { Component } from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/Pages/HomePage";
import AboutPage from "./Components/Pages/AboutPage";
import FootballPage from "./Components/Pages/FootballPage";
import BasketballPage from "./Components/Pages/BasketballPage";
import StylesPage from "./Components/Pages/StylesPage";

const firstChild = props => {
	const childrenArray = React.Children.toArray(props.children);
	return childrenArray[0] || null;
}

class App extends Component {
	constructor(props){
		 super(props);

		 this.state = {
			 loadScreenActive: true
		 }
	}
	initLoadScreen(){
		this.timeoutId = setTimeout(function () {
        this.setState({loadScreenActive: false});
    }.bind(this), 2000);
	}
	// closeLoadScreen(){
	// 	console.log("hello");
	// 	this.setState({
	// 		loadScreenActive: false
	// 	});
	// }
	componentDidMount(){
		this.initLoadScreen();
	}
	componentWillUnmount(){
		if (this.timeoutId) {
	        clearTimeout(this.timeoutId);
	    }
	}
   render() {
      return (
			<div className="App">
	         <Router>
	            <Header />
	            <main>
	               <Switch>
	                  <Route exact path="/" component={HomePage} />
							<Route exact path="/about" component={AboutPage} />
							<Route exact path ="/football"
								children={({ match, ...rest }) => (
									<TransitionGroup component={firstChild}>
										{match && <FootballPage {...rest} />}
									</TransitionGroup>
								)}/>
	                  // <Route exact path="/football" component={FootballPage} />
	                  <Route exact path="/basketball" component={BasketballPage} />
							<Route exact path="/styles" component={StylesPage} />
	               </Switch>
						<Navigation />
	            </main>
					<div className={'loading-screen ' + (this.state.loadScreenActive ? 'open' : 'close')}>
						<img src="https://sleepercdn.com/images/landing/v3/logos/header_light-5c99df9d0d1ba4c82fedb46b4e9328fe.png?vsn=d" />
					</div>
	            <Footer />
	         </Router>
	      </div>
		);
	}
}


export default App;
