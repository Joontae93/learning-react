import React from 'react';
import Option from './Option';

export default function Options(props) {
	return (
		<section>
			{props.options.length === 0 && <p>Add an option to get started.</p>}
			<ul>
				{props.options.map((option, i) => (
					<Option
						optionText={option}
						key={i}
						handleDeleteSingleOption={props.handleDeleteSingleOption}
					/>
				))}
			</ul>
			<button onClick={props.handleDeleteAllOptions}>Remove All</button>
		</section>
	);
}
