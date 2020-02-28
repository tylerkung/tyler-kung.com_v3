import React from "react";
import {
   Link,
	NavLink
} from "react-router-dom";

const routes = [
	{ sport: 'football', to: '/football', label: 'Football', classes: 'link-football' },
	{ sport: 'basketball', to: '/basketball', label: 'Basketball', classes: 'link-basketball' },
];

const SportNavigation = (props) => {
	const links = routes.map(({ sport, to, label, classes }) => {
		if (props.active === sport) classes += ' active';
		return <NavLink to={to} key={to} className='sport-nav-link'><li className={classes}>{label}</li></NavLink>
	});
	return (
		<div className={`sport-nav ${props.active}-active`}>
			<nav className="">
				<ul>{links}</ul>
			</nav>
		</div>
	)
}

export default SportNavigation;
