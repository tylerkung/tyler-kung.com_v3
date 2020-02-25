import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			setTimeout(() => { 	window.scrollTo(0, 0); }, 400);
		}
	}

	render() {
		return null;
	}
}

export default withRouter(ScrollToTop);
