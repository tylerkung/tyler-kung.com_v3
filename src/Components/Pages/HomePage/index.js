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
					<h1>Header 1</h1>
					<h2>Header 2</h2>
					<h3>Header 3</h3>
					<h4>Header 4</h4>
				</div>
        );
    }
}

export default withRouter(HomePage);
