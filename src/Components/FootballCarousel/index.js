import React, { Component } from "react";

class FootballCarousel extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeLayer: 0,
			switching: ''
		}

		this.next = this.next.bind(this);
		this.layers = [
			{
				phone: './images/test-phone.png',
				video: '',
				elements: ['./icons/Basketball_Selected.png', './icons/Football_Selected.png']
			},
			{
				phone: './images/test-phone-2.png',
				video: '',
				elements: ['./icons/Basketball_Selected.png', './icons/Football_Selected.png']
			},
			{
				phone: './images/test-phone-3.png',
				video: '',
				elements: ['./icons/Basketball_Selected.png', './icons/Football_Selected.png']
			},
		];
	}

	next(){
		this.setState({switching: 'out'})
		setTimeout(() => {
			this.setState({
				activeLayer: (this.state.activeLayer + 1) % this.layers.length,
				switching: 'in'
			});
		}, 1000)
	}
	renderElements(){
		const elements = [];
		if (this.layers[this.state.activeLayer]){
			this.layers[this.state.activeLayer].elements.map((value, index)=>{
				elements.push(<img src={value} key={index} className={`element-${index}`}/>);
			});
		}
		return (
			<div className="f-layer layer-elements">
				{elements}
			</div>
		);
	}
	renderPhone(){
		return (
			<div className="f-layer layer-phone">
				<img src={this.layers[this.state.activeLayer].phone} />
			</div>
		)
	}
	renderVideo(){
		return(
			<div className="f-layer layer-video">
			</div>
		)
	}
	render(){
		return (
			<div className="football-carousel" onClick={this.next}>
				<div className="carousel-inner">
					<div className={`c-frame frame-${this.state.activeLayer} ${(this.state.switching === 'out') ? 'fade-out' : ''} ${(this.state.switching === 'in') ? 'fade-in' : ''}`}>
						{this.renderPhone()}
						{this.renderVideo()}
						{this.renderElements()}
					</div>
				</div>
			</div>
		);
	}
}

export default FootballCarousel;
