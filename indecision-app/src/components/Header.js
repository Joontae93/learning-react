import React from 'react';

/** This is a stateless, functional component. These are faster and easier to debug than class-based Components. */
export default function Header(props) {
	return (
		<header>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</header>
	);
}

Header.defaultProps = {
	title: 'Indecision App',
};
