import React, { Component } from "react";
import {
   Link,
	NavLink
} from "react-router-dom";
import { TimelineMax as Timeline, Power3 } from 'gsap/dist/gsap';
import { Games } from '../../../../games.js';

class GamesList extends Component {
	constructor(props){
		 super(props);

		 this.state = {
			 buttonsActive: false,
			 lessActive: false,
			 moreActive: false,
			 position: 0
		 }

		 this.more = this.more.bind(this);
		 this.less = this.less.bind(this);
	}

	componentDidMount(){
		const total = Object.values(Games).filter(({active}) => active).length;
		if (total > 3){
			this.setState({
				buttonsActive: true,
				moreActive: true,
			});
		}
		this.ele = document.getElementsByClassName('games-list');
		this.list = this.ele[0];
		this.gamesList = document.getElementsByClassName('list-wrapper')[0];
		this.slideAmount = 480;
	}

	more(){
		const timeline = new Timeline({ paused: false });
		const listWidth = this.gamesList.offsetWidth - this.slideAmount;
		var slideAmount, newPosition;
		if (listWidth - (-1 * this.state.position) > this.slideAmount){
			newPosition = this.state.position - this.slideAmount;
		} else{
			newPosition = (-1 * listWidth);
			this.setState({moreActive: false})
		}
		timeline.to(this.gamesList, 1, {x: newPosition, ease: Power3.easeOut});
		this.setState({position: newPosition, lessActive: true})
	}
	less(){
		const timeline = new Timeline({ paused: false });
		const listWidth = this.gamesList.offsetWidth - this.slideAmount;
		var slideAmount, newPosition;
		if (this.state.position < -this.slideAmount){
			newPosition = this.state.position + this.slideAmount;
		} else{
			newPosition = 0;
			this.setState({lessActive: false})
		}
		timeline.to(this.gamesList, 1, {x: newPosition, ease: Power3.easeOut});
		this.setState({position: newPosition, moreActive: true})
	}

	renderGames(){
		const games = [];
		for (var game in Games) {
			const cur = Games[game];
			if (cur.active){
				games.push(<NavLink to={cur.link} key={game}>
					<div className='game-link'>
						<div className='game-graphic'>
							<img src={cur.footerGraphic} />
						</div>
						<div className='game-label'>
							{cur.name}
						</div>
					</div>
				</NavLink>);
			}
		}
		return games;
	}

	renderMore(){
		if (this.state.buttonsActive){
			return (
				<div className='list-buttons' id='list-buttons'>
					<div className={`less-games ${(this.state.lessActive) ? 'less-active' : ''}`} onClick={this.less}></div>
					<div className={`more-games ${(this.state.moreActive) ? 'more-active' : ''}`} onClick={this.more}></div>
				</div>
			);
		}
	}
	render(){
		return (
			<div className="games-list">
				<div className="list-wrapper">
					{this.renderGames()}
				</div>
				{this.renderMore()}
			</div>
		);
	}
}

export default GamesList;
