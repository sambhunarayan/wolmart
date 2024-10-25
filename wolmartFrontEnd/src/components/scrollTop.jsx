// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function scrollTop() {
	return (
		<>
			<a
				id="scroll-top"
				className="scroll-top"
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
						// eslint-disable-next-line react/no-unknown-property
						stroke-miterlimit="10"
						cx="35"
						cy="35"
						r="34"
						style="stroke-dasharray: 16.4198, 400"
					></circle>
				</svg>
			</a>
		</>
	);
}

export default scrollTop;
