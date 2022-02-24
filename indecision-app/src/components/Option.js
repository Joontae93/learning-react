import React from 'react';

export default function Option(props) {
	return (
		<li className="option option__text">
			Option #{props.count}: {props.optionText} &nbsp;
			<button
				className="button button--link"
				onClick={(e) => {
					props.handleDeleteSingleOption(props.optionText);
				}}
			>
				Remove Option
			</button>
		</li>
	);
}
