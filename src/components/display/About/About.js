import React from 'react';
import styles from './About.module.css';

const About = props => {
	const { About } = styles;

	return (
		<div className={About}>
			<h1>About the app</h1>
		</div>
	);
};

export default About;
