import React, { Component } from "react";
import {
   Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

class Footer extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (

			  <Controller>
  				<Scene
  					classToggle='show'
  					triggerElement={`.footer-helper`}
  					offset={-300}
  					triggerHook={1}
  					reverse={true}
  					indicators={false}
					duration="400px"
  				>
				<Timeline>
					<Tween
						position="0"
						from={{
							y: '400px',
						}}
						to={{
							y: '0px'
						}}
					>
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
									<li><Link to="/bracket-mania">Bracket Mania</Link></li>
									<li><Link to="/fantasy-football">Fantasy Football</Link></li>
									<li><Link to="/fantasy-pl">Fantasy PL</Link></li>
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
									<img src='./images/sleeper-logo-footer.png' alt="Sleeper" className="footer-logo"/>
									<div className="footer-socials">
										<a href="https://twitter.com/SleeperHQ" target="_blank">
											<img src="./icons/twitter_White.png" alt="Twitter"/>
										</a>
										<a href="https://www.facebook.com/sleeperhq" target="_blank">
											<img src="./icons/Facebook_White.png" alt="Facebook"/>
										</a>
										<a href="https://medium.com/@sleeperbot" target="_blank">
											<img src="./icons/Medium_White.png" alt="Medium"/>
										</a>
									</div>
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
				</Tween>
				</Timeline>
				</Scene>
				</Controller>
        );
    }
}

export default Footer;
