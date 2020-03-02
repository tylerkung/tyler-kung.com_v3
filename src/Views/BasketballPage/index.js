import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

class BasketballPage extends Component {
    constructor(props){
        super(props);

		  this.state = {
			  pageLoaded: false
        }
		  this.onRouteChange = this.onRouteChange.bind(this);
    }
	 componentDidMount(){
 		// this.initLoadScreen();
 		// this.props.stopLoad();
		setTimeout(
			() => {
				this.setState({pageLoaded: true});
			}, 2000);
 		this.props.history.listen(this.onRouteChange.bind(this));
 	}
	componentWillUnmount(){
		this.setState({pageLoaded: false});
	}
	onRouteChange(route){
		if (route.pathname === "/"){
			this.props.goHome();
		}
	}
    render(){
        return (
			  <div className={`page-content page-basketball ${(this.state.pageLoaded) ? "page-loaded" : ""}`}>
				  <div className="sport-header header-basketball">
					  <video autoPlay muted loop>
						  <source src="./videos/Basketball.mp4" type="video/mp4" />
							  <img src='./images/basketball-stadium-fallback.png' alt="Basketball"/>
							  Your browser doesn't support the HTML5 video tag.
					  </video>
				  </div>
				  <div className="sport-page">
					  <div className="layout layout-secondary-color layout-slant-down">
						  <div className="container">
							  <h1 className="txt-center">Join millions of fans on Sleeper</h1>
							  <h3 className="txt-center">See why everyone is moving their leagues to Sleeper.<br/>Never use antiquated fantasy platforms again.</h3>
							  <div className="txt-center">
								  <button className="btn btn-default">Sign Up
								  </button>
							  </div>
						  </div>
					  </div>
					  <div className="layout layout-main-color layout-rounded-bottom">
						  <div className="container">
							  <Grid container spacing={3}>
								  <Grid item md={7}>
								  </Grid>
								  <Grid item md={4}>
									  <h2>1. Draft Players</h2>
									  <p>Your team, your players, and your friends, all in one place. Sleeper integrates a social environment with the competitive fantasy atmosphere. Next level features and everything else your league needs are here.</p>
									  <h2>2. Play your opponents</h2>
									  <p>Your team, your players, and your friends, all in one place. Sleeper integrates a social environment with the competitive fantasy atmosphere. Next level features and everything else your league needs are here.</p>
									  <h2>3. Win the playoffs</h2>
									  <p>Your team, your players, and your friends, all in one place. Sleeper integrates a social environment with the competitive fantasy atmosphere. Next level features and everything else your league needs are here.</p>
								  </Grid>
							  </Grid>
						  </div>
					  </div>
					  <div className="layout layout-width-image">
						  <img src="./images/inside-basketball.png" alt="Basketball"/>
					  </div>
					  <div className="layout layout-secondary-color layout-rounded-top">
						  <div className="container">
							  <Grid container spacing={3}>
								  <Grid item md={5}>
									  <h2>Gameday, everyday</h2>
									  <p>Your team, your players, and your friends, all in one place. Sleeper integrates a social environment with the competitive fatnasy atmosphere. Next level features and everything else your team needs are here.</p>
								  </Grid>
								  <Grid item md={7}>
								  </Grid>
							  </Grid>
						  </div>
					  </div>
				  </div>
			  </div>
        );
    }
}

export default withRouter(BasketballPage);
