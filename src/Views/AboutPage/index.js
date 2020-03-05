import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '../../Components/Card';
import LayeredGraphic from "../../Components/LayeredGraphic";
import Testimonials from "../../Components/Testimonials";
import ParallaxImage from "../../Components/ParallaxImage";

class AboutPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			pageLoaded: false
		}
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
				direction: 'left'
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
	render(){

		return (
			<div className="page-content">
				<div className="page-header">
					<div className="page-title">
						<h1>About Us</h1>
						<div className="subtitle">
							Sleeper brings people together over sports
						</div>
						<p>We built Sleeper to help strengthen bonds between friends, families, and co-workers.</p>
						<p>Some of our fondest memories include Super Bowl parties with classmates, water-cooler debates at work, watching Christmas NBA games in our pajamas with family, and playing in fantasy leagues with friends.</p>
						<p>We believe the biggest opportunity in sports does not lie in betting, content, or escapism, but rather in its power to bring people closer together and create new friendships.</p>
					</div>
					<div className="page-banner">
						<img src="./images/team-2.jpg" alt="Sleeper Team"/>
					</div>
				</div>
				<div className="default-page">
					<div className="layout layout-secondary-color">
						<div className="container">
							<Grid container spacing={3}>
								<Grid item md={3}>
								</Grid>
								<Grid item md={6} className="header-content">
									<h2 className="txt-center">Here’s what our users are saying...</h2>
									<p className="txt-center">Sleeper has by far the most engagement per user of any sports app,
									and is one of the highest retention apps in the world.<br/>Hear it directly from our users.</p>
								</Grid>
								<Grid item md={3}>
								</Grid>
							</Grid>
						</div>
					</div>
					<div className="layout layout-secondary-color">
						<Testimonials
							className="about-testimonial"
							background="up"
							testimonials={this.testimonials}
						/>
					</div>
					<div className="layout layout-secondary-color">
						<div className="container">
							<Grid container spacing={3}>
								<Grid item md={3}>
								</Grid>
								<Grid item md={6} className="header-content">
									<h2 className="txt-center">Our Team</h2>
									<p className="txt-center">We believe in quality over quantity, and intentionally keep our team small. Each team member has the potential for outsized impact, and is empowered to be breakout superstars..</p>
									<p>Everyone on the team has the skills and confidence to take the last shot.</p>
								</Grid>
								<Grid item md={3}>
								</Grid>
							</Grid>
						</div>
					</div>
					<div className="layout layout-secondary-color">
						<div className="container">
							<Grid container spacing={10} className="feature-row">
								<Grid item md={4}>
									<h3 className="block-header mint frontend">Henry</h3>
									<p>Passionate developer striving to code meaningful experiences to end-users. There is only one thing we say to bad user experiences: Not today.</p>
								</Grid>
								<Grid item md={4}>
									<h3 className="block-header mint frontend">Jorge</h3>
									<p>Software Engineer. Born in Venezuela. Love team-work and bringing ideas to life. Excited to make Sleeper the best sport app.</p>
								</Grid>
								<Grid item md={4}>
									<h3 className="block-header mint frontend">Ken</h3>
									<p>If you're reading this, come join us for a 🍻, have some 🔥🥘, play some 🎮, and have a 🎉⏱</p>
								</Grid>
							</Grid>
							<Grid container spacing={10} className="feature-row">
								<ParallaxImage
									src="./images/img_watermark_league chat.png"
									className="watermark-right"
									offsetY={[-40, -20]}
								/>
								<Grid item md={4}>
									<h3 className="block-header yellow design">Lam</h3>
									<p>Self-proclaimed digital puppet master who can turn anything he touches to life. Rumor has it that he can draw with any limb. His mind power and imagination can turn anything into reality.</p>
								</Grid>
								<Grid item md={4}>
									<h3 className="block-header yellow design">Sheng</h3>
									<p>45% Designer. 25% Collector and dreamer. 15% Boba lover. 15% Failed as a basketball player so became a basketball fan. 5% to be continued.</p>
								</Grid>
								<Grid item md={4}>
									<h3 className="block-header yellow design">Sunny</h3>
									<p>Sunny of House Yen, first of her name, master of grills and protector of phone screens, marinator of the great kalbi, breaker of Apple design guidelines, and mother of penguins.</p>
								</Grid>
							</Grid>
							<Grid container spacing={10} className="feature-row">
								<ParallaxImage
									src="./images/img_watermark_matchup.png"
									className="watermark-left"
									offsetY={[-40, -20]}
								/>
								<Grid item md={4}>
									<h3 className="block-header purple growth">Daniel</h3>
									<p>49ers/Sharks fan. Stanford grad. Will never draft a QB earlier than the 6th round and there is a special place in his heart for March Madness.</p>
								</Grid>
								<Grid item md={4}>
									<h3 className="block-header purple growth">Nan</h3>
									<p>Recovering finance professional. Repatriated ex-patriot who roots for the Patriots. Really excited about building Sleeper into a sports network where friends can enjoy sports together.</p>
								</Grid>
								<Grid item md={4}>
									<h3 className="block-header aqua backend">Weixi</h3>
									<p>Berkeley grad. Husband & father. Warriors fan. Picked Odell Beckham #1 overall. Favorite quote: "If you have no faith, why are you guys even here?" - HotshotGG.</p>
								</Grid>
							</Grid>
							<Grid container spacing={10} className="feature-row">
								<Grid item md={4}>
								</Grid>
								<Grid item md={4}>
									<h3 className="block-header aqua backend">Kenny</h3>
									<p>Works on my machine ¯\_(ツ)_/¯</p>
								</Grid>
								<Grid item md={4}>

								</Grid>
							</Grid>
						</div>
					</div>
					<div className="layout layout-secondary-color">
						<div className="container">
							<Grid container spacing={3}>
								<Grid item md={3}>
								</Grid>
								<Grid item md={6} className="header-content">
									<h2 className="txt-center">Investors</h2>
									<p className="txt-center">Sleeper is venture backed, and supported by a coaching staff of top-tier investors and founders</p>
								</Grid>
								<Grid item md={3}>
								</Grid>
							</Grid>
							<Grid container spacing={3}>
								<Grid item md={4}>
									<Card>
										<img src="https://sleepercdn.com/images/landing/v3/logos/logo_bv-1fdae4b88793c5c97e3f3abb75ece603.png?vsn=d" alt="Birchmere Ventures"/>
									</Card>
								</Grid>
								<Grid item md={4} className="header-content">
									<Card>
										<img src="https://sleepercdn.com/images/landing/v3/logos/logo_gc-f4ab3187f155a05b27db8cc3169014be.png?vsn=d" alt="General Catalyst"/>
									</Card>
								</Grid>
								<Grid item md={4}>
									<Card>
										<img src="https://sleepercdn.com/images/landing/v3/logos/logo_expa-0fe28b05b47672ea09075d5087ed25a9.png?vsn=d" alt="Expa	"/>
									</Card>
								</Grid>
							</Grid>
						</div>
					</div>
					<div className="layout layout-secondary-color">
						<div className="container">
							<Grid container spacing={3}>
								<Grid item md={3}>
								</Grid>
								<Grid item md={6} className="header-content">
									<h2 className="txt-center">Think you can make an impact?</h2>
									<p className="txt-center">If you are a free agent who wants to help build a world where friendships are strengthened over sports, please send a cover letter and resume to <a href="mailto:jobs@sleeper.app">jobs@sleeper.app</a>.</p>
									<p className="txt-center">For all other inquiries: </p>
									<p className="txt-center"><a href="">
										<button className="btn btn-default">Contact Us
										</button>
									</a></p>
								</Grid>
								<Grid item md={3}>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(AboutPage);
