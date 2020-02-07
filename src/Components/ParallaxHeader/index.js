import React, { Component } from "react";

class ParallaxHeader extends Component {
	constructor(props){
		super(props);

		this.state = {
		}
		this.reveal = this.reveal.bind(this);
		this.parallax = this.parallax.bind(this);
	}
	componentDidMount(){
		// var header = document.getElementsByClassName('parallax-header')[0];
		// header.classList.remove('reveal');
		if (this.props.layers.length){
			this.ele = this.props.layers.map(({ image, amount }, index) => {
				let style = {
					backgroundImage: 'url('+image+')'
				}
				return <div className={`parallax-layer layer-${index}`} style={style} data-amount={amount}></div>
			});
		}
		window.addEventListener('scroll', this.parallax);
		// this.timeout = setTimeout(this.reveal, 400);
		// this.reveal();
	}
	componentWillUnmount(){
		// var header = document.getElementsByClassName('parallax-header')[0];
		// header.classList.remove('reveal');
		// console.log(header.classList);
		// clearTimeout(this.timeout);
	}
	reveal(){
		var header = document.getElementsByClassName('parallax-header')[0];
		header.classList.add('reveal');
	}
	parallax(event){
		var scroll = document.documentElement.scrollTop;
		const layers = document.getElementsByClassName('parallax-layer');
		for (let layer of layers){
			const dataAmount = layer.getAttribute('data-amount');
			if (dataAmount > 0 && dataAmount < 1){
				layer.style.transform = 'translate3d(0px,'+ dataAmount * scroll + 'px, 0px)';
			}
			if (dataAmount == 1){
				layer.style.position = 'fixed';
			}
		}
		// document.getElementsByClassName('header-content')[0].style.opacity = 1.1 - (0.001 * scroll);
		// document.getElementsByClassName('header-content')[0].style.transform = 'translate3d(0px,'+ 0.03	 * scroll + 'px, 0px)';
	}
	render(){
		return (
			<div className="parallax-header reveal">
				{this.ele}
			</div>
		)
	}
}

export default ParallaxHeader;
