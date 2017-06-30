import React from 'react';
import '../styles/index.scss';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<p>Guess what? <span className="redBg">Hello World!</span></p>
				<p>Enjoy!</p>
			</div>
		);
	}
}
