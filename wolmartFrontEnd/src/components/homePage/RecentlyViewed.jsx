function RecentlyViewed({ mostPopularDeals }) {
	return (
		<>
			<div className="container mb-4">
				<div
					className="title-link-wrapper title-select after-none appear-animate fadeIn appear-animation-visible"
					style={{ animationDuration: '1.2s' }}
				>
					<h2 className="title font-secondary font-weight-bolder">
						Recently Viewed Products
					</h2>
					<a href="shop.html" className="font-weight-bold ls-25">
						More Products
						<i className="w-icon-long-arrow-right"></i>
					</a>
				</div>
				<div
					className="swiper-container swiper-theme select-product-wrapper shadow-swiper appear-animate pb-2 mb-10 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events fadeIn appear-animation-visible"
					data-swiper-options="{ 'spaceBetween': 20, 'slidesPerView': 2, 'breakpoints': { '768': { 'slidesPerView': 3 }, '992': { 'slidesPerView': 4 }, '1200': { 'slidesPerView': 5 } }}"
					style={{ animationDuration: '1.2s' }}
				>
					<div
						className="swiper-wrapper"
						style={{ transform: 'translate3d(0px, 0px, 0px)' }}
					>

						{mostPopularDeals.map((recentlyViewed, index) => <div
							className="swiper-slide product product-image-gap product-simple"
							style={{ width: '216px', marginRight: '20px' }}
						>
							<figure className="product-media">
								<a href="product-default.html">
									<img
										src={recentlyViewed.images[0]}
										alt="Product"
										width="295"
										height="335"
									/>
									<img
										src={recentlyViewed.images[1]}
										alt="Product"
										width="295"
										height="335"
									/>
								</a>
								<div className="product-action">
									<a
										href="#"
										className="btn-product btn-quickview"
										title="Quick View"
									>
										Quick View
									</a>
								</div>
							</figure>
							<div className="product-details">
								<a
									href="#"
									className="btn-wishlist w-icon-heart"
									title="Add to wishlist"
								></a>
								<h4 className="product-name">
									<a href="product-default.html">{recentlyViewed.name}</a>
								</h4>
								<div className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: '80%' }}></span>
									</div>
									<a href="product-default.html" className="rating-reviews">
										(1 reviews)
									</a>
								</div>
								<div className="product-pa-wrapper">
									<div className="product-price">
										<ins className="new-price">${recentlyViewed.base_price}</ins>
										<del className="old-price">${recentlyViewed.sale_price}</del>
									</div>
									<div className="product-action">
										<a
											href="#"
											className="btn-cart btn-product btn btn-link btn-underline"
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
						</div>)}

						{/* <div
							className="swiper-slide product product-image-gap product-simple swiper-slide-next"
							role="group"
							aria-label="2 / 5"
							style={{ width: '216px', marginRight: '20px' }}
						>
							<figure className="product-media">
								<a href="product-default.html">
									<img
										src="./src/assets/img/products/1-2-1.jpg"
										alt="Product"
										width="295"
										height="335"
									/>
									<img
										src="./src/assets/img/products/1-2-2.jpg"
										alt="Product"
										width="295"
										height="335"
									/>
								</a>
								<div className="product-action">
									<a
										href="#"
										className="btn-product btn-quickview"
										title="Quick View"
									>
										Quick View
									</a>
								</div>
							</figure>
							<div className="product-details">
								<a
									href="#"
									className="btn-wishlist w-icon-heart"
									title="Add to wishlist"
								></a>
								<h4 className="product-name">
									<a href="product-default.html">Comfortable Backpack</a>
								</h4>
								<div className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: '0%' }}></span>
										<span className="tooltiptext tooltip-top">0</span>
									</div>
									<a href="product-default.html" className="rating-reviews">
										(0 reviews)
									</a>
								</div>
								<div className="product-pa-wrapper">
									<div className="product-price">
										<ins className="new-price">$47.26</ins>
										<del className="old-price">$54.69</del>
									</div>
									<div className="product-action">
										<a
											href="#"
											className="btn-cart btn-product btn btn-link btn-underline"
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							className="swiper-slide product product-image-gap product-simple"
							role="group"
							aria-label="3 / 5"
							style={{ width: '216px', marginRight: '20px' }}
						>
							<figure className="product-media">
								<a href="product-default.html">
									<img
										src="./src/assets/img/products/1-3-1.jpg"
										alt="Product"
										width="295"
										height="335"
									/>
									<img
										src="./src/assets/img/products/1-3-2.jpg"
										alt="Product"
										width="295"
										height="335"
									/>
								</a>
								<div className="product-action">
									<a
										href="#"
										className="btn-product btn-quickview"
										title="Quick View"
									>
										Quick View
									</a>
								</div>
							</figure>
							<div className="product-details">
								<a
									href="#"
									className="btn-wishlist w-icon-heart"
									title="Add to wishlist"
								></a>
								<h4 className="product-name">
									<a href="product-default.html">Men&lsquo;s Suede Belt</a>
								</h4>
								<div className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: '80%' }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a href="product-default.html" className="rating-reviews">
										(1 reviews)
									</a>
								</div>
								<div className="product-pa-wrapper">
									<div className="product-price">
										<ins className="new-price">$63.91</ins>
									</div>
									<div className="product-action">
										<a
											href="#"
											className="btn-cart btn-product btn btn-link btn-underline"
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							className="swiper-slide product product-image-gap product-simple"
							role="group"
							aria-label="4 / 5"
							style={{ width: '216px', marginRight: '20px' }}
						>
							<figure className="product-media">
								<a href="product-default.html">
									<img
										src="./src/assets/img/products/1-4-1.jpg"
										alt="Product"
										width="295"
										height="335"
									/>
									<img
										src="./src/assets/img/products/1-4-2.jpg"
										alt="Product"
										width="295"
										height="335"
									/>
								</a>
								<div className="product-countdown-container">
									<div
										className="product-countdown countdown-compact is-countdown"
										data-until="2024, 12, 9"
										data-format="DHMS"
										data-compact="false"
										data-labels-short="Days, Hours, Mins, Secs"
									>
										<span className="countdown-row countdown-show4">
											<span className="countdown-section">
												<span className="countdown-amount">42</span>
												<span className="countdown-period">Days</span>
											</span>
											<span className="countdown-section">
												<span className="countdown-amount">12</span>
												<span className="countdown-period">Hrs</span>
											</span>
											<span className="countdown-section">
												<span className="countdown-amount">23</span>
												<span className="countdown-period">Mins</span>
											</span>
											<span className="countdown-section">
												<span className="countdown-amount">11</span>
												<span className="countdown-period">Secs</span>
											</span>
										</span>
									</div>
								</div>
								<div className="product-action">
									<a
										href="#"
										className="btn-product btn-quickview"
										title="Quick View"
									>
										Quick View
									</a>
								</div>
							</figure>
							<div className="product-details">
								<a
									href="#"
									className="btn-wishlist w-icon-heart"
									title="Add to wishlist"
								></a>
								<h4 className="product-name">
									<a href="product-default.html">Mini Wireless Earphone</a>
								</h4>
								<div className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: '80%' }}></span>
										<span className="tooltiptext tooltip-top">4.00</span>
									</div>
									<a href="product-default.html" className="rating-reviews">
										(1 reviews)
									</a>
								</div>
								<div className="product-pa-wrapper">
									<div className="product-price">
										<ins className="new-price">$59.17 - $129.27</ins>
									</div>
									<div className="product-action">
										<a
											href="product-default.html"
											className="btn-primary btn-product btn btn-link btn-underline"
										>
											Select Options
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							className="swiper-slide product product-image-gap product-simple"
							role="group"
							aria-label="5 / 5"
							style={{ width: '216px', marginRight: '20px' }}
						>
							<figure className="product-media">
								<a href="product-default.html">
									<img
										src="./src/assets/img/products/1-5-1.jpg"
										alt="Product"
										width="295"
										height="335"
									/>
									<img
										src="./src/assets/img/products/1-5-2.jpg"
										alt="Product"
										width="295"
										height="335"
									/>
								</a>
								<div className="product-action">
									<a
										href="#"
										className="btn-product btn-quickview"
										title="Quick View"
									>
										Quick View
									</a>
								</div>
							</figure>
							<div className="product-details">
								<a
									href="#"
									className="btn-wishlist w-icon-heart"
									title="Add to wishlist"
								></a>
								<h4 className="product-name">
									<a href="product-default.html">Charge &amp; Alarm Machine</a>
								</h4>
								<div className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: '100%' }}></span>
										<span className="tooltiptext tooltip-top">5.00</span>
									</div>
									<a href="product-default.html" className="rating-reviews">
										(1 reviews)
									</a>
								</div>
								<div className="product-pa-wrapper">
									<div className="product-price">
										<ins className="new-price">$65.27</ins>
									</div>
									<div className="product-action">
										<a
											href="#"
											className="btn-cart btn-product btn btn-link btn-underline"
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							className="swiper-slide product product-image-gap product-simple"
							role="group"
							aria-label="5 / 5"
							style={{ width: '216px', marginRight: '20px' }}
						>
							<figure className="product-media">
								<a href="product-default.html">
									<img
										src="./src/assets/img/products/1-5-1.jpg"
										alt="Product"
										width="295"
										height="335"
									/>
									<img
										src="./src/assets/img/products/1-5-2.jpg"
										alt="Product"
										width="295"
										height="335"
									/>
								</a>
								<div className="product-action">
									<a
										href="#"
										className="btn-product btn-quickview"
										title="Quick View"
									>
										Quick View
									</a>
								</div>
							</figure>
							<div className="product-details">
								<a
									href="#"
									className="btn-wishlist w-icon-heart"
									title="Add to wishlist"
								></a>
								<h4 className="product-name">
									<a href="product-default.html">Charge &amp; Alarm Machine</a>
								</h4>
								<div className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: '100%' }}></span>
										<span className="tooltiptext tooltip-top">5.00</span>
									</div>
									<a href="product-default.html" className="rating-reviews">
										(1 reviews)
									</a>
								</div>
								<div className="product-pa-wrapper">
									<div className="product-price">
										<ins className="new-price">$65.27</ins>
									</div>
									<div className="product-action">
										<a
											href="#"
											className="btn-cart btn-product btn btn-link btn-underline"
										>
											Add To Cart
										</a>
									</div>
								</div>
							</div>
						</div> */}

						{/* Additional Swiper slides can be added similarly */}

						<div
							className="swiper-pagination mt-4 swiper-pagination-clickable swiper-pagination-bullets"
							style={{ display: 'none' }}
						>
							<span
								className="swiper-pagination-bullet swiper-pagination-bullet-active"
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
			</div>
		</>
	);
}

export default RecentlyViewed;
