import React from 'react';

export default function Action(props) {
	return (
		<button disabled={!props.hasOptions} onClick={props.handleChoice}>
			What should I do?
		</button>
	);
}
