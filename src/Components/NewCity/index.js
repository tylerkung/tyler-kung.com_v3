import React, { Component } from "react";
import THREE from "./Three/three";
import { TimelineMax as Timeline, Power3 } from 'gsap/dist/gsap';

import { FBXLoader } from './Three/build/FBXLoader.js';
// import { GLTFLoader } from './Three/build/GLTFLoader.js';
import { OrbitControls } from './Three/build/OrbitControls.js';
// import { EffectComposer } from './Three/postprocessing/EffectComposer.js';
// import { RenderPass } from './Three/postprocessing/RenderPass.js';
import PickHelper from './Three/PickHelper';
import Overlay from './Overlay';
import { CityFile } from './Assets';

var clock = new THREE.Clock();

var scene, controls, canvas;
var light1;


var lightInts = {
	mainLight: 0.6,
	mainColor: 0xf5f6fa,
	secondLight: 0.1,
	ambientLight: 0.8,
	ambientColor: 0xE4E9F5
}


class NewCity extends Component {
	constructor(props){
		super(props);

		this.state = {
			activeStadium: '',
			hoverStadium: ''
		}
		this.animate = this.animate.bind(this);
		this.getCanvasRelativePosition = this.getCanvasRelativePosition.bind(this);
		this.setPickPosition = this.setPickPosition.bind(this);
		this.clearPickPosition = this.clearPickPosition.bind(this);
		this.clickPickPosition = this.clickPickPosition.bind(this);
		this.resize = this.resize.bind(this);
		this.enterStadium = this.enterStadium.bind(this);
		this.exitStadium = this.exitStadium.bind(this);
		this.moveCamera = this.moveCamera.bind(this);
		this.viewBasketball = this.viewBasketball.bind(this);
		this.viewFootball = this.viewFootball.bind(this);
		this.pickposition = {x: 0, y: 0}
		this.ferrisWheel = null;
		this.zoom = 0;
		this.cursors = [{
			sport: 'basketball',
			name: 'Bracket Mania',
			click: this.viewBasketball
		},{
			sport: 'football',
			name: 'Fantasy Football',
			click: this.viewFootball
		}];
		this.camera = null;
		this.renderer = null;
		this.composer = null;
	}

