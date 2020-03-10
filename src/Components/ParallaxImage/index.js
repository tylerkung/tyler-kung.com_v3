import React, { Component } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

class ParallaxImage extends Component {
	constructor(props){
		super(props);

		this.state = {
		}
	}
	componentDidMount(){
		this.key = this.generateKey('sleep');
		this.image = this.renderComponent();
	}
	generateKey(pre){
		return `${pre}_${Math.floor(Math.random() * (9999 - 1) + 1)}`;
	}
	renderComponent(){
		return(
			<Controller>
				<Scene
					classToggle=''
					reverse={true}
					indicators={false}
					triggerHook={1}
					duration="200%"
				>
					<Timeline>
						<Tween
							position="0"
							from={{
								yPercent: this.props.offsetY[0],
							}}
							to={{
								yPercent: this.props.offsetY[1],
							}}
						>
							<img src={this.props.src} className={this.props.className} alt=''/>
						</Tween>
					</Timeline>
				</Scene>
			</Controller>
		)
	}
	render() {
		return (
			<div className="parallax-container" key={this.key}>
				{this.image}
			</div>
		);
	}
}

export default ParallaxImage;
