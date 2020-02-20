import React, { Component } from "react";
import THREE from "./Three/three";
import { TimelineMax as Timeline, Power3 } from 'gsap/dist/gsap';
import insideWorker from 'offscreen-canvas/inside-worker';

import { FBXLoader } from './Three/build/FBXLoader.js';
import { GLTFLoader } from './Three/build/GLTFLoader.js';
import { OrbitControls } from './Three/build/OrbitControls.js';
import { EffectComposer } from './Three/postprocessing/EffectComposer.js';
import { RenderPass } from './Three/postprocessing/RenderPass.js';
import PickHelper from './Three/PickHelper';
import Overlay from './Overlay';
import { CityFile } from './Assets';

var clock = new THREE.Clock();

var scene, controls, canvas;
var composer, renderer;
var purpleGlowMaterial, light1, soccerLight;


var lightInts = {
	mainLight: 0.6,
	mainColor: 0xffffff,
	secondLight: 0,
	ambientLight: 0.8,
	ambientColor: 0xe3eaff
}


class NewCity extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeStadium: '',
			hoverStadium: false
		}
		this.animate = this.animate.bind(this);
		this.animateLights = this.animateLights.bind(this);
		this.getCanvasRelativePosition = this.getCanvasRelativePosition.bind(this);
		this.setPickPosition = this.setPickPosition.bind(this);
		this.clearPickPosition = this.clearPickPosition.bind(this);
		this.clickPickPosition = this.clickPickPosition.bind(this);
		this.enterStadium = this.enterStadium.bind(this);
		this.exitStadium = this.exitStadium.bind(this);
		this.viewFootball = this.viewFootball.bind(this);
		this.viewBasketball = this.viewBasketball.bind(this);
		this.moveCamera = this.moveCamera.bind(this);
		this.button = this.button.bind(this);
		this.pickposition = {x: 0, y: 0}
		this.ferrisWheel = null;
	}

	componentDidMount(){
		this.pickHelper = new PickHelper();
		this.pickHelper.active = true;
		this.pickPosition = {x: 0, y: 0};
		document.querySelector('#btn-function').addEventListener('click', this.button);
		window.addEventListener('mousemove', this.setPickPosition);
		window.addEventListener('mouseout', this.clearPickPosition);
		window.addEventListener('mouseleave', this.clearPickPosition);

		//SCENE, CAMERA, RENDERER
		canvas = document.querySelector('#scene-sleeper');
		canvas.addEventListener('keydown', event => {
			if (event.keyCode === 27 && this.state.activeStadium.length){
				this.refs.overlay.exitStadium();
			}
		})
		this.canvas = canvas;
		scene = new THREE.Scene();
		renderer = new THREE.WebGLRenderer({canvas, antialias: true});
		renderer.setPixelRatio( 1 );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.setClearColor(0xFFFFFF);
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.gammaFactor = 2.2;
		// renderer.gammaOutput = true;

		// CAMERA
		var zoomCamera = false;
		var near = 0.1;
		var far = 100;
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		var multiplier = 1.1;
		var factor = multiplier * windowWidth;

		this.camera = new THREE.PerspectiveCamera( 50, windowWidth/windowHeight, near, far);
		const defaultPosition = {x: -256.9441725985171, y: 317.2596352789266, z: 387.3251255603564}
		this.camera.position.set(defaultPosition.x, defaultPosition.y, defaultPosition.z);
		this.camera.scale.x = 100;
		this.camera.scale.y = 100;
		this.camera.scale.z = 100;
		this.camera.zoom = 2;
		this.cameraHelper = this.camera.clone();

		// CONTROLS
		controls = new OrbitControls( this.camera, renderer.domElement );
		// controls.enableZoom = false;
		// controls.enablePan = false;
		// controls.enableRotate = false;
		// controls.maxPolarAngle = 1.0584632133487624;
		// controls.minPolarAngle = 1.0584632133487624;

		// LIGHTS
		// Light 1
		// var sphere = new THREE.SphereBufferGeometry( 0.5, 16, 8 );
		light1 = new THREE.PointLight( lightInts.mainColor, lightInts.mainLight, 15, 2);
		light1.position.set( -24, 250, 12 );
		light1.castShadow = true;
		light1.shadow.radius = 2;
		scene.add( light1 );

		// Light 2
		var light2 = new THREE.PointLight( lightInts.ambientColor, lightInts.secondLight, 0);
		light2.position.set( 339, 200, 324 );
		scene.add( light2 );

		// Ambient Light
		scene.add( new THREE.AmbientLight( lightInts.ambientColor, lightInts.ambientLight ) );

		// shadowMap
		var tempGeometry = new THREE.PlaneBufferGeometry( 2000, 2000 );
		var planeMaterial = new THREE.ShadowMaterial();
		planeMaterial.opacity = 0.15;
		var plane = new THREE.Mesh(tempGeometry, planeMaterial);
		plane.rotation.x = - Math.PI / 2;
		plane.receiveShadow = true;
		plane.position.set(0, 3, 0);
		scene.add(plane);

		this.defaultQ = this.camera.quaternion.clone();

		var manager = new THREE.LoadingManager();
		manager.onProgress = function ( item, loaded, total ) {
			console.log( item, loaded, total );
		};

		var renderScene = new RenderPass( scene, this.camera );
		renderer.toneMappingExposure = 1;
		composer = new EffectComposer( renderer );
		composer.addPass( renderScene );
		// composer.addPass( bloomPass );

		var onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};

		var onError = function ( e ) {
			console.error(e);
		};


		// this.loader = new GLTFLoader();
		this.loader = new FBXLoader(manager);
	// 	this.loader.load( CityFile, (object) => {
	// 		object.scene.traverse(function(child){
	// 			if (child.isMesh){
	// 				child.castShadow = true;
	// 				child.material.shininess = 0;
	// 				child.material.metalness = 0;
	// 				child.material.roughness = 0;
	// 			}
	// 		});
	// 		scene.add( object.scene );
	// 		// var clip = object.animations[ 0 ];
	// 		this.animate();
	// 		// this.props.stopLoad();
	// 	});
	// }
	this.loader.load( CityFile, (object) => {
		object.traverse(function(child){
			if (child.isMesh){
				child.castShadow = true;
				child.material.shininess = 0;
				child.material.metalness = 0;
				child.material.roughness = 0;
			}
		});
		scene.add( object );
		// var clip = object.animations[ 0 ];
		this.animate();
		// this.props.stopLoad();
	});
}

	componentWillUnmount(){
		this.setState({activeStadium: null});
		cancelAnimationFrame(this.frameId);
	}

	//ANIMATE
	animate(time) {
		time *= 0.001;

		this.frameId = requestAnimationFrame( this.animate );
		const delta = clock.getDelta();
		// this.mixer.update( delta );
		// this.ferrisWheel.rotation.z += .002;
		// this.propeller.rotation.y += 0.4;
		this.camera.updateProjectionMatrix();
		var stadium = this.pickHelper.pick(this.pickPosition, scene, this.camera, time);
		// this.hoverLights(stadium);
		// this.animateLights();
		composer.render();
	}

	animateLights(){
	}

	getCanvasRelativePosition(event) {
		const rect = canvas.getBoundingClientRect();
		return {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		};
	}

	setPickPosition(event) {
		const pos = this.getCanvasRelativePosition(event);
		this.pickPosition.x = (pos.x / canvas.clientWidth ) *  2 - 1;
		this.pickPosition.y = (pos.y / canvas.clientHeight) * -2 + 1;  // note we flip Y
		this.mouseX = this.pickPosition.x;
		this.mouseY = this.pickPosition.y;
	}

	clearPickPosition(){
		// unlike the mouse which always has a position
		// if the user stops touching the screen we want
		// to stop picking. For now we just pick a value
		// unlikely to pick something
		this.pickPosition.x = -100000;
		this.pickPosition.y = -100000;
	}
	clickPickPosition(event){
		var clickedStadium = this.pickHelper.click();
		// this.pickHelper.active = false;
		// const timeline = new Timeline({ paused: false });
		// timeline.to(lightInts, 0.8, {mainLight: 0.01, ease: Power3.easeOut});
		if (!this.state.activeStadium.length){
			switch(clickedStadium){
				case 'basketball':
					this.setState({activeStadium: clickedStadium});
					this.viewBasketball();
					this.basketballLightsOn();
					break;
				case 'football':
					this.setState({activeStadium: clickedStadium});
					this.footballLightsOn();
					this.viewFootball();
					break;
				// case 'soccer':
				// 	viewSoccer();
				// 	soccerLightsOn();
				// 	break;
				default:
					break;
			}
		}
	}

	enterStadium(){
		const timeline = new Timeline({ paused: false });
		timeline.to(this.camera, 1, {zoom: 1.4, ease: Power3.easeOut});
	}
	exitStadium(){
		setTimeout(() => {
			this.setState({activeStadium: '', hoverStadium: false});
		}, 600)
		this.moveCamera(this.defaultQ, 0.6);
		this.lightsOff();
	}
	viewBasketball(){
		this.cameraHelper.lookAt( 82.433, 30.756, -48.331 );
		var targetQ = this.cameraHelper.quaternion.clone();
		this.moveCamera(targetQ, 1.2);
	}
	viewFootball(){
		this.cameraHelper.lookAt( 18.731, 30.756, 68.805 );
		var targetQ = this.cameraHelper.quaternion.clone();
		this.moveCamera(targetQ, 1);
	}
	moveCamera(target, zoom){
		const timeline = new Timeline({ paused: false });
		timeline.to(this.camera, 1, {zoom: zoom, ease: Power3.easeOut});
		timeline.to(this.camera.quaternion, 1, {x: target.x, y: target.y, z: target.z, ease: Power3.easeOut}, 0);
	}

	hoverLights(stadium){

	}

	button(){
		console.log(this.camera.position);
	}

	render(){
		return (
			<div className={`sleeper-city ${(this.state.activeStadium) ? "overlay-active" : ""}${(this.state.hoverStadium && !this.state.activeStadium) ? "stadium-hover" : ""}`}>
				<canvas id="scene-sleeper"></canvas>
				<button id="btn-function">Click</button>
				<Overlay ref="overlay" sport={this.state.activeStadium} enterStadium={this.enterStadium} exitStadium={this.exitStadium}></Overlay>
			</div>
		);
	}
}

export default NewCity;
