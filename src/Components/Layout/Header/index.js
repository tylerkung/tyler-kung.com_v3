import React, { Component } from "react";
import { Controller, Scene } from 'react-scrollmagic';

import {
   Link
} from "react-router-dom";


class Header extends Component {
	constructor(props){
		super(props);

		this.state = {
		}
	}

	render(){
		return (
			<Controller>
				<Scene
					classToggle='sticky'
					triggerElement={`main`}
					offset={100}
					triggerHook={0}
					reverse={true}
					indicators={false}
				>
					<header className={`sleeper-header`} id="sleeper-header">
						<div className="sleeper-header-container">
							<div className="sleeper-header-logo" onClick={this.props.goHome}>
								<img src="./images/Logo_letter_d_sleeper.png" alt="Sleeper Home Logo" />
							</div>
							<div className="sleeper-header-navigation">
								<ul className="nav">
									<li className="nav-link">
										Product
										<ul className="dropdown-nav">
											<li className="nav-link">
												<Link to="/bracket-mania">
													Bracket Mania
												</Link>
											</li>
											<li className="nav-link">
												<Link to="/fantasy-football">
													Fantasy Football
												</Link>
											</li>
										</ul>
									</li>
									<li className="nav-link">
										<Link to="/about">
											Company
										</Link>
									</li>
								</ul>
							</div>
							<div className="sleeper-header-menu">
								<div className="btn btn-secondary btn-sm">Login</div>
								<div className="btn btn-default btn-sm">Sign Up</div>
							</div>
						</div>
					</header>
				</Scene>
			</Controller>
		);
	}
}

export default Header;
