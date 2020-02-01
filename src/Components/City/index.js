import React, { Component } from "react";
import THREE from "./Three/three";
import { TimelineMax as Timeline, Power3 } from 'gsap/dist/gsap';

import { FBXLoader } from './Three/build/FBXLoader.js';
import { TGALoader } from './Three/build/TGALoader.js';
import { OrbitControls } from './Three/build/OrbitControls.js';
import { EffectComposer } from './Three/postprocessing/EffectComposer.js';
import { RenderPass } from './Three/postprocessing/RenderPass.js';
import { UnrealBloomPass } from './Three/postprocessing/UnrealBloomPass.js';
import { BasketballStadiumObjects, FootballStadiumObjects, SoccerStadiumObjects } from './Three/stadiumObjs.js';
import PickHelper from './Three/PickHelper';

const city_file = './models/for_tyler_layout_19.fbx';

var clock = new THREE.Clock();

var scene, camera, controls, pointLight, stats, canvas;
var composer, renderer, mixer;
var ferrisWheel, propeller, footballArrow;
var bballLightTarget;
var mintGlowMaterial, orangeGlowMaterial, purpleGlowMaterial, footballFloodLightMaterial, light1, basketballLight, footballLight, soccerLight;

var nightMode = true;
var lightInts = {};

if (!nightMode){
	lightInts = { // LIGHT MODE
		mainLight: 0.8,
		mainColor: 0xFFFFFF,
		secondLight: 0.3,
		ambientLight: 0.1,
		ambientColor: 0xFFFFFF,
		soccerStadiumIntensity: 1,
		basketballStadiumIntensity: 1,
		footballStadiumIntensity: 1,
		soccerLightIntensity: 0,
		basketballLightIntensity: 0,
		footballLightIntensity: 0,
		floodLightIntensity: 0,
		footballArrow: 0
	}
} else{
	lightInts = { // DARK MODE
		mainLight: 0.08,
		mainColor: 0xffffff,
		secondLight: 0.02,
		ambientLight: 0.02,
		ambientColor: 0x07227c,
		soccerStadiumIntensity: 0.1,
		basketballStadiumIntensity: 0.2,
		footballStadiumIntensity: 0.3,
		soccerLightIntensity: 0.008,
		basketballLightIntensity: 0.01,
		footballLightIntensity: 0.01,
		floodLightIntensity: 0.65,
		footballArrow: 0.2
	}
}
var params = {
	exposure: 0.05,
	bloomStrength: 0.2,
	bloomThreshold: 0,
	bloomRadius: 0
};


class City extends Component {
	constructor(props){
		super(props);

		this.state = {
			mixer: null,
		}
		this.animate = this.animate.bind(this);
		this.animateLights = this.animateLights.bind(this);
		this.arrowOn = this.arrowOn.bind(this);
		this.arrowOff = this.arrowOff.bind(this);
		this.getCanvasRelativePosition = this.getCanvasRelativePosition.bind(this);
		this.setPickPosition = this.setPickPosition.bind(this);
		this.clearPickPosition = this.clearPickPosition.bind(this);
		this.clickPickPosition = this.clickPickPosition.bind(this);

		this.viewFootball = this.viewFootball.bind(this);
		this.viewBasketball = this.viewBasketball.bind(this);
		this.moveCamera = this.moveCamera.bind(this);
		this.footballLightsOn = this.footballLightsOn.bind(this);
		this.pickposition = {x: 0, y: 0}

	}

