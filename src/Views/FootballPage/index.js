import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import LayeredGraphic from "../../Components/LayeredGraphic";
import Testimonials from "../../Components/Testimonials";
import ParallaxImage from "../../Components/ParallaxImage";
import Lottie from "react-lottie";
import animationData from "../../Lotties/scroll-animation-dark.json";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

class FootballPage extends Component {
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
            <div className={`page-content page-football ${(this.state.pageLoaded) ? "page-loaded" : ""}`}>
					<Controller>
	 				  <Scene
	 					  classToggle=''
	 					  reverse={true}
	 					  indicators={false}
	 					  triggerHook={0}
						  offset={10}
	 					  duration="1000px"
	 				  >
	 					  <Timeline>
	 						  <Tween
	 							  position="0"
	 							  from={{
	 								  yPercent: 0,
	 							  }}
	 							  to={{
	 								  yPercent: 30,
	 							  }}
	 						  >
									<div className="sport-header header-football">
										<div className="container">
											<Grid container spacing={3}>
												<Grid item md={6}>
												</Grid>
												<Grid item md={6} className="header-content">
													<h1 className="">Join millions of fans on Sleeper</h1>
													<p className="txt-black">See why everyone is moving their leagues to Sleeper.<br/>Never use antiquated fantasy platforms again.</p>
													<div className="">
														<button className="btn btn-default">Get Started
														</button>
													</div>
												</Grid>
											</Grid>
										</div>
										<div className="sport-video">
											<video autoPlay muted loop>
												<source src="http://sleepercdn.com/downloads/webtest/football_landing.mp4" type="video/mp4" />
													Your browser doesn't support the HTML5 video tag.
											</video>
										</div>
									</div>
								</Tween>
							</Timeline>
						</Scene>
					</Controller>
					<div className="sport-page">
						<div className="scroll-down">
							<Lottie options={defaultOptions}
								height={50}
								width={50}
							/>
						</div>
						<div className="layout layout-secondary-color">
							<div className="container">
								<Grid container spacing={10} className="flex-center graphic-row">
									<Grid item md={6}>
										<h1 className="block-header purple">Draft players</h1>
										<p>RB's early? TE in the second round? Or a QB (but not too early). Build your team the way you want in the draft. Choose wisely, your season depends on it!</p>
									</Grid>
									<Grid item md={6}>
										<LayeredGraphic
											back='./images/draft-phone.png'
											middle='./images/sleeper-draft-2.png'
											elements={['./images/clock.png', './images/player_card_05.png', './images/player_card_06.png', './images/player_card_05.png']}
											className='draft-graphic'
											entrance={true}
										/>
									</Grid>
								</Grid>
								<Grid container spacing={10} className="flex-center graphic-row">
									<Grid item md={6}>
										<LayeredGraphic
											back='./images/play-phone.png'
											middle='./images/sleeper-play.png'
											elements={['./images/football_green.png','./images/touchdown.png']}
											className='play-graphic'
											entrance={true}
											imagePosition='left'
										/>
									</Grid>
									<Grid item md={6}>
										<h1 className="block-header mint">Play your opponents</h1>
										<p>Match up head to head with your friends and see if your team is ready for the 13 week season. Compete for fun and play for glory. Only the top teams will advance to the playoffs.</p>
									</Grid>
								</Grid>
								<Grid container spacing={10} className="flex-center graphic-row">
									<Grid item md={6}>
										<h1 className="block-header aqua">Win the playoffs</h1>
										<p>It's win or go home! Be the last team standing to be crowned the champion of your league. Do you have what it takes?</p>
									</Grid>
									<Grid item md={6}>
										<LayeredGraphic
											back='./images/win-phone.png'
											middle='./images/sleeper-win.png'
											className='win-graphic'
											entrance={true}
										/>
									</Grid>
								</Grid>
							</div>
						</div>
						<div className="layout layout-secondary-color">
							<div className="container">
								<Grid container spacing={3}>
									<Grid item md={3}>
									</Grid>
									<Grid item md={6} className="txt-center">
										<h2>Gameday, everyday</h2>
										<p>Your team, your players, and your friends, all in one place. Sleeper integrates a social environment with the competitive fantasy atmosphere. Next level features and everything else your team needs are here.</p>
										<Link to="">
											<button className="btn btn-default">
												Create a league
											</button>
										</Link>
									</Grid>
									<Grid item md={3}>
									</Grid>
								</Grid>
							</div>
						</div>
						<div className="layout layout-secondary-color">
							<div className="container">
								<Grid container spacing={10} className="feature-row">
									<ParallaxImage
										src="./images/img_watermark_matchup.png"
										className="watermark-left"
										offsetY={[-40, -10]}
									/>
									<Grid item md={4}>
										<div className="feature-icon mint">
											<img src='./icons/icon_01_league_chat@3x.png' alt='League Chat' />
										</div>
										<h4>League Chat</h4>
										<p>Send text, gifs, polls and more with a modern chat right in your league, complete with the ability to react to trades and waiver pickups.</p>
									</Grid>
									<Grid item md={4}>
										<div className="feature-icon purple">
											<img src='./icons/icon_02_draftboard@3x.png' alt='League Chat' />
										</div>
										<h4>Draftboard</h4>
										<p>Beautiful. Powerful. Contextual. Draft on a modern interface and cast it to a big screen TV – complete with full controls to fix any draft mistakes.</p>
									</Grid>
									<Grid item md={4}>
										<div className="feature-icon red">
											<img src='./icons/icon_03_game_day@3x.png' alt='League Chat' />
										</div>
										<h4>Game Day</h4>
										<p>Experience the fastest scores, live play-by-plays, and real-time box scores, all custom delivered based on your league's scoring settings.</p>
									</Grid>
								</Grid>
								<Grid container spacing={10} className="feature-row">
									<ParallaxImage
										src="./images/img_watermark_league chat.png"
										className="watermark-right"
										offsetY={[-40, -10]}
									/>
									<Grid item md={4}>
										<div className="feature-icon gray">
											<img src='./icons/icon_04_mascots@3x.png' alt='League Chat' />
										</div>
										<h4>Mascots</h4>
										<p>Game Day gets better as you choose custom mascots to represent your team. Mascot reactions are sync'd to your team's performance in real-time!</p>
									</Grid>
									<Grid item md={4}>
										<div className="feature-icon orange">
											<img src='./icons/icon_05_blockbuster_trade@3x.png' alt='League Chat' />
										</div>
										<h4>Blockbuster Trades</h4>
										<p>Pull off a multi-team trade. Send future draft picks. Trade FAAB dollars. Trade during your draft. Sleeper lets you wheel and deal like never before.</p>
									</Grid>
									<Grid item md={4}>
										<div className="feature-icon green">
											<img src='./icons/icon_06_waiver_countdown@3x.png' alt='League Chat' />
										</div>
										<h4>Waiver Countdown</h4>
										<p>Weekly waivers process instantly when the countdown hits zero, turning waiver day into a fun experience with leaguemates.</p>
									</Grid>
								</Grid>
								<Grid container spacing={10} className="feature-row">
									<Grid item md={4}>
										<div className="feature-icon yellow">
											<img src='./icons/icon_07_DM@3x.png' alt='League Chat' />
										</div>
										<h4>Direct messaging</h4>
										<p>1:1 and group messaging is easy with Sleeper. Propose trades, talk smack, or organize events. No more downloading a separate chat app.</p>
									</Grid>
									<Grid item md={4}>
										<div className="feature-icon lilac">
											<img src='./icons/icon_08_dynasty_league@3x.png' alt='League Chat' />
										</div>
										<h4>Dynasty Leagues</h4>
										<p>Leagues are open 365 days a year, and Sleeper offers a full-suite of dynasty features. Unlike our peers, we do it for free.</p>
									</Grid>
									<Grid item md={4}>
										<div className="feature-icon aqua">
											<img src='./icons/icon_09_keeper@3x.png' alt='League Chat' />
										</div>
										<h4>Keeper Leagues</h4>
										<p>Sleeper offers full keeper support. We do all the tracking, so all you have to worry about is keeping the right players.</p>
									</Grid>
								</Grid>
							</div>
						</div>
						<div className="layout layout-secondary-color">
							<Testimonials
								className="football-testimonial"
								background="down"
								testimonials={this.testimonials}
							>
								<h1>The place for sports and friends</h1>
								<p>From mascots, to epic moments, to fun competition, see why many are inviting their friends and family to play with them on Sleeper.</p>
								<button className="btn btn-default">Get Started</button>
							</Testimonials>
						</div>
					</div>
				</div>
        );
    }
}

export default withRouter(FootballPage);
