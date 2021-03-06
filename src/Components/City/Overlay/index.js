import React, { Component } from "react";
import {
   Link
} from "react-router-dom";

class Overlay extends Component {
	constructor(props){
		super(props);

		this.state = {
			classes: 'city-overlay',
			overlayOpen: false
		}

		this.returnSportContent = this.returnSportContent.bind(this);
		this.updateOverlay = this.updateOverlay.bind(this);
		this.openOverlay = this.openOverlay.bind(this);
		this.closeOverlay = this.closeOverlay.bind(this);
		this.exitStadium = this.exitStadium.bind(this);
		this.enterStadium = this.enterStadium.bind(this);
	}
	componentDidUpdate(prevProps){
		if (prevProps.sport !== this.props.sport){
			this.updateOverlay();
		}
	}
	render(){
		return (
			<div className={this.state.classes}>
				<div className='overlay-close' onClick={this.exitStadium}></div>
				<div className='overlay-inner'>
					{this.returnSportContent(this.state.sport)}
				</div>
			</div>
		);
	}

	returnSportContent(sport){
		switch(sport){
			case 'basketball':
				return (
					<div className='overlay-content'>
						<h1 className="txt-orange">Basketball</h1>
						<p>Compete with friends by drafting and managing your own team of NBA players. Create a league, invite some friends, and make sure to draft your teams before the season tips off on October 27.</p>
						<div className="sport-link">
							<Link to='/basketball' key='basketball'>
								<div className="btn btn-default btn-sm btn-orange" onClick={this.enterStadium}>Learn More</div>
							</Link>
						</div>
					</div>
				);
			case 'football':
				return (
					<div className='overlay-content'>
						<h1 className="txt-mint">Football</h1>
						<p>Compete with friends by drafting and managing your own team of NFL players. Create a league, invite some friends, and make sure to draft your teams before the season kicks off on September 12.</p>
						<div className="sport-link">
							<Link to='/football' key='football'>
								<div className="btn btn-default btn-sm" onClick={this.enterStadium}>Learn More</div>
							</Link>
						</div>
					</div>
				)
			default:
				return (
					<div className='overlay-content'>
						<h1>Basketball</h1>
						<p>Compete with friends by drafting and managing your own team of NBA players. Create a league, invite some friends, and make sure to draft your teams before the season tips off on October 27.</p>
						<div className="sport-link">
							<Link to='/basketball' key='basketball'>
								<div className="btn btn-default btn-sm btn-orange" onClick={this.enterStadium}>Learn More</div>
							</Link>
						</div>
					</div>
				)
		}
	}
	updateOverlay(){
		if (this.props.sport.length){
			this.setState({sport: this.props.sport});
			this.openOverlay(this.props.sport);
		}
	}
	openOverlay(sport){
		this.setState({
			classes: this.state.classes + ' ' + sport + '-active overlay-open',
			overlayOpen: true
		});
	}
	closeOverlay(){
		this.setState({
			classes: this.state.classes.replace('overlay-open', ''),
			overlayOpen: false
		});
		setTimeout(() => {
			this.setState({
				classes: 'city-overlay'
			});
		}, 600)
	}
	enterStadium(){
		this.props.enterStadium();
		this.closeOverlay();
	}
	exitStadium(){
		this.props.exitStadium();
		this.closeOverlay();
	}
}

export default Overlay;
