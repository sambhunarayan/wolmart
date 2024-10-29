function SideBar() {
	return (
		<>
			<aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
				<div className="sidebar-overlay"></div>
				<a className="sidebar-close" href="#">
					<i className="close-icon"></i>
				</a>
				<a href="#" className="sidebar-toggle d-flex d-lg-none">
					<i className="fas fa-chevron-left"></i>
				</a>
				<div className="sidebar-content scrollable">
					<div className="sticky-sidebar">
						<div className="widget widget-icon-box mb-6">
							{[
								{
									icon: 'w-icon-truck',
									title: 'Free Shipping & Returns',
									description: 'For all orders over ₹99',
								},
								{
									icon: 'w-icon-bag',
									title: 'Secure Payment',
									description: 'We ensure secure payment',
								},
								{
									icon: 'w-icon-money',
									title: 'Money Back Guarantee',
									description: 'Any back within 30 days',
								},
							].map((item, index) => (
								<div className="icon-box icon-box-side" key={index}>
									<span className="icon-box-icon text-dark">
										<i className={item.icon}></i>
									</span>
									<div className="icon-box-content">
										<h4 className="icon-box-title">{item.title}</h4>
										<p>{item.description}</p>
									</div>
								</div>
							))}
						</div>
						{/* End of Widget Icon Box */}

						<div className="widget widget-banner mb-9">
							<div className="banner banner-fixed br-sm">
								<figure>
									<img
										src="assets/img/products/banner3.jpg"
										alt="Banner"
										width="266"
										height="220"
										style={{ backgroundColor: '#1D2D44' }}
									/>
								</figure>
								<div className="banner-content">
									<div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
										40<sup className="font-weight-bold">%</sup>
										<sub className="font-weight-bold text-uppercase ls-25">
											Off
										</sub>
									</div>
									<h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
										Ultimate Sale
									</h4>
								</div>
							</div>
						</div>
						{/* End of Widget Banner */}

						<div className="widget widget-products">
							<div className="title-link-wrapper mb-2">
								<h4 className="title title-link font-weight-bold">
									More Products
								</h4>
							</div>

							<div className="swiper nav-top">
								<div
									className="swiper-container swiper-theme nav-top"
									data-swiper-options="{
            'slidesPerView': 1,
            'spaceBetween': 20,
            'navigation': {
                'prevEl': '.swiper-button-prev',
                'nextEl': '.swiper-button-next'
            }
        }"
								>
									<div className="swiper-wrapper">
										{[
											{
												img: 'assets/img/products/13.jpg',
												name: 'Smart Watch',
												price: '₹80.00 - ₹90.00',
												ratingWidth: '100%',
											},
											{
												img: 'assets/img/products/14.jpg',
												name: 'Sky Medical Facility',
												price: '₹58.00',
												ratingWidth: '80%',
											},
											{
												img: 'assets/img/products/15.jpg',
												name: 'Black Stunt Motor',
												price: '₹374.00',
												ratingWidth: '60%',
											},
											{
												img: 'assets/img/products/16.jpg',
												name: 'Skate Pan',
												price: '₹278.00',
												ratingWidth: '100%',
											},
											{
												img: 'assets/img/products/17.jpg',
												name: 'Modern Cooker',
												price: '₹324.00',
												ratingWidth: '80%',
											},
											{
												img: 'assets/img/products/18.jpg',
												name: 'CT Machine',
												price: '₹236.00',
												ratingWidth: '100%',
											},
										].map((product, index) => (
											<div className="widget-col swiper-slide" key={index}>
												<div className="product product-widget">
													<figure className="product-media">
														<a href="#">
															<img
																src={product.img}
																alt="Product"
																width="100"
																height="113"
															/>
														</a>
													</figure>
													<div className="product-details">
														<h4 className="product-name">
															<a href="#">{product.name}</a>
														</h4>
														<div className="ratings-container">
															<div className="ratings-full">
																<span
																	className="ratings"
																	style={{ width: product.ratingWidth }}
																></span>
																<span className="tooltiptext tooltip-top"></span>
															</div>
														</div>
														<div className="product-price">{product.price}</div>
													</div>
												</div>
											</div>
										))}
									</div>
									<button
										className="swiper-button-next"
										aria-label="Next slide"
									></button>
									<button
										className="swiper-button-prev"
										disabled
										aria-label="Previous slide"
									></button>
									<span
										className="swiper-notification"
										aria-live="assertive"
										aria-atomic="true"
									></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}
export default SideBar;
