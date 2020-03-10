import React, { Component } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import Grid from '@material-ui/core/Grid';

class Testimonials extends Component {
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
				elements.push(<img src={value} key={index} className={`element-${index}`} alt=''/>);
			});
			return (
				<div className="f-layer layer-elements">
					{elements}
				</div>
			);
		}
		return;
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
					offset={100}
					reverse={true}
				>
					{(progress, event) => (
						<div className={`testimonial-container`}>
							<div className={`testimonial-content container`}>
								<Grid container spacing={10}>
									<Grid item md={2}>
									</Grid>
									<Grid item md={8}>
										{this.props.children}
									</Grid>
									<Grid item md={2}>
									</Grid>
								</Grid>
							</div>
							{this.renderTestimonials()}
						</div>
					)}
				</Scene>
			</Controller>
		)
	}
	renderTestimonials(){
		const testimonials = [];
		this.props.testimonials.map((ele, key) => {
			testimonials.push(
				<div className={`testimonial-item item-${key} direction-${ele.direction}`} key={key}>
					<div className='item-quote'>
						{ele.quote}
					</div>
					<div className='item-user'>
						<div className='user-portrait'>
							<img src={ele.image} alt='User Portrait'/>
						</div>
						<div className='user-name'>
							{ele.name}
						</div>
					</div>
				</div>
			)
		});
		return (
			<div className={`testimonials-list`}>
				{testimonials}
			</div>
		)
	}
	renderBackground(){
		if (this.props.background){
			return (
				<div className={`testimonial-path ${(this.props.background) ? 'background-' + this.props.background : ''}`}>
					<img src="./images/testimonial-round-path.png" alt=''/>
				</div>
			)
		}
	}
	render(){
		return (
			<div className={`testimonials-module ${this.props.className}`} id={this.key}>
				{this.scrollMagicController}
				{this.renderBackground()}
			</div>
		);
	}
}

export default Testimonials;
