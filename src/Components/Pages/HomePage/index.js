import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
            <div className="page-content page-home">Home Page

				</div>
        );
    }
}

export default withRouter(HomePage);
