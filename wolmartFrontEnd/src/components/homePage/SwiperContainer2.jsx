function SwiperContainer2({ hotDeals }) {
	return (
		<>
			<div className="container">
				<div
					className="swiper-container swiper-theme mb-8 pg-inner animation-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
					data-swiper-options="{
						'spaceBetween': 20,
						'slidesPerView': 1,
						'breakpoints': {
							'576': {
								'slidesPerView': 2
							},
							'768': {
								'slidesPerView': 3
							},
							'992': {
								'slidesPerView': 4
							}
						}
					}"
				>
					<div className="swiper-wrapper" aria-live="polite" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
						{hotDeals.map((product, index) => (
							<div
								key={product._id || index}
								className="swiper-slide swiper-slide-active"
								role="group"
								aria-label={`${index + 1} / ${hotDeals.length}`}
								style={{ width: '275px', marginRight: '20px' }}
							>
								<div className="product-widget-wrap">
									<div className="product product-widget">
										<figure className="product-media">
											<a href="product-default.html">
												{/* Display the first two images */}
												{product.images.slice(0, 2).map((img, imgIndex) => (
													<img
														key={imgIndex}
														src={img}
														alt="Product"
														width="100"
														height="106"
													/>
												))}
											</a>
										</figure>
										<div className="product-details">
											<h4 className="product-name">
												<a href="product-default.html">{product.name}</a>
											</h4>
											<div className="ratings-container">
												<div className="ratings-full">
													<span className="ratings" style={{ width: '80%' }}></span>
													<span className="tooltiptext tooltip-top"></span>
												</div>
											</div>
											<div className="product-price">
												<ins className="new-price">${product.sale_price || product.base_price}</ins>
												{product.sale_price && (
													<del className="old-price">${product.base_price}</del>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="swiper-pagination"></div>
					<div className="swiper-button-next"></div>
					<div className="swiper-button-prev"></div>
				</div>
			</div>
		</>
	);
}

export default SwiperContainer2;
