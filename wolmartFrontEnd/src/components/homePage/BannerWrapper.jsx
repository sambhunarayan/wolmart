function BannerWrapper() {
	return (
		<>
			<div className="container">
				<div
					className="banner-wrapper appear-animate row cols-md-2 mb-10 fadeIn appear-animation-visible"
					style={{ animationDuration: '1.2s' }}
				>
					<div className="banner banner-fixed overlay-dark br-sm mt-4">
						<figure className="br-sm">
							<img
								src="/assets/img/banner-3.jpg"
								alt="Category Banner"
								width="680"
								height="180"
								style={{ backgroundColor: '#565960' }}
							/>
						</figure>
						<div className="banner-content y-50">
							<h4 className="banner-price-info text-lighter font-secondary font-weight-normal mb-0">
								Flash Sale
								<span className="text-primary font-weight-bolder">50% OFF</span>
							</h4>
							<h2 className="banner-title text-white font-secondary">
								Wireless HeadPhone
							</h2>
							<h3 className="banner-subtitle text-lighter font-weight-normal">
								Only until the end of this Week
							</h3>
							<a
								href="index.html"
								className="btn btn-sm btn-outline btn-white btn-rounded btn-icon-right slide-animate"
							>
								Shop Now
								<i className="w-icon-long-arrow-right"></i>
							</a>
						</div>
					</div>
					<div className="banner banner-fixed overlay-dark br-sm mt-4">
						<figure className="br-sm">
							<img
								src="/assets/img/banner-4.jpg"
								alt="Category Banner"
								width="680"
								height="180"
								style={{ backgroundColor: '#E5E6E8' }}
							/>
						</figure>
						<div className="banner-content y-50">
							<h4 className="banner-price-info text-default font-secondary font-weight-normal mb-0">
								Get up to
								<span className="text-primary font-weight-bolder">20% OFF</span>
							</h4>
							<h2 className="banner-title text-dark font-secondary">
								Sport Outfits
							</h2>
							<h3 className="banner-subtitle text-default font-weight-normal">
								Only until the end of this Week
							</h3>
							<a
								href="index.html"
								className="btn btn-sm btn-outline btn-dark btn-rounded btn-icon-right slide-animate"
							>
								Shop Now
								<i className="w-icon-long-arrow-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BannerWrapper;
