import THREE from "../three";
import { BasketballStadiumObjects, FootballStadiumObjects, SoccerStadiumObjects } from '../stadiumObjs.js';

export default class PickHelper {
	constructor(){
		this.raycaster = new THREE.Raycaster();
		this.pickedObject = null;
		this.active = true;
		this.stadium = null;
	}
	pick(normalizedPosition, scene, camera, time){
		if (this.pickedObject){
			this.pickedObject = undefined
		}

		//cast a ray through the frustum
		this.raycaster.setFromCamera(normalizedPosition, camera);
		//get the list of objects the ray intersected
		const intersectedObjects = this.raycaster.intersectObjects(scene.children, true);
		if (intersectedObjects.length){
			this.pickedObject = intersectedObjects[0].object;
			this.stadium = this.applyStadiumHover(this.pickedObject.name);
			return this.stadium;
		} return;
	}
	click(){
		if (this.stadium){
			console.log("Clicked: " + this.stadium);
			return this.stadium;
		}
	}
	applyStadiumHover(name){
		if (this.active){
			if (BasketballStadiumObjects.includes(name)){
				return 'basketball';
			} else if (FootballStadiumObjects.includes(name)){
				return 'football';
			} else if (SoccerStadiumObjects.includes(name)){
				return 'soccer';
			} else{
				return '';
			}
		}
	}
	// applyStadiumClick(stadium){
	// 	this.active = false;
	// 	createjs.Tween.get(lightInts).to(
	// 		{mainLight: 0.01},
	// 		800, createjs.Ease.getPowOut(3));
	// 	switch(stadium){
	// 		case 'basketball':
	// 			viewBasketball();
	// 			basketballLightsOn();
	// 			break;
	// 		case 'football':
	// 			viewFootball();
	// 			footballLightsOn();
	// 			break;
	// 		case 'soccer':
	// 			viewSoccer();
	// 			soccerLightsOn();
	// 			break;
	// 	}
	// }
}
