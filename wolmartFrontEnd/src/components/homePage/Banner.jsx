function Banner() {
	return (
		<>
			<div
				className="banner banner-fixed purchase-banner appear-animate fadeIn appear-animation-visible"
				style={{ animationDuration: '1.2s' }}
			>
				<figure className="banner-img">
					<img
						src="assets/img/banner-5.jpg"
						alt="Banner"
						width="680"
						height="180"
						style={{ backgroundColor: '#342e30' }}
					/>
				</figure>
				<div
					className="banner-content text-center x-50 y-50 slide-animate"
					data-animation-options={{
						name: 'fadeInLeftShorter',
						duration: '15s',
						delay: '3s',
					}}
				>
					<h3 className="banner-subtitle text-primary text-uppercase font-secondary font-weight-bold">
						Today&apos;s Special
					</h3>
					<h2 className="banner-title text-white text-uppercase font-secondary font-weight-bolder mb-2">
						Trending Accessories Collection
					</h2>
					<p className="text-lighter font-weight-normal">
						Free shipping on clearance orders of
						<span className="text-primary font-weight-bolder"> $120 </span>or
						more
					</p>
					<a
						href="shop-banner-sidebar.html"
						className="btn btn-lg btn-outline btn-white btn-rounded btn-icon-right slide-animate"
					>
						Purchase Now
						<i className="w-icon-long-arrow-right"></i>
					</a>
				</div>
			</div>
		</>
	);
}

export default Banner;
