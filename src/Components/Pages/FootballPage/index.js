import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class FootballPage extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
            <div>Football Page</div>
        );
    }
}

export default withRouter(FootballPage);
