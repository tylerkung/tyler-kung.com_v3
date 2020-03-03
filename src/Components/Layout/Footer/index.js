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

					<div className="sleeper-footer-secondary">
						<Grid className="container" container>
							<Grid item md={2} xs={12}>
								<ul className="footer-links">
									<li className="links-header">Company</li>
									<li><Link to="/about">About</Link></li>
									<li><a href="https://blog.sleeper.app/" target="_blank">Blog</a></li>
								</ul>
						  	</Grid>
							<Grid item md={2} xs={12}>
								<ul className="footer-links">
									<li className="links-header">Product</li>
									<li><Link to="/basketball">Bracket Mania</Link></li>
									<li><Link to="/football">Football</Link></li>
								</ul>
						  	</Grid>
							<Grid item md={2} xs={12}>
								<ul className="footer-links">
									<li className="links-header">Resources</li>
								</ul>
						  	</Grid>
							<Grid item md={2} xs={12}>
								<ul className="footer-links">
									<li className="links-header">More</li>
								</ul>
						  	</Grid>
							<Grid item md={4} xs={12}>
								<div className="footer-right">
									<img src='./images/sleeper-logo-footer.png' alt="Sleeper" />
								</div>
						  	</Grid>
						</Grid>
					</div>
					<div className="footer-bottom">
						<Grid className="container" container>
							<Grid item xs={12} className="txt-center">
								<div className="txt-sm">
									<h3>© 2020 Copyrights are Blitz Studios Inc.</h3>
								</div>
							</Grid>
						</Grid>
					</div>
				</footer>
        );
    }
}

export default Footer;
