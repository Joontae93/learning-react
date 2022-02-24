import React from 'react';

/** This is a stateless, functional component. These are faster and easier to debug than class-based Components. */
export default function Header(props) {
	return (
		<header className="header">
			<div className="container">
				<h1 className="header__title">{props.title}</h1>
				{props.subtitle && (
					<h2 className="header__subtitle">{props.subtitle}</h2>
				)}
			</div>
		</header>
	);
}

Header.defaultProps = {
	title: 'Indecision App',
};
