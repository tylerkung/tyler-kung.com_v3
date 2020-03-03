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
			this.props.elements.map((value, index)=>{
				elements.push(<img src={value} key={index} className={`element-${index}`}/>);
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
				<img src={this.props.back}/>
			</div>
		)
	}
	renderMiddleLayer(){
		return(
			<div className="f-layer layer-middle">
				<img src={this.props.middle} />
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
					{(progress, event) => (
						<div className={`graphic-inner`}>
							<div className={`c-frame layer-${this.props.imagePosition}`}>
								{this.renderBackLayer()}
								{this.renderElements()}
								{this.renderMiddleLayer()}
							</div>
						</div>
					)}
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
