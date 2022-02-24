import React from 'react';
import Option from './Option';

export default function Options(props) {
	return (
		<section className="widget">
			<div className="widget__header">
				<h3 className="widget__header--title">Your Options</h3>
				<button
					className="button button--link"
					onClick={props.handleDeleteAllOptions}
				>
					Remove All
				</button>
			</div>
			{props.options.length === 0 && (
				<p className="widget__message">Add an option to get started.</p>
			)}
			<ul>
				{props.options.map((option, i) => (
					<Option
						optionText={option}
						key={i}
						count={i + 1}
						handleDeleteSingleOption={props.handleDeleteSingleOption}
					/>
				))}
			</ul>
		</section>
	);
}
