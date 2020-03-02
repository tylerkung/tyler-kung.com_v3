import React from "react";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '../../Components/Card';

const AboutPage = () => {
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
						<p className="txt-center">Sleeper has by far the most engagement per user of any sports app,<br/>
						and is one of the highest retention apps in the world.<br/>
						Hear it directly from our users.</p>
						<Grid container spacing={3}>
							<Grid item md={4}>
								<Card>
								<h4>3 Column</h4>
								<p>I don’t give 5 star reviews. I did this for a reason. This is the perfect fantasy football app.</p>
								</Card>
							</Grid>
							<Grid item md={4}>
								<Card>
								<h4>3 Column</h4>
								<p>Sleeper is top notch. My first year on it as well and all my leagues pretty much on here now. Love it.</p>
								</Card>
							</Grid>
							<Grid item md={4}>
								<Card>
								<h4>3 Column</h4>
								<p>This app is near perfect and light years ahead of the competition.</p>
								</Card>
							</Grid>
						</Grid>
					</div>
				</div>
				<div className="layout layout-secondary-color layout-rounded-bottom">
					<div className="container">
					<button className="btn btn-default">Sleeper
					</button>
					<button className="btn btn-default btn-lg">Sleeper
					</button>
					<button className="btn btn-default btn-sm">Sleeper
					</button>
					<p>
					<button className="btn btn-default btn-orange btn-sm">Sleeper
					</button>
					</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<Card wide><Grid container spacing={3}>
					<Grid item xs={12}>
					<h2>2 Column - Wide</h2>
					</Grid>
					<Grid item md={6}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Grid>
					<Grid item md={6}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Grid>
					</Grid></Card>
					<Grid container spacing={3}>
					<Grid item md={4}>
					<Card>
					<h4>3 Column</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Card>
					</Grid>
					<Grid item md={4}>
					<Card>
					<h4>3 Column</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Card>
					</Grid>
					<Grid item md={4}>
					<Card>
					<h4>3 Column</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Card>
					</Grid>
					</Grid>
					</div>
				</div>
				<div className="layout layout-width-image">
					<img src="https://images.unsplash.com/photo-1577949098254-1ad7b1b526eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="splash"/>
				</div>
				<div className="layout layout-secondary-color layout-rounded-top layout-slant-down">
				</div>
				<div className="layout layout-main-color layout-no-shadow layout-slant-down">
				</div>
				<div className="layout layout-secondary-color layout-no-shadow">
				</div>
			</div>
		</div>
	)
}

export default withRouter(AboutPage);
