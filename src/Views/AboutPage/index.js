import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class AboutPage extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
            <div>About Page</div>
        );
    }
}

export default withRouter(AboutPage);
