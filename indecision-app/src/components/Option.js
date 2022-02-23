import React from 'react';

export default function Option(props) {
	return (
		<li>
			Option: {props.optionText} &nbsp;
			<button
				onClick={(e) => {
					props.handleDeleteSingleOption(props.optionText);
				}}
			>
				Remove Option
			</button>
		</li>
	);
}