	componentDidMount(){
		this.pickHelper = new PickHelper();
		this.pickHelper.active = true;
		this.pickPosition = {x: 0, y: 0};
		window.addEventListener('resize', this.resize);
		window.addEventListener('mousemove', this.setPickPosition);
		window.addEventListener('mouseout', this.clearPickPosition);
		window.addEventListener('mouseleave', this.clearPickPosition);

		//SCENE, CAMERA, RENDERER
		canvas = document.querySelector('#scene-sleeper');
		window.addEventListener('keydown', event => {
			if (event.keyCode === 27 && this.state.activeStadium.length){
				this.refs.overlay.exitStadium();
			}
		});
		canvas.addEventListener('click', this.clickPickPosition);
		this.canvas = canvas;
		scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer({canvas, antialias: true});
		this.renderer.setPixelRatio( 1 );
		this.renderer.setClearColor(0xB4E8FF);
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.renderer.gammaFactor = 2.2;
		// this.renderer.gammaOutput = true;

		// CAMERA
		var near = 0.1;
		var far = 15;
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight + 175;
		var multiplier = 1.1;
		this.factor = multiplier * windowWidth;

		this.camera = new THREE.PerspectiveCamera( 25, windowWidth/windowHeight, near, far);
		this.defaultPosition = {x: -326.162, y: 317.259, z: 331.147}
		this.camera.position.set(this.defaultPosition.x, this.defaultPosition.y, this.defaultPosition.z);
		this.camera.scale.x = 100;
		this.camera.scale.y = 100;
		this.camera.scale.z = 100;
		this.camera.zoom = 1.4;
		this.cameraHelper = this.camera.clone();

		// CONTROLS
		controls = new OrbitControls( this.camera, this.renderer.domElement );
		controls.enableZoom = false;
		controls.enablePan = false;
		controls.enableRotate = false;
		controls.keyPanSpeed = 1;
		controls.target.set(-12, 0, -12);
		controls.maxPolarAngle = 0.972;
		controls.minPolarAngle = 0.972;
		controls.update();
		// LIGHTS
		// Light 1
		// var sphere = new THREE.SphereBufferGeometry( 0.5, 16, 8 );
		light1 = new THREE.PointLight( lightInts.mainColor, lightInts.mainLight, 15, 2);
		light1.position.set( -24, 300, 12 );
		light1.castShadow = true;
		light1.shadow.radius = 2;
		scene.add( light1 );

		// Light 2
		// var light2 = new THREE.PointLight( lightInts.ambientColor, lightInts.secondLight, 0);
		// light2.position.set( 339, 200, 324 );
		// scene.add( light2 );

		// Ambient Light
		scene.add( new THREE.AmbientLight( lightInts.ambientColor, lightInts.ambientLight ) );

		// shadowMap
		var tempGeometry = new THREE.PlaneBufferGeometry( 500, 500 );
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

		// var renderScene = new RenderPass( scene, this.camera );
		this.renderer.toneMappingExposure = 1;
		// this.composer = new EffectComposer( this.renderer );
		// this.composer.addPass( renderScene );
		// this.renderer.render(scene, this.camera);
		// this.composer.addPass( bloomPass );

		this.resize();

		// var onProgress = function ( xhr ) {
		// 	if ( xhr.lengthComputable ) {
		// 		var percentComplete = xhr.loaded / xhr.total * 100;
		// 		console.log( Math.round(percentComplete, 2) + '% downloaded' );
		// 	}
		// };
		//
		// var onError = function ( e ) {
		// 	console.error(e);
		// };

		this.loader = new FBXLoader(manager);
		this.loader.load( CityFile, (object) => {
			object.traverse(function(child){
				if (child.isMesh){
					child.castShadow = true;
					if (child.material.type === "MeshPhongMaterial"){
						child.material.shininess = 0;
						child.material.metalness = 0;
						child.material.roughness = 0;
					}
				}
			});

			const textures = {};
			textures.sleeper = new THREE.TextureLoader().load('https://sleepercdn.com/downloads/webtest/sleeper-billboard-4.png');
			textures.sleeper_2 = new THREE.TextureLoader().load('https://sleepercdn.com/downloads/webtest/sleeper-billboard-3.png');
			textures.sleeper_bm = new THREE.TextureLoader().load('https://sleepercdn.com/downloads/webtest/bracket-mania-billboard.png');
			textures.hero = new THREE.TextureLoader().load('https://sleepercdn.com/downloads/webtest/sleeper-billboard-hero.png');
			textures.juju = new THREE.TextureLoader().load('https://sleepercdn.com/downloads/webtest/juju.png');
			for (var texture in textures){
				textures[texture].offset.x = -1.5;
				textures[texture].repeat.set(4, 4);
				textures[texture].wrapS = THREE.ClampToEdgeWrapping;
				textures[texture].wrapT = THREE.RepeatWrapping;
				textures[texture].anisotropy = this.renderer.capabilities.getMaxAnisotropy();
			}

			var signMaterial = object.getObjectByName('billboard_03').material.clone();
			signMaterial.map = textures.sleeper;
			signMaterial.emissive = {r: 1, g: 1, b: 1};
			signMaterial.emissiveIntensity = 0.35;

			var sleeperSign = signMaterial.clone();
			sleeperSign.map = textures.sleeper;
			var sleeperSign_2 = signMaterial.clone();
			sleeperSign_2.map = textures.sleeper_2;
			var sleeperSign_BM = signMaterial.clone();
			sleeperSign_BM.map = textures.sleeper_bm;
			var heroSign = signMaterial.clone();
			heroSign.map = textures.hero;
			var jujuSign = signMaterial.clone();
			jujuSign.map = textures.juju;

			object.getObjectByName('billboard_01').material = sleeperSign_2;
			object.getObjectByName('billboard_03').material = heroSign;
			object.getObjectByName('billboard_08').material = sleeperSign_2;
			object.getObjectByName('billboard_04').material = sleeperSign_BM;
			object.getObjectByName('billboard_05').material = sleeperSign;
			object.getObjectByName('billboard_09').material = jujuSign;

			var ocean = object.getObjectByName('pPlane1').material;
			ocean.opacity = 0.9;
			ocean.shininess = 0.8;
			ocean.metalness = 0.8;
			ocean.roughness = 0.8;
			ocean.transparent = true;
			console.log(ocean);
			// object.getObjectByName('sign_05').material = signMaterial;
			// object.getObjectByName('sign_06').material = signMaterial;
			this.ferrisWheel = object.getObjectByName('ferris_wheel');
			this.propeller = object.getObjectByName('pCube736');
			this.mixer = new THREE.AnimationMixer( object );
			var clip = object.animations[ 0 ];
			this.mixer.clipAction( clip.optimize() ).play();
			scene.add( object );
			this.animate();
			this.props.stopLoad();
		});
	}

