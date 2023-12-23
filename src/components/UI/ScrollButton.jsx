import React, { useEffect, useState } from 'react';
import './clock.css'

const ScrollButton = () => {

	const [scrollValue, setScrollValue] = useState(0);
	const [displayProgress, setDisplayProgress] = useState(false);

	const calcScrollValue = () => {
		const pos = document.documentElement.scrollTop;
		const calcHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const newValue = Math.round((pos * 100) / calcHeight);
		setScrollValue(newValue);

		// Adjust the threshold as needed
		if (pos > 100) {
			setDisplayProgress(true);
		} else {
			setDisplayProgress(false);
		}
	};

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // Adds smooth scrolling
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', calcScrollValue);
		window.addEventListener('load', calcScrollValue);

		return () => {
			window.removeEventListener('scroll', calcScrollValue);
			window.removeEventListener('load', calcScrollValue);
		};
	}, []);

	return (

		<div
			id="progress"
			// className={`${displayProgress ? 'visible' : 'hidden'}`}
			style={{
				background: `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`,
			}}
			onClick={handleScrollToTop}
		>
			<span id="progress-value">&#x1F815;</span>
		</div >

	)

}

export default ScrollButton