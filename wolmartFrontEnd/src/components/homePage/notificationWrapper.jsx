function NotificationWrapper() {
	return (
		<>
			<div className="container mb-4">
				<div
					className="swiper-container swiper-theme category-banner-3cols pt-2 pb-2 mb-10 appear-animate swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events fadeIn appear-animation-visible"
					data-swiper-options={`{
        'spaceBetween': 20,
        'slidesPerView': 1,
        'breakpoints': {
            '576': {
                'slidesPerView': 2
            },
            '992': {
                'slidesPerView': 3
            }
        }
    }`}
					style={{ animationDuration: '1.2s' }}
				>
					<div
						className="swiper-wrapper"
						id="swiper-wrapper-d158d3dfcec7e16f"
						aria-live="polite"
						style={{ transform: 'translate3d(0px, 0px, 0px)' }}
					>
						<div
							className="swiper-slide banner banner-fixed category-banner swiper-slide-active"
							role="group"
							aria-label="1 / 3"
							style={{ width: '373.333px', marginRight: '20px' }}
						>
							<figure className="br-sm">
								<img
									src="./src/assets/img/1-1.jpg"
									alt="Category Banner"
									width="400"
									height="200"
									style={{ backgroundColor: '#4F4B48' }}
								/>
							</figure>
							<div className="banner-content">
								<h3 className="banner-title text-white text-capitalize">
									New Trending
									<br />
									<span className="text-normal">NIKE Shoes</span>
								</h3>
								<a
									href="shop-banner-sidebar.html"
									className="btn btn-white btn-link btn-underline btn-icon-right"
								>
									Shop Now<i className="w-icon-long-arrow-right"></i>
								</a>
							</div>
						</div>
						{/* End of Category Banner */}
						<div
							className="swiper-slide banner banner-fixed category-banner swiper-slide-next"
							role="group"
							aria-label="2 / 3"
							style={{ width: '373.333px', marginRight: '20px' }}
						>
							<figure className="br-sm">
								<img
									src="./src/assets/img/1-2.jpg"
									alt="Category Banner"
									width="400"
									height="200"
									style={{ backgroundColor: '#A3A3A3' }}
								/>
							</figure>
							<div className="banner-content">
								<h3 className="banner-title text-white text-capitalize ls-25">
									Fashion Jacket
									<br />
									<span className="ls-normal">For Women&apos;s</span>
								</h3>
								<a
									href="shop-banner-sidebar.html"
									className="btn btn-white btn-link btn-underline btn-icon-right"
								>
									Shop Now<i className="w-icon-long-arrow-right"></i>
								</a>
							</div>
						</div>
						{/* End of Category Banner */}
						<div
							className="swiper-slide banner banner-fixed category-banner"
							role="group"
							aria-label="3 / 3"
							style={{ width: '373.333px', marginRight: '20px' }}
						>
							<figure className="br-sm">
								<img
									src="./src/assets/img/1-3.jpg"
									alt="Category Banner"
									width="400"
									height="200"
									style={{ backgroundColor: '#151A1E' }}
								/>
							</figure>
							<div className="banner-content">
								<h3 className="banner-title text-white text-capitalize">
									Diamond
									<br />
									<span>Gold Rings</span>
								</h3>
								<a
									href="shop-banner-sidebar.html"
									className="btn btn-white btn-link btn-underline btn-icon-right"
								>
									Shop Now<i className="w-icon-long-arrow-right"></i>
								</a>
							</div>
						</div>
						{/* End of Category Banner */}
					</div>
					<div
						className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
						style={{ display: 'none' }}
					>
						<span
							className="swiper-pagination-bullet swiper-pagination-bullet-active"
							tabIndex="0"
							role="button"
							aria-label="Go to slide 1"
						></span>
					</div>
					<span
						className="swiper-notification"
						aria-live="assertive"
						aria-atomic="true"
					></span>
				</div>
			</div>
		</>
	);
}

export default NotificationWrapper;
