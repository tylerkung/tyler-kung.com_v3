import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '../../Components/Card';


class StylesPage extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
			  <div className="page-content page-styles">
				  <div className="sport-header">
					  <img src="./images/inside-football.png"/>
				  </div>
				  <div className="sport-navigation">
				  </div>
				  <div className="sport-page">
					<div className="layout layout-secondary-color layout-slant-down">
						<div className="container">
							<h1 className="txt-center">Styles</h1>
							<h2>Header 2</h2>
							<h3>Header 3</h3>
							<h4>Header 4</h4>
						</div>
					</div>
					<div className="layout layout-main-color layout-rounded-bottom">
						<div className="container">
							<button className="btn btn-default">Sleeper
							</button>
							<button className="btn btn-default btn-lg">Sleeper
							</button>
							<button className="btn btn-default btn-sm">Sleeper
							</button>
							<p>
								<button className="btn btn-default btn-orange btn-sm">Sleeper
								</button>
							</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							<Card wide><Grid container spacing={3}>
								<Grid item xs={12}>
									<h2>2 Column - Wide</h2>
								</Grid>
								<Grid item md={6}>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</Grid>
								<Grid item md={6}>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</Grid>
							</Grid></Card>
							<Grid container spacing={3}>
								<Grid item md={4}>
									<Card>
										<h4>3 Column</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</Card>
								</Grid>
								<Grid item md={4}>
									<Card>
										<h4>3 Column</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</Card>
								</Grid>
								<Grid item md={4}>
									<Card>
										<h4>3 Column</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</Card>
								</Grid>
							</Grid>
						</div>
					</div>
					<div className="layout layout-width-image">
						<img src="https://images.unsplash.com/photo-1577949098254-1ad7b1b526eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
					</div>
					<div className="layout layout-secondary-color layout-rounded-top layout-slant-down">
					</div>
					<div className="layout layout-main-color layout-no-shadow layout-slant-down">
					</div>
					<div className="layout layout-secondary-color layout-no-shadow">
					</div>
				</div>
				</div>
        );
    }
}

export default withRouter(StylesPage);
