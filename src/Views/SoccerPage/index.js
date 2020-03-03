import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LayeredGraphic from "../../Components/LayeredGraphic";
import Testimonials from "../../Components/Testimonials";
import Lottie from "react-lottie";
import animationData from "../../Lotties/scroll-animation-dark.json";

class SoccerPage extends Component {
	constructor(props){
		 super(props);

		 this.state = {
			 pageLoaded: false
		 }
		 this.onRouteChange = this.onRouteChange.bind(this);
		 this.testimonials = [
			 {
				 name: 'Phatdad66',
				 image: './images/sleeper-avatar-1.png',
				 quote: "It's basically everything I've ever dreamed of in a fantasy app. From the draft board, to the greatest chat room system ever made.",
				 direction: 'left'
			 },
			 {
				 name: 'David S',
				 image: './images/sleeper-avatar-2.png',
				 quote: "Switched leagues from ESPN and Yahoo. Other owners couldn't believe Sleeper existed. Really brought fantasy football up to modern standards.",
				 direction: 'right'
			 },
			 {
				 name: 'Andrew D.',
				 image: './images/sleeper-avatar-3.png',
				 quote: "We all love what you're doing over at Sleeper. Every day we're reminded why we switched from ESPN, Yahoo, etc.",
				 direction: 'right'
			 },
			 {
				 name: 'AN1836',
				 image: './images/sleeper-avatar-4.png',
				 quote: "The news updates are super handy, the in app league chat is amazing since you don't have to use another app for talking to leaguemates.",
				 direction: 'right'
			 },
			 {
				 name: 'ChemistryWiz17',
				 image: './images/sleeper-avatar-5.png',
				 quote: "From trading rookie draft picks during the season to multi team trades to its interactive and helpful customer services, our league has never regretted switching...",
				 direction: 'right'
			 },
		 ];
	}
	componentDidMount(){
	  // this.initLoadScreen();
	  // this.props.stopLoad();
	  setTimeout(
		  () => {
			  this.setState({pageLoaded: true});
		  }, 1000);
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
	  const defaultOptions = {
		  loop: true,
		  autoplay: true,
		  animationData: animationData,
		  rendererSettings: {
			  preserveAspectRatio: 'xMidYMid slice'
		  }
	  };
	  return (
		  <div className={`page-content page-soccer ${(this.state.pageLoaded) ? "page-loaded" : ""}`}>
			  <div className="sport-header header-soccer">
				  <div className="container">
					  <Grid container spacing={3}>
						  <Grid item md={6} className="header-content">
							  <h1 className="">Fantasy PL is under construction</h1>
							  <p className="txt-black"><strong>Caution</strong>: Hard hat required.. Check back soon..</p>
						  </Grid>
						  <Grid item md={6}>
						  </Grid>
					  </Grid>
				  </div>
				  <video autoPlay muted loop>
					  <source src="./videos/soccer-landing.mp4" type="video/mp4" />
					  Your browser doesn't support the HTML5 video tag.
				  </video>
			  </div>
			  <div className="sport-page">
				  <div className="layout layout-secondary-color">
					  <div className="container">
					  </div>
				  </div>
			  </div>
		  </div>
	  );
  }
}

export default withRouter(SoccerPage);