	componentDidMount(){
		this.pickHelper = new PickHelper();
		this.pickPosition = {x: 0, y: 0};
		window.addEventListener('mousemove', this.setPickPosition);
		window.addEventListener('mouseout', this.clearPickPosition);
		window.addEventListener('mouseleave', this.clearPickPosition);
		window.addEventListener('click', this.clickPickPosition);
		//SCENE, CAMERA, RENDERER
		canvas = document.querySelector('#scene-sleeper');
		this.canvas = canvas;
		scene = new THREE.Scene();
		renderer = new THREE.WebGLRenderer({canvas, antialias: true});
		renderer.setPixelRatio( 1 );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.setClearColor(0x01081F);
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.gammaFactor = 2.2;
		renderer.gammaOutput = true;

		// CAMERA
		var zoomCamera = false;
		var width = 2;
		var height = 2;
		var near = 0.1;
		var far = 9;
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		var multiplier = 1.1;
		var factor = multiplier * windowWidth;

		this.camera = new THREE.OrthographicCamera(-windowWidth / factor, windowWidth / factor, windowHeight / factor, -windowHeight / factor, near, far);
		const defaultPosition = {
			x: 341.8,
			y: 275.87,
			z: 351.8
		}
		this.camera.position.set(defaultPosition.x, defaultPosition.y, defaultPosition.z);
		this.camera.scale.x = 100;
		this.camera.scale.y = 100;
		this.camera.scale.z = 100;
		this.camera.zoom = 0.6;
		this.cameraHelper = this.camera.clone();

		// CONTROLS
		controls = new OrbitControls( this.camera, renderer.domElement );
		controls.enableZoom = false;
		controls.enablePan = false;
		controls.enableRotate = false;
		controls.maxPolarAngle = 1.0584632133487624;
		controls.minPolarAngle = 1.0584632133487624;

		// LIGHTS
		// Light 1
		var sphere = new THREE.SphereBufferGeometry( 0.5, 16, 8 );
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

		// Basketball Light
		var basketballLight = new THREE.PointLight( 0xFF7A5A, lightInts.basketballLightIntensity, 0);
		basketballLight.position.set( 56.724, 42.230, -56.153 );
		basketballLight.decay = 30;
		// scene.add(basketballLight);

		var basketballSpotLight = new THREE.SpotLight( 0xFF7A5A, 0.5, 0);
		basketballSpotLight.position.set( 57.5, 42.230, -56.153 );
		var bballTarget = new THREE.Object3D();
		bballTarget.position.set(57.5, -20, -56.163);
		basketballSpotLight.target = bballTarget;
		basketballSpotLight.angle = Math.PI / 10;
		basketballSpotLight.penumbra = 0.6;
		// scene.add(bballTarget);
		// scene.add(basketballSpotLight);

		// Soccer LIGHTS
		var soccerLight = new THREE.PointLight( 0x6E7DF5, lightInts.soccerLightIntensity, 0);
		soccerLight.position.set( -91.691, 47.887, -8.561 );
		soccerLight.decay = 30;
		// scene.add(soccerLight);

		var soccerSpotLight = new THREE.SpotLight( 0x6E7DF5, 0.5, 0);
		soccerSpotLight.position.set( -91.691, 72.295, -8.799 );
		var soccerTarget = new THREE.Object3D();
		soccerTarget.position.set( -91.691, 22.295, -8.799 );
		soccerSpotLight.target = soccerTarget;
		soccerSpotLight.angle = Math.PI / 6;
		soccerSpotLight.penumbra = 1;
		// scene.add(soccerTarget);
		// scene.add(soccerSpotLight);


		// Football Lights
		this.footballLight = new THREE.PointLight( 0x45E8A7, lightInts.footballLightIntensity, 0);
		this.footballLight.position.set( 52.513, 47.887, 70.944 );
		this.footballLight.decay = 30;
		// scene.add(this.footballLight);

		var footballSpotLight = new THREE.SpotLight( 0xa2fcd8, 0.5, 0);
		footballSpotLight.position.set( 58.873, 32.141, 34.106 );
		// footballSpotLight.castShadow = true;
		var footballTarget = new THREE.Object3D();
		footballTarget.position.set( 58.873, 13.936, 73.456 );
		footballSpotLight.target = footballTarget;
		footballSpotLight.angle = Math.PI / 8;
		footballSpotLight.penumbra = 1;
		scene.add(footballTarget);
		scene.add(footballSpotLight);

		// shadowMap
		var tempGeometry = new THREE.PlaneBufferGeometry( 2000, 2000 );
		var planeMaterial = new THREE.ShadowMaterial();
		planeMaterial.opacity = 0.15;
		var plane = new THREE.Mesh(tempGeometry, planeMaterial);
		plane.rotation.x = - Math.PI / 2;
		plane.receiveShadow = true;
		plane.position.set(0, 5, 0);
		scene.add(plane);

		const defaultQ = this.camera.quaternion.clone();
		var currentQ = defaultQ;
		// createjs.Ticker.timingMode = createjs.Ticker.RAF;

		var manager = new THREE.LoadingManager();
		manager.onProgress = function ( item, loaded, total ) {
			console.log( item, loaded, total );
		};

		var renderScene = new RenderPass( scene, this.camera );
		composer = new EffectComposer( renderer );
		composer.addPass( renderScene );

		var onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};

