import React, { Component } from "react";
import { Controller, Scene } from 'react-scrollmagic';

class LayeredGraphic extends Component {
	constructor(props){
		super(props);

		this.state = {
		}
	}
	componentDidMount(){
		this.key = this.generateKey('sleep');
		this.getScrollController();
	}
	componentWillUnmount(){
		this.scrollMagicController = null;
	}
	renderElements(){
		const elements = [];
		if (this.props.elements) {
			this.props.elements.map((value, index) => {
				return elements.push(<img src={value} key={index} className={`element-${index}`} alt=''/>);
			});
			return (
				<div className="f-layer layer-elements">
					{elements}
				</div>
			);
		}
		return;
	}
	renderBackLayer(){
		return (
			<div className={`f-layer layer-back`}>
				<img src={this.props.back} alt="Phone"/>
			</div>
		)
	}
	renderMiddleLayer(){
		return(
			<div className="f-layer layer-middle">
				<picture>
					<source type="image/webp" srcSet={`${this.props.middle}.webp`} alt={this.props.middle}/>
					<img src={`${this.props.middle}.png`} alt={this.props.middle}/>
				</picture>
			</div>
		)
	}
	generateKey(pre){
		return `${pre}_${Math.floor(Math.random() * (9999 - 1) + 1)}`;
	}
	getScrollController(){
		this.scrollMagicController = (
			<Controller>
				<Scene
					classToggle='active'
					triggerElement={`#${this.key}`}
					offset={50}
					reverse={true}
				>
						<div className={`graphic-inner active`}>
							<div className={`c-frame layer-${this.props.imagePosition}`}>
								{this.renderBackLayer()}
								{this.renderElements()}
								{this.renderMiddleLayer()}
							</div>
						</div>
				</Scene>
			</Controller>
		)
	}
	render(){
		return (
			<div className={`layered-graphic ${this.props.className}`} id={this.key}>
				{this.scrollMagicController}
			</div>
		);
	}
}

export default LayeredGraphic;
