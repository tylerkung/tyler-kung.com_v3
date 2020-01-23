import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import City from "../../City";

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
            <div className="page-content page-home">
					<City/>
				</div>
        );
    }
}

export default withRouter(HomePage);
