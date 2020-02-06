import React from "react";
import {
   Link
} from "react-router-dom";

const routes = [
	{ sport: 'football', to: '/football', label: 'Football', classes: 'link-football sport-nav-link' },
	{ sport: 'basketball', to: '/basketball', label: 'Basketball', classes: 'link-basketball sport-nav-link' },
];

const Basketball = ({ stroke }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275.02 275.02" stroke={ stroke } fill="transparent">
		<title>Asset 2</title>
		<g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path d="M137.35,0V20h0a118.63,118.63,0,0,1,12.19.63A117.5,117.5,0,0,1,137.68,255a118.68,118.68,0,0,1-12.2-.63A117.5,117.5,0,0,1,137.34,20V0m0,0a137.51,137.51,0,0,0-13.91,274.29,139.94,139.94,0,0,0,14.25.73A137.51,137.51,0,0,0,151.59.73,139.94,139.94,0,0,0,137.34,0Z"/><path class="cls-1" d="M248,65.14S188.36,204.77,20.86,201.4"/><path class="cls-2" d="M74.07,36S75.57,207,179.62,250.92"/><path class="cls-1" d="M173,17s-3.57,39.85-17.31,75.63c0,0-30.92,55.61-16.69,83.37,26,50.79,121-4,121-4"/><path class="cls-1" d="M17.07,101.49s11.3,46.4,35.05,59.9,35.36,33.48,35.59,33.16,10.12,20.81-5.6,56.38"/></g></g>
	</svg>
);

const SportNavigation = (props) => {
	const links = routes.map(({ sport, to, label, classes }) => {
		if (props.active === sport) classes += ' active';
		return <li className={classes}><Link to={to} key={to}>{label}</Link></li>
	});
	return (
		<nav className="sport-nav container">
			<ul>{links}</ul>
		</nav>
	)
}

export default SportNavigation;
