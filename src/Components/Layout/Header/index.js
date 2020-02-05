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
					<div className="sleeper-header-container container">
						<div className="sleeper-header-logo">
							<Link to="/">
								<img src="https://sleepercdn.com/images/landing/v3/logos/header_light-5c99df9d0d1ba4c82fedb46b4e9328fe.png?vsn=d" alt="Sleeper Home Logo" />
							</Link>
						</div>
						<div className="sleeper-header-menu">
							<div className="btn btn-default btn-sm">Open App</div>
						</div>
					</div>
				</header>
        );
    }
}

export default Header;
