import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

class Footer extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
            <footer className="sleeper-footer">
					Footer
					<div className="sleeper-footer-main">
						<div className="main-primary">
							Sports
						</div>
						<div className="main-secondary">
							Download
						</div>
					</div>
					<div className="sleeper-footer-secondary">
						<Grid className="container" container>
							<Grid item xs={2}>
								Item
						  	</Grid>
							<Grid item xs={2}>
								Company
						  	</Grid>
							<Grid item xs={2}>
								Product
						  	</Grid>
							<Grid item xs={6}>
								Item
						  	</Grid>
						</Grid>
					</div>
				</footer>
        );
    }
}

export default Footer;
