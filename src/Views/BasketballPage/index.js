import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SportNavigation from "../../Components/SportNavigation";

class BasketballPage extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
			  <div className="page-content page-basketball">
				  <div className="sport-header">
					  <img src="./images/inside-basketball.jpg" alt="Basketball Stadium"/>
				  </div>
				  <SportNavigation active="basketball"/>
				  <div className="sport-page">
				  </div>
			  </div>
        );
    }
}

export default withRouter(BasketballPage);
