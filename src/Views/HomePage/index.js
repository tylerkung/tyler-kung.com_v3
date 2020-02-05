import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import City from "../../Components/City";

class HomePage extends Component {
    constructor(props){
        super(props);

		  this.state = {
 			 loadScreenActive: false
 		 }
    }

	 initLoadScreen(){
		 this.timeoutId = setTimeout(function () {
			 this.setState({loadScreenActive: false});
	   }.bind(this), 2000);
	 }
	 // closeLoadScreen(){
	 // 	console.log("hello");
	 // 	this.setState({
	 // 		loadScreenActive: false
	 // 	});
	 // }
	 componentDidMount(){
		 this.initLoadScreen();
	 }
	 componentWillUnmount(){
		 if (this.timeoutId) {
				clearTimeout(this.timeoutId);
		  }
	 }

    render(){
        return (
            <div className="page-content page-home">
					<City/>
					<div className={'loading-screen ' + (this.state.loadScreenActive ? 'open' : 'close')}>
						<img src="https://sleepercdn.com/images/landing/v3/logos/header_light-5c99df9d0d1ba4c82fedb46b4e9328fe.png?vsn=d" alt='Sleeper'/>
					</div>
				</div>
        );
    }
}

export default withRouter(HomePage);
