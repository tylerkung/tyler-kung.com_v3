import React, { Component } from "react";

class ParallaxHeader extends Component {
	constructor(props){
		super(props);

		this.state = {
		}
		this.parallax = this.parallax.bind(this);
	}
	componentDidMount(){
		if (this.props.layers.length){
			this.ele = this.props.layers.map(({ image, amount }, index) => {
				let style = {
					backgroundImage: 'url('+image+')'
				}
				return <div className={`parallax-layer layer-${index}`} style={style} data-amount={amount}></div>
			});
		}
		window.addEventListener('scroll', this.parallax);
	}
	parallax(event){
		var scroll = document.documentElement.scrollTop;
		const layers = document.getElementsByClassName('parallax-layer');
		for (let layer of layers){
			const dataAmount = layer.getAttribute('data-amount');
			if (dataAmount > 0 && dataAmount < 1){
				layer.style.transform = 'translateY('+ dataAmount * scroll + 'px)';
			}
			if (dataAmount == 1){
				layer.style.position = 'fixed';
			}
		}
	}
	render(){
		return (
			<div className="parallax-header">
				{this.ele}
			</div>
		)
	}
}

export default ParallaxHeader;
