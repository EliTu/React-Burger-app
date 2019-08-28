import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	const { Footer } = styles;
	return (
		<div className={Footer}>
			<p>React Burger 2019</p>
			<p>
				Made with{' '}
				<span role="img" aria-label="heart emoji">
					💛
				</span>{' '}
				using React By <a href="https://github.com/EliTu">Eliad</a>
			</p>
		</div>
	);
};

export default Footer;