	componentWillUnmount(){
		// this.setState({activeStadium: null});
		cancelAnimationFrame(this.frameId);
	}
	//ANIMATE
	animate(time) {
		time *= 0.001;
		this.frameId = requestAnimationFrame( this.animate );
		const delta = clock.getDelta();
		this.mixer.update( delta );
		this.ferrisWheel.rotation.z += .002;
		this.propeller.rotation.y += 0.4;
		var stadium = this.pickHelper.pick(this.pickPosition, scene, this.camera, time);
		this.hoverStadium(stadium);
		this.camera.updateProjectionMatrix();
		this.renderer.render(scene, this.camera);
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
		this.pickPosition.y = (pos.y / canvas.clientHeight) * -2 + 1;  // flip Y
		this.mouseX = this.pickPosition.x;
		this.mouseY = this.pickPosition.y;
		// const scale = 1;
		// if (!this.state.activeStadium.length){
		// 	this.camera.position.set(this.defaultPosition.x + (this.mouseX * scale), this.defaultPosition.y + (this.mouseY * scale), this.defaultPosition.z + (this.mouseX * scale));
		// }
		// if (this.state.hoverStadium === 'football'){
		// 	const cursor = document.getElementsByClassName('cursor-football')[0];
		// 	// cursor.style.position = 'fixed';
		// 	cursor.style.left = pos.x - 50 + 'px';
		// 	cursor.style.top = pos.y - 50 + 'px';
		// 	console.log(cursor);
		// } else if(this.state.hoverStadium === 'basketball'){
		// 	const cursor = document.getElementsByClassName('cursor-basketball')[0];
		// 	// cursor.style.position = 'fixed';
		// 	cursor.style.left = pos.x - 50 + 'px';
		// 	cursor.style.top = pos.y - 50 + 'px';
		// 	console.log(cursor);
		// }
		// this.camera.updateProjectionMatrix();
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
		if (!this.state.activeStadium.length){
			switch(clickedStadium){
				case 'basketball':
					this.viewBasketball();
					break;
				case 'football':
					this.viewFootball();
					break;
				case 'soccer':
					// this.setState({activeStadium: clickedStadium});
					// this.viewSoccer();
					break;
				default:
					break;
			}
		}
	}
	hoverStadium(stadium){
		if (!this.state.activeStadium){
			switch (stadium){
				case 'basketball':
					this.setState({hoverStadium: 'basketball'});
					break;
				case 'football':
					this.setState({hoverStadium: 'football'});
					break;
				case 'soccer':
					// this.setState({hoverStadium: 'soccer'});
					break;
				default:
					this.setState({hoverStadium: ''});
					break;
			}
		}
	}
	enterStadium(){
		const timeline = new Timeline({ paused: false });
		timeline.to(this.camera, 1, {zoom: 2.4, ease: Power3.easeOut});
	}
	exitStadium(){
		setTimeout(() => {
			this.setState({activeStadium: '', hoverStadium: ''});
		}, 600)
		this.moveCamera(this.defaultQ, this.zoom);
		// this.lightsOff();
	}
	viewBasketball(){
		this.setState({activeStadium: 'basketball'});
		this.cameraHelper.lookAt( -54, 9.7, 1 );
		var targetQ = this.cameraHelper.quaternion.clone();
		this.moveCamera(targetQ, 1.8);
	}
	viewFootball(){
		this.setState({activeStadium: 'football'});
		this.cameraHelper.lookAt( -12.5, 9.7, 26.6 );
		var targetQ = this.cameraHelper.quaternion.clone();
		this.moveCamera(targetQ, 2.0);
	}
	viewSoccer(){
		this.setState({activeStadium: 'soccer'});
		this.cameraHelper.lookAt( 12.7, 17.5, -45.1 );
		var targetQ = this.cameraHelper.quaternion.clone();
		this.moveCamera(targetQ, 2.2);
	}
	moveCamera(target, zoom){
		const timeline = new Timeline({ paused: false });
		timeline.to(this.camera, 1, {zoom: zoom, ease: Power3.easeOut});
		timeline.to(this.camera.quaternion, 1, {x: target.x, y: target.y, z: target.z, ease: Power3.easeOut}, 0);
	}
	renderCursors(){
		const cursors = []
		this.cursors.map((value, index) => {
			return cursors.push(<div className={`cursor cursor-${value.sport}`} onClick={value.click} key={index}>
				<div className={`cursor-icon`}></div>
				<div className='cursor-label'>{value.name}</div>
				</div>);
		});
		return cursors;
	}
	resize() {
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight + 175;
		this.camera.aspect = windowWidth / windowHeight;
		this.renderer.setSize( windowWidth, windowHeight );
		this.camera.left = -windowWidth / this.factor;
		this.camera.right = windowWidth / this.factor;
		this.camera.top = windowHeight / this.factor;
		this.camera.bottom = -windowHeight / this.factor;
		this.zoom = 1.4 - (1200/windowWidth * 0.35);
		this.camera.zoom = this.zoom;
		// this.camera.updateProjectionMatrix();

		this.renderer.setSize( windowWidth, windowHeight );
		// this.composer.setSize( windowWidth, windowHeight );
	};
	render(){
		return (
			<div className={`sleeper-city ${(this.state.activeStadium) ? "overlay-active" : ""}${(this.state.hoverStadium === 'basketball' && !this.state.activeStadium) ? "basketball-hover" : ""}${(this.state.hoverStadium === 'football' && !this.state.activeStadium) ? "football-hover" : ""}${(this.state.hoverStadium === 'soccer' && !this.state.activeStadium) ? "soccer-hover" : ""}`}>
				<canvas id="scene-sleeper"></canvas>
				<Overlay ref="overlay" sport={this.state.activeStadium} enterStadium={this.enterStadium} exitStadium={this.exitStadium}></Overlay>
				{this.renderCursors()}
			</div>
		);
	}
}

export default NewCity;
