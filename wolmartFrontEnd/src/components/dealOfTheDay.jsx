import './App.css';

function dealOfTheDay() {
	return (
		<>
			<div
				className="title-link-wrapper title-deals after-none appear-animate fadeIn appear-animation-visible"
				style="animation-duration: 1.2s;"
			>
				<h2 className="title font-secondary mb-1">Deals Hot Of The Day</h2>
				<a href="shop-boxed-banner.html" className="font-weight-bold ls-25">
					More Products
					<i className="w-icon-long-arrow-right"></i>
				</a>
			</div>
		</>
	);
}

export default dealOfTheDay;
