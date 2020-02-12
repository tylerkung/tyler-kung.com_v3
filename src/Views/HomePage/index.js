import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NewCity from "../../Components/NewCity";

class HomePage extends Component {
	constructor(props){
		super(props);

		this.state = {
			loadScreenActive: false
		}
		this.onRouteChange = this.onRouteChange.bind(this);
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
		// this.initLoadScreen();
		// this.props.stopLoad();
		this.props.history.listen(this.onRouteChange.bind(this));
	}
	componentWillUnmount(){
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}
	onRouteChange(route){
		console.log(route);
	}
	render(){
		return (
			<div className="page-content page-home">
				<NewCity stopLoad={this.props.stopLoad}/>
			</div>
		);
	}
}

export default withRouter(HomePage);
