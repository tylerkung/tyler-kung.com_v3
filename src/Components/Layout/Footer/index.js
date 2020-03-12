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
  					offset={-400}
  					triggerHook={1}
  					reverse={true}
  					indicators={false}
					duration="500px"
  				>
				<Timeline>
					<Tween
						position="0"
						from={{
							y: '500px',
						}}
						to={{
							y: '0px'
						}}
					>
            <footer className="sleeper-footer">

					<div className="sleeper-footer-secondary">
						<Grid className="container" container>
							<Grid item md={2} sm={6}>
								<ul className="footer-links">
									<li className="links-header">Company</li>
									<li><Link to="/about">About</Link></li>
									<li><a href="https://angel.co/company/sleeperhq/jobs" target="_blank" rel="noopener noreferrer">Jobs</a></li>
									<li><a href="https://blog.sleeper.app/" target="_blank" rel="noopener noreferrer">Press</a></li>
								</ul>
						  	</Grid>
							<Grid item md={2} sm={6}>
								<ul className="footer-links">
									<li className="links-header">Product</li>
									<li><Link to="/bracket-mania">Bracket Mania</Link></li>
									<li><Link to="/fantasy-football">Fantasy Football</Link></li>
									<li><a href="https://itunes.apple.com/us/app/sleeper-app/id987367543?mt=8" rel="noreferrer noopener" target="_blank">iOS</a></li>
									<li><a href="https://play.google.com/store/apps/details?id=com.sleeperbot&hl=en_US" rel="noreferrer noopener" target="_blank">Android</a></li>
								</ul>
						  	</Grid>
							<Grid item md={2} sm={6}>
								<ul className="footer-links">
									<li className="links-header">Resources</li>
									<li><a href="https://support.sleeper.app/en/" rel="noreferrer noopener" target="_blank">Support</a></li>
									<li><a href="https://merch.sleeper.app/" rel="noreferrer noopener" target="_blank">Merch</a></li>
									<li><a href="https://docs.sleeper.app/" rel="noreferrer noopener" target="_blank">API</a></li>
									<li><a href="https://blog.sleeper.app/" target="_blank" rel="noopener noreferrer">Blog</a></li>
								</ul>
						  	</Grid>
							<Grid item md={2} sm={6}>
								<ul className="footer-links">
									<li className="links-header">More</li>
									<li><Link to="/privacy">Privacy</Link></li>
								</ul>
						  	</Grid>
							<Grid item md={4} sm={12}>
								<div className="footer-right">
									<img src='./images/sleeper-logo-footer.png' alt="Sleeper" className="footer-logo"/>
									<div className="footer-socials">
										<a href="https://twitter.com/SleeperHQ" target="_blank" rel="noopener noreferrer">
											<img src="./icons/twitter@3x.png" alt="Twitter" />
										</a>
										<a href="https://www.facebook.com/sleeperhq" target="_blank" rel="noopener noreferrer">
											<img src="./icons/facebook@3x.png" alt="Facebook"/>
										</a>
										<a href="https://www.instagram.com/playsleeper" target="_blank" rel="noopener noreferrer">
											<img src="./icons/instagram@3x.png" alt="Instagram"/>
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
