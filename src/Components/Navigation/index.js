import React, { Component } from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

class Navigation extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
            <nav className="sleeper-nav">
					<ul>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/football">Football</Link>
						</li>
						<li>
							<Link to="/basketball">Basketball</Link>
						</li>
						<li>
							<Link to="/styles">Styles</Link>
						</li>
					</ul>
				</nav>
        );
    }
}

export default Navigation;
