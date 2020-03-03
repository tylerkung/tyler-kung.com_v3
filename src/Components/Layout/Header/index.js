import React, { Component } from "react";
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
            <header className="sleeper-header">
					<div className="sleeper-header-container">
						<div className="sleeper-header-logo" onClick={this.props.goHome}>
							<img src="./images/Logo_letter_d_sleeper.png" alt="Sleeper Home Logo" />
						</div>
						<div className="sleeper-header-navigation">
							<ul className="nav">
								<li className="nav-link">
									Product
									<ul className="dropdown-nav">
										<Link to="/bracket-mania">
											<li className="nav-link">
												Bracket Mania
											</li>
										</Link>
										<Link to="/fantasy-football">
											<li className="nav-link">
												Fantasy Football
											</li>
										</Link>
									</ul>
								</li>
								<Link to="/about">
									<li className="nav-link">Company</li>
								</Link>
							</ul>
						</div>
						<div className="sleeper-header-menu">
							<div className="btn btn-secondary btn-sm">Login</div>
							<div className="btn btn-default btn-sm">Sign Up</div>
						</div>
					</div>
				</header>
        );
    }
}

export default Header;
