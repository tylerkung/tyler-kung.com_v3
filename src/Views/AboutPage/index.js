import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '../../Components/Card';
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
				direction: 'left'
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
		this.departmentClasses = {
			support: 'support orange',
			engineering: 'engineering mint',
			operations: 'operations aqua',
			design: 'design yellow',
			marketing: 'marketing red'
		}
		this.employees = {
			daniel: {
				name: 'Daniel',
				department: 'Growth',
				class: this.departmentClasses.support
			},eric_b: {
				name: 'Eric B.',
				department: 'Engineering',
				class: this.departmentClasses.engineering
			},eric_k: {
				name: 'Eric K.',
				department: 'Ops/Marketing',
				class: this.departmentClasses.operations
			},henry: {
				name: 'Henry',
				department: 'Founding Engineer',
				class: this.departmentClasses.engineering
			},jeannie: {
				name: 'Jeannie',
				department: 'Support',
				class: this.departmentClasses.support
			},joel: {
				name: 'Joel',
				department: 'Engineering',
				class: this.departmentClasses.engineering
			},jorge: {
				name: 'Jorge',
				department: 'Engineering',
				class: this.departmentClasses.engineering
			},kat: {
				name: 'Kat',
				department: 'Operations',
				class: this.departmentClasses.operations
			},ken: {
				name: 'Ken',
				department: 'Founding Engineer',
				class: this.departmentClasses.engineering
			},kenny: {
				name: 'Kenny',
				department: 'Engineering',
				class: this.departmentClasses.engineering
			},kevin: {
				name: 'Kevin',
				department: 'Support',
				class: this.departmentClasses.support
			},lam: {
				name: 'Lam',
				department: 'Design',
				class: this.departmentClasses.design
			},luke: {
				name: 'Luke',
				department: 'Engineering',
				class: this.departmentClasses.engineering
			},mai: {
				name: 'Mai',
				department: 'Design',
				class: this.departmentClasses.design
			},nan: {
				name: 'Nan',
				department: 'CEO, Founder',
				class: this.departmentClasses.operations
			},ray: {
				name: 'Ray',
				department: 'Design',
				class: this.departmentClasses.design
			},seth: {
				name: 'Seth',
				department: 'Engineering',
				class: this.departmentClasses.engineering
			},sheng: {
				name: 'Sheng',
				department: 'Design',
				class: this.departmentClasses.design
			},sunny: {
				name: 'Sunny',
				department: 'Design',
				class: this.departmentClasses.design
			},tyler: {
				name: 'Tyler',
				department: 'Design',
				class: this.departmentClasses.design
			},victoriya: {
				name: 'Victoriya',
				department: 'Design',
				class: this.departmentClasses.design
			},weixi: {
				name: 'Weixi',
				department: 'CTO, Founder',
				class: this.departmentClasses.engineering
			},william: {
				name: 'William',
				department: 'Design',
				class: this.departmentClasses.design
			},
		}
	}

	renderEmployees(names){
		const employees = [];
		names.map((employee, index) => {
			if (employee.length > 0){
				return employees.push(
					<Grid item md={2} sm={4} key={index}>
						<h3 className={`block-header ${this.employees[employee].class}`}>
							{this.employees[employee].name}<br/><span className="txt-sm">{this.employees[employee].department}</span>
						</h3>
					</Grid>
				)
			} else{
				return employees.push(
					<Grid item md={2} sm={4} key={index}>
					</Grid>
				)
			}
		});
		return employees;
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
						<img src="./images/sleeper-working.jpg" alt="Sleeper Team"/>
					</div>
				</div>
				<div className="default-page">
					<div className="layout layout-secondary-color">
						<div className="container">
							<Grid container spacing={3}>
								<Grid item lg={3} sm={2} xs={12}>
								</Grid>
								<Grid item lg={6} sm={8} xs={12} className="header-content">
									<h2 className="txt-center">Here’s what our users are saying...</h2>
									<p className="txt-center">Sleeper has by far the most engagement per user of any sports app,
									and is one of the highest retention apps in the world.<br/>Hear it directly from our users.</p>
								</Grid>
								<Grid item lg={3} sm={2} xs={12}>
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
									<p className="txt-center">Everyone on the team has the skills and confidence to take the last shot.</p>
								</Grid>
								<Grid item md={3}>
								</Grid>
							</Grid>
						</div>
					</div>
					<div className="layout layout-secondary-color">

						<div className="container wide full-team">
							<Grid container spacing={10} className="feature-row">
								{this.renderEmployees(['nan', 'weixi', 'ken', 'lam', 'sheng'])}
								{this.renderEmployees(['eric_k', 'henry', 'seth', 'victoriya', 'tyler'])}
								{this.renderEmployees(['kat', 'kenny', 'luke', 'ray', 'william'])}
								{this.renderEmployees(['daniel', 'joel', 'jorge', 'mai', 'sunny'])}
								{this.renderEmployees(['jeannie', 'eric_b', '','',''])}
								{this.renderEmployees(['kevin'])}
							</Grid>
						</div>
					</div>
					<div className="layout layout-secondary-color">
						<div className="container">
							<Grid container spacing={10}>
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
								<Grid item md={4} xs={12}>
									<Card>
										<img src="https://sleepercdn.com/images/landing/v3/logos/logo_bv-1fdae4b88793c5c97e3f3abb75ece603.png?vsn=d" alt="Birchmere Ventures"/>
									</Card>
								</Grid>
								<Grid item md={4} xs={12}>
									<Card>
										<img src="https://sleepercdn.com/images/landing/v3/logos/logo_gc-f4ab3187f155a05b27db8cc3169014be.png?vsn=d" alt="General Catalyst"/>
									</Card>
								</Grid>
								<Grid item md={4} xs={12}>
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
									<p className="txt-center">
										<button className="btn btn-default">Contact Us
										</button>
									</p>
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