		var onError = function ( e ) {
			console.error(e);
		};
		// var tgaLoader = new TGALoader();
		// var cautionTexture = tgaLoader.load('images/caution_tape_1024.tga');
		// LOADER
		this.loader = new FBXLoader(manager);
		this.loader.load( city_file, (object) => {
			scene.add( object );
			// Mesh contains self-intersecting semi-transparent faces, which display
			// z-fighting unless depthWrite is disabled.
			var light = object.getObjectByName( 'spotLight6' );
			light.intensity = 0.5;
			light.angle = 0.6;
			light.target = object.getObjectByName('Mai_Layout_04_nonstudentbig_guypSphere1');
			// core.material.depthWrite = false;

			object.traverse(function(child){
				if (child.isMesh){
					child.castShadow = true;
				}
			});

			var ufoGlow = object.getObjectByName('Mai_Layout_04_nonstudentufo_with_light_02ufo_with_lightufo_top');
			mintGlowMaterial = ufoGlow.material.clone();
			mintGlowMaterial.emissive = { r: 69/255, g: 232/255, b: 167/255 };
			mintGlowMaterial.emissiveIntensity = lightInts.footballStadiumIntensity;
			mintGlowMaterial.needsUpdate = true;
			var ufoGlowMaterial = mintGlowMaterial.clone();
			ufoGlowMaterial.emissiveIntensity = 0.6;
			ufoGlow.material = ufoGlowMaterial;
			object.getObjectByName('Mai_Layout_04_nonstudentufo_with_light_02ufo_with_lightufo_lights').material = ufoGlowMaterial;
			var footballStadiumGlow = object.getObjectByName('polySurface386');
			var footballFieldGlow = object.getObjectByName('polySurface32');
			footballFieldGlow.material.shininess = 10;
			footballStadiumGlow.material = mintGlowMaterial;
			var footballFloodLight = object.getObjectByName('pCylinder53');
			footballFloodLightMaterial = mintGlowMaterial.clone();
			footballFloodLightMaterial.emissive = { r: 120/255, g: 232/255, b: 190/255 };
			footballFloodLightMaterial.emissiveIntensity = lightInts.floodLightIntensity;
			footballFloodLight.material = footballFloodLightMaterial;
			object.getObjectByName('pCylinder54').material = footballFloodLightMaterial;
			object.getObjectByName('pCylinder55').material = footballFloodLightMaterial;
			object.getObjectByName('pCylinder56').material = footballFloodLightMaterial;
			object.getObjectByName('pCylinder57').material = footballFloodLightMaterial;
			object.getObjectByName('pCylinder58').material = footballFloodLightMaterial;


			var soccerGlow = object.getObjectByName('pTorus123');
			purpleGlowMaterial = soccerGlow.material.clone();
			purpleGlowMaterial.emissive = { r: 110/255, g: 125/255, b: 245/255 };
			purpleGlowMaterial.emissiveIntensity = lightInts.soccerStadiumIntensity;
			purpleGlowMaterial.shininess = 1;
			soccerGlow.material = purpleGlowMaterial;

			var bballGlow = object.getObjectByName('Mai_Layout_04_nonstudentpolySurface42');
			orangeGlowMaterial = bballGlow.material.clone();
			bballGlow.material.emissive = { r: 0, g: 0, b: 0 };
			orangeGlowMaterial.emissive = { r: 255/255, g: 122/255, b: 90/255 };
			orangeGlowMaterial.emissiveIntensity = lightInts.basketballStadiumIntensity;
			orangeGlowMaterial.shininess = 1;
			bballGlow.material = orangeGlowMaterial;
			// object.getObjectByName('pCube672').material = orangeGlowMaterial;
			// object.getObjectByName('pCube673').material = orangeGlowMaterial;
			object.getObjectByName('Mai_Layout_04_nonstudentpolySurface46').material = orangeGlowMaterial;
			object.getObjectByName('Mai_Layout_04_nonstudentpolySurface41').material = orangeGlowMaterial;
			object.getObjectByName('polySurface989').material = orangeGlowMaterial; //jumbotron
			object.getObjectByName('Mai_Layout_04_nonstudentpolySurface63').material = orangeGlowMaterial;
			object.getObjectByName('pTorus121').material = orangeGlowMaterial;
			object.getObjectByName('pTorus36').material = orangeGlowMaterial;

			// object.getObjectByName('polySurface764').material.color = { r: 1, g: 200, b: 1 };
			// object.getObjectByName('polySurface749').material.color = { r: 200, g: 1, b: 1 };

			// Orange Windows
			object.getObjectByName('polySurface764').material.emissiveIntensity = 0.2;

			object.getObjectByName('Mai_Layout_04_nonstudentpCylinder1').material.color = { r: 1, g: 1, b: 1 };
			object.getObjectByName('Mai_Layout_04_nonstudentpCylinder1').material.emissive = { r: 1, g: 1, b: 1 };
			object.getObjectByName('Mai_Layout_04_nonstudentpCylinder1').material.emissiveIntensity = 0;

			object.getObjectByName('Mai_Layout_04_nonstudentpolySurface14').receiveShadow = true;
			object.getObjectByName('Mai_Layout_04_nonstudentpolySurface79').receiveShadow = true;

			// object.getObjectByName('pTorus140').material.map = cautionTexture;

			footballArrow = object.getObjectByName('arrow_football');
			footballArrow.material = footballFloodLightMaterial.clone();
			footballArrow.material.emissive = { r: 60/255, g: 237/255, b: 152/255 };
			// this.setState({ferrisWheel: object.getObjectByName( 'group26' ), propeller: object.getObjectByName('pCube532')});
			// ferrisWheel = object.getObjectByName( 'group26' );
			// propeller = object.getObjectByName('pCube532');
			this.mixer = new THREE.AnimationMixer( object );
			var clip = object.animations[ 0 ];
			// mixer.clipAction( clip.optimize() ).play();
			setInterval(this.arrowOff, 1900);
			setInterval(this.arrowOn, 2800);
			setInterval(this.arrowOn, 5100);
			}, onProgress, onError );
		this.animate();
	}

	animate(time) {
		time *= 0.001;

		requestAnimationFrame( this.animate );
		const delta = clock.getDelta();
		// console.log(delta);
		// this.mixer.update( delta );
		// console.log(this.mixer);
		this.camera.updateProjectionMatrix();
		var stadium = this.pickHelper.pick(this.pickPosition, scene, this.camera, time);
		this.animateLights();
		composer.render();
	}

	animateLights(){
		// basketballLight.intensity = lightInts.basketballLightIntensity;
		// orangeGlowMaterial.emissiveIntensity = lightInts.basketballStadiumIntensity;
		this.footballLight.intensity = lightInts.footballLightIntensity;
		// mintGlowMaterial.emissiveIntensity = lightInts.footballStadiumIntensity;
		// footballFloodLightMaterial.emissiveIntensity = lightInts.floodLightIntensity;
		// soccerLight.intensity = lightInts.soccerLightIntensity;
		// purpleGlowMaterial.emissiveIntensity = lightInts.soccerStadiumIntensity;
		// light1.intensity = lightInts.mainLight;
		// footballArrow.material.emissiveIntensity = lightInts.footballArrow;
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
		switch(clickedStadium){
			case 'basketball':
				this.viewBasketball();
			// 	basketballLightsOn();
				break;
			case 'football':
				this.footballLightsOn();
				this.viewFootball();
				break;
			// case 'soccer':
			// 	viewSoccer();
			// 	soccerLightsOn();
			// 	break;
		}
	}

	footballLightsOn(){
		lightInts.footballStadiumIntensity = 1.5;
		lightInts.footballLightIntensity = 0.025;
		lightInts.floodLightIntensity = 2;
	}
	viewBasketball(){
		this.cameraHelper.lookAt( 84.433, 30.756, -48.331 );
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
		timeline.to(this.camera, 0.8, {zoom: zoom, ease: Power3.easeOut});
		timeline.to(this.camera.quaternion, 0.8, {x: target.x, y: target.y, z: target.z, ease: Power3.easeOut}, 0);
	}
	arrowOn() {
		lightInts.footballArrow = 1;
	}

	arrowOff() {
		lightInts.footballArrow = 0.2;
	}

	render(){
		return (
			<div className={"sleeper-city"}>
				<canvas id="scene-sleeper"></canvas>
			</div>
		);
	}
}

export default City;
