import React, { useState, useEffect } from 'react';
function ScrollTop() {
	const [scrolled, setScrolled] = useState(false);
	const [dashArray, setDashArray] = useState(16.4198); // Initial value for strokeDasharray

	useEffect(() => {
		// Define the scroll handler
		const handleScroll = () => {
			if (window.scrollY > 100) {
				const newDashArray = Math.min(16.4198 + window.scrollY / 10, 400);
				setDashArray(newDashArray);
				// Add threshold as per your requirement
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		// Attach the scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<>
			<a
				id="scroll-top"
				className={`scroll-top ${scrolled ? 'show' : ''}`}
				href="#top"
				title="Top"
				role="button"
			>
				<i className="w-icon-angle-up"></i>
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 70 70"
				>
					<circle
						id="progress-indicator"
						fill="transparent"
						stroke="#000000"
						strokeMiterlimit="10"
						cx="35"
						cy="35"
						r="34"
						style={{ strokeDasharray: `${dashArray}, 400` }}
					></circle>
				</svg>
			</a>
		</>
	);
}

export default ScrollTop;
