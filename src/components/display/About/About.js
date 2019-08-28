import React from 'react';
import styles from './About.module.css';

const About = props => {
	const { About, techName } = styles;

	return (
		<div className={About}>
			<h1>About the app</h1>
			<p>
				This project origins and base is the Burger Builder project from
				the{' '}
				<a href="https://www.udemy.com/react-the-complete-guide-incl-redux/">
					"React - The Complete Guide"
				</a>{' '}
				Udemy course, by Maximillian Schwartzmuler, showcasing an app
				built using React and the React ecosystem technologies.
			</p>
			<p>
				Though the main idea and base layout are part of the course
				project, Through the teachings of Max and further dive into
				React and its ecosystem, I came up with a different
				implamentation of the app, functionality and layout wise.
			</p>
			<ul>
				This app implements the following technologies:
				<li>
					<span className={techName}>Main: </span>
					<a href="https://reactjs.org/">
						React (^16.8.6 implementing hooks)
					</a>
				</li>
				<li>
					<span className={techName}>Styles: </span>
					<a href="https://github.com/css-modules/css-modules">
						CSS Modules
					</a>
				</li>
				<li>
					<span className={techName}>State management: </span>
					<a href="https://github.com/reduxjs/redux">Redux</a>
				</li>
				<li>
					<span className={techName}>Routing: </span>
					<a href="https://github.com/ReactTraining/react-router">
						React Router
					</a>
				</li>
				<li>
					<span className={techName}>HTTP request: </span>
					<a href="https://github.com/axios/axios">Axios</a>
				</li>
				<li>
					<span className={techName}>Test runner: </span>
					<a href="https://github.com/facebook/jest">Jest</a>
				</li>
				<li>
					<span className={techName}>React test utilities: </span>
					<a href="https://github.com/airbnb/enzyme">Enzyme</a>
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
