import React, { Component } from "react";
import {
   Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import GamesList from './GamesList';

class Footer extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
            <footer className="sleeper-footer">
					<div className="sleeper-footer-main">
						<div className="main-primary">
							<div className="primary-label">
								<h4>Games</h4>
							</div>
							<div className="primary-content">
								<GamesList />
							</div>
						</div>
						<div className="main-secondary">
						</div>
					</div>
					<div className="sleeper-footer-secondary">
						<Grid className="container" container>
							<Grid item md={2} xs={12}>
								<div className="txt-sm">
									© <strong>2020</strong> Sleeper
								</div>
						  	</Grid>
							<Grid item md={2} xs={12}>
								<ul className="footer-links">
									<li className="links-header">Company</li>
									<li><Link to="/about">About</Link></li>
								</ul>
						  	</Grid>
							<Grid item md={2} xs={12}>
						  	</Grid>
							<Grid item md={6} xs={12}>
								<ul className="footer-links footer-right txt-sm">
									<li>Support</li>
									<li>API</li>
									<li>Alerts</li>
									<li>Advertise</li>
									<Link to="/privacy"><li>Privacy & Terms</li></Link>
								</ul>
						  	</Grid>
						</Grid>
					</div>
				</footer>
        );
    }
}

export default Footer;
