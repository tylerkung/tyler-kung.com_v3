import React from "react";
import {
   Link
} from "react-router-dom";

const routes = [
	{ sport: 'football', to: '/football', label: 'Football', classes: 'link-football sport-nav-link' },
	{ sport: 'basketball', to: '/basketball', label: 'Basketball', classes: 'link-basketball sport-nav-link' },
];

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
