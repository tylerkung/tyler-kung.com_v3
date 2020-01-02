import React, { Component } from "react";


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
						<div className="sleeper-header-logo">
							Sleeper
						</div>
						<div className="sleeper-header-menu">
							Menu
						</div>
					</div>
				</header>
        );
    }
}

export default Header;
