// JSX
var userName = 'KJ';
var age = 28;
var location = 'Dallas, TX';

var template = (
	<header>
		<h1>{userName}</h1>
		<div class="meta">
			<span>Age: {age}</span>
			<span>Location: {location}</span>
		</div>
	</header>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
