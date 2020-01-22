import React, { Component } from "react";

class Card extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return (
            <div className={"card" + (this.props.wide ? ' wide' : '')}>
					{this.props.children}
				</div>
        );
    }
}

export default Card;
