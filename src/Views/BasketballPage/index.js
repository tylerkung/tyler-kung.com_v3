import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LayeredGraphic from "../../Components/LayeredGraphic";
import Testimonials from "../../Components/Testimonials";
import Lottie from "react-lottie";
import animationData from "../../Lotties/scroll-animation-dark.json";

class BasketballPage extends Component {
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
			<div className={`page-content page-basketball ${(this.state.pageLoaded) ? "page-loaded" : ""}`}>
				<div className="sport-header header-basketball">
					<div className="container">
						<Grid container spacing={3}>
							<Grid item md={6} className="header-content">
								<h1 className="">Play Bracket Mania</h1>
								<p className="txt-black">Your favorite fantasy app now supports college basketball brackets with all the features that you've come to expect and love</p>
								<div className="">
									<button className="btn btn-default btn-orange">Create a Pool
									</button>
								</div>
							</Grid>
							<Grid item md={6}>
							</Grid>
						</Grid>
					</div>
					<video autoPlay muted loop>
						<source src="http://sleepercdn.com/downloads/webtest/basketball_landing.mp4  " type="video/mp4" />
						<img src='./images/basketball-stadium-fallback.png' alt="Basketball"/>
						Your browser doesn't support the HTML5 video tag.
					</video>
					<div className="scroll-down">
						<Lottie options={defaultOptions}
							height={50}
							width={50}
						/>
					</div>
				</div>
				<div className="sport-page">
					<div className="layout layout-secondary-color">
						<div className="container">
							<Grid container spacing={3}>
								<Grid item md={2}>
								</Grid>
								<Grid item md={8} className="header-content">
									<h1 className="txt-center">The biggest event this March</h1>
									<p className="txt-center">Get ready to fill out your brackets for the NCAA college basketball tournament!<br/>Enjoy Weekly and Classic gameplay designed for groups.</p>
									<div className="txt-center">
										<button className="btn btn-default btn-orange">Download App
										</button>
									</div>
								</Grid>
								<Grid item md={2}>
								</Grid>
							</Grid>
						</div>
					</div>
					<div className="layout layout-bracket-mania-color">
							<Grid container spacing={3}>
								<Grid item md={12}>
									<LayeredGraphic
										back='./images/bracket-mania-phone.png'
										middle='./images/sleeper-bracket-mania.png'
										elements={[]}
										className='bracket-mania-graphic'
										entrance={true}
										imagePosition='right'
									/>
								</Grid>
							</Grid>
					</div>
					<div className="layout layout-secondary-color rounded-top bracket-mania-features">
						<div className="container">
							<Grid container spacing={10} className="feature-row">
								<Grid item md={3}>
									<div className="feature-icon mint">
										<img src='./icons/icon_bm_01_group_chat.png' alt='Group Chat' />
									</div>
									<h4>Group Chat</h4>
									<p>Pools are more fun with chat at the center. Send text, images, gifs and polls to your group before and during the tournament.</p>
								</Grid>
								<Grid item md={3}>
									<div className="feature-icon red">
										<img src='./icons/icon_bm_02_mobile_app.png' alt='Mobile App' />
									</div>
									<h4>Mobile app</h4>
									<p>An intuitive mobile interfaces makes it easy for everyone to fill out their brackets. Now you can edit brackets anywhere, including on the go.</p>
								</Grid>
								<Grid item md={3}>
									<div className="feature-icon yellow">
										<img src='./icons/icon_bm_03_live_standing.png' alt='Live Standings' />
									</div>
									<h4>Live standings</h4>
									<p>Know where you stand at all times with the fastest and most frequently updated scores, straight from the source.</p>
								</Grid>
								<Grid item md={3}>
									<div className="feature-icon purple">
										<img src='./icons/icon_bm_04_team_notes.png' alt='Team Notes' />
									</div>
									<h4>Team notes</h4>
									<p>Easily compare teams via our dynamic matchup screen that features easy-to-digest notes on each team to help you decide between picks.</p>
								</Grid>
							</Grid>
						</div>
					</div>
					<div className="layout layout-secondary-color">
						<div className="container">
							<Grid container spacing={10} className="flex-center graphic-row">
								<Grid item md={7}>
									<LayeredGraphic
										back='./images/weekly-phone.png'
										middle='./images/sleeper-weekly.png'
										elements={['./images/bm-clock.png', './images/orange-calendar.png','./images/orange-confetti.png','./images/bm-basketball.png']}
										className='weekly-graphic'
										entrance={true}
										imagePosition='left'
									/>
								</Grid>
								<Grid item md={5}>
									<h1>Weekly Mode</h1>
									<p>In <strong>Weekly Mode (Recommended)</strong>, the 64-team tournament is divided into 3 weeks. There are 2 rounds in every week.</p>
									<p><strong>Week 1</strong> - Rounds 1 & 2<br/>
									<strong>Week 2</strong> - Sweet 16 & Elite 8<br/>
									<strong>Week 3</strong> - Final Four and Championship<br/>
									</p>
									<p>At the beginning of each week of the tournament, players will fill out the bracket for the next 2 rounds, choosing from teams that are still in the tournament.</p>
									<p>This mode offers the right balance of strategy and chance, with the opportunity for upset comebacks in your pool.</p>
								</Grid>
							</Grid>
							<Grid container spacing={10} className="flex-center graphic-row">
								<Grid item md={5}>
									<h1>Classic Mode</h1>
									<p>In <strong>Classic Mode</strong>, each participant will submit all of their picks for the entire bracket, including through the Championship Game.  No changes can be made once games begin.</p>
								</Grid>
								<Grid item md={7}>
									<LayeredGraphic
										back='./images/classic-phone.png'
										middle='./images/sleeper-classic.png'
										elements={['./images/orange-confetti.png','./images/bm-basketball.png','./images/orange-trophy.png']}
										className='classic-graphic'
										entrance={true}
										imagePosition='right'
									/>
								</Grid>
							</Grid>
						</div>
					</div>
					<div className="layout layout-secondary-color">
						<Testimonials
							className="basketball-testimonial"
							background="down"
							testimonials={this.testimonials}
						>
							<h1>The place for sports and friends</h1>
							<p>From mascots, to epic moments, to fun competition, see why many are inviting their friends and family to play with them on Sleeper.</p>
							<button className="btn btn-default btn-orange">Get Started</button>
						</Testimonials>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(BasketballPage);
