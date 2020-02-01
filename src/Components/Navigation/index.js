import React from "react";
import {
   Link
} from "react-router-dom";

const routes = [
	{ to: '/about', label: 'About' },
	{ to: '/football', label: 'Football' },
	{ to: '/basketball', label: 'Basketball' },
	{ to: '/styles', label: 'Styles' }
];

const Navigation = () => {
	const links = routes.map(({ to, label }) => {
		return <li><Link to={to} key={to}>{label}</Link></li>
	})
	return (
		<nav className="sleeper-nav">
			<ul>{links}</ul>
		</nav>
	)
}

export default Navigation;
