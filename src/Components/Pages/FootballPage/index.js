import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


class FootballPage extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
            <div className="page-content page-football">
					<div className="sport-header">
					</div>
					<div className="sport-navigation">
					</div>
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
						<img src="https://images.unsplash.com/photo-1577949098254-1ad7b1b526eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
					</div>
					<div className="layout layout-secondary-color layout-rounded-top">
						<div class="container">
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
        );
    }
}

export default withRouter(FootballPage);
