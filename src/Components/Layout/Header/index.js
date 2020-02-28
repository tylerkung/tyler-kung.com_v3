import React, { Component } from "react";
import {
   Link,
	useRouteMatch
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
						<div className="sleeper-header-menu">
							<div className="btn btn-default btn-sm">Open App</div>
						</div>
					</div>
				</header>
        );
    }
}

export default Header;
