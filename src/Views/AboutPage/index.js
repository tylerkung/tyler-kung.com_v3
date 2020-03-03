import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '../../Components/Card';
import LayeredGraphic from "../../Components/LayeredGraphic";
import Testimonials from "../../Components/Testimonials";

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
						<img src="./images/football-stadium-fallback.png" alt="Football"/>
					</div>
				</div>
				<div className="default-page">
					<div className="layout layout-secondary-color">
						<div className="container">
							<h1 className="txt-center">Here’s what our users are saying...</h1>
						</div>
						<Testimonials
							className="about-testimonial"
							background="up"
							testimonials={this.testimonials}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(AboutPage);
