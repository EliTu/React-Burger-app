import React from 'react';
import styles from './About.module.css';

const About = props => {
	const { About } = styles;

	return (
		<div className={About}>
			<h1>About the app</h1>
			<p>
				This project origins and base is the Burger Builder project from
				the{' '}
				<a href="https://www.udemy.com/react-the-complete-guide-incl-redux/">
					"React - The Complete Guide"
				</a>{' '}
				Udemy course, by Maximillian Schwartzmuler.
			</p>
			<p>
				Though the main idea and base layout are part of the course
				project, Through the teachings of Max and further dive into
				React and its ecosystem, I came up with a different
				implamentation of the app, functionality and layout wise.
			</p>
			<ul>
				Technologies covered and used:
				<li>
					<span className={techName}>Main:</span>React (^16.8.6
					implementing hooks)
				</li>
				<li>
					<span className={techName}>Styles:</span>CSS Modules
				</li>
				<li>
					<span className={techName}>State management:</span>Redux
				</li>
				<li>
					<span className={techName}>Routing:</span>React Router
				</li>
				<li>
					<span className={techName}>HTTP request:</span>Axios
				</li>
				<li>
					<span className={techName}>Test runner:</span>Jest
				</li>
				<li>
					<span className={techName}>React test utilities:</span>
					Enzyme
				</li>
			</ul>
			<p>
				Also, sorry but there (probably) won't be real burgers, but I
				hope you'll enjoy anyway :)
			</p>
		</div>
	);
};

export default About;
