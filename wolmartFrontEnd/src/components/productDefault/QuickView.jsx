function QuickView() {
	return (
		<>
			{/* Start of Quick View */}
			<div className="product product-single product-popup">
				<div className="row gutter-lg">
					<div className="col-md-6 mb-4 mb-md-0">
						<div className="product-gallery product-gallery-sticky">
							<div className="swiper-container product-single-swiper swiper-theme nav-inner">
								<div className="swiper-wrapper row cols-1 gutter-no">
									{[1, 2, 3, 4].map(num => (
										<div className="swiper-slide" key={num}>
											<figure className="product-image">
												<img
													src={`assets/img/products/popup/${num}-440x494.jpg`}
													data-zoom-image={`assets/img/products/popup/${num}-800x900.jpg`}
													alt="Water Boil Black Utensil"
													width="800"
													height="900"
												/>
											</figure>
										</div>
									))}
								</div>
								<button className="swiper-button-next"></button>
								<button className="swiper-button-prev"></button>
							</div>
							<div
								className="product-thumbs-wrap swiper-container"
								data-swiper-options='{"navigation": {"nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev"}}'
							>
								<div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
									{[1, 2, 3, 4].map(num => (
										<div className="product-thumb swiper-slide" key={num}>
											<img
												src={`assets/img/products/popup/${num}-103x116.jpg`}
												alt="Product Thumb"
												width="103"
												height="116"
											/>
										</div>
									))}
								</div>
								<button className="swiper-button-next"></button>
								<button className="swiper-button-prev"></button>
							</div>
						</div>
					</div>
					<div className="col-md-6 overflow-hidden p-relative">
						<div className="product-details scrollable pl-0">
							<h2 className="product-title">Electronics Black Wrist Watch</h2>
							<div className="product-bm-wrapper">
								<figure className="brand">
									<img
										src="assets/img/brands/brand-1.jpg"
										alt="Brand"
										width="102"
										height="48"
									/>
								</figure>
								<div className="product-meta">
									<div className="product-categories">
										Category:{' '}
										<span className="product-category">
											<a href="#">Electronics</a>
										</span>
									</div>
									<div className="product-sku">
										SKU: <span>MS46891340</span>
									</div>
								</div>
							</div>

							<hr className="product-divider" />

							<div className="product-price">$40.00</div>

							<div className="ratings-container">
								<div className="ratings-full">
									<span className="ratings" style={{ width: '80%' }}></span>
									<span className="tooltiptext tooltip-top"></span>
								</div>
								<a href="#" className="rating-reviews">
									(3 Reviews)
								</a>
							</div>

							<div className="product-short-desc">
								<ul className="list-type-check list-style-none">
									<li>Ultrices eros in cursus turpis massa cursus mattis.</li>
									<li>Volutpat ac tincidunt vitae semper quis lectus.</li>
									<li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
								</ul>
							</div>

							<hr className="product-divider" />

							<div className="product-form product-variation-form product-color-swatch">
								<label>Color:</label>
								<div className="d-flex align-items-center product-variations">
									{['#ffcc01', '#ca6d00', '#1c93cb', '#ccc', '#333'].map(
										(color, index) => (
											<a
												href="#"
												className="color"
												style={{ backgroundColor: color }}
												key={index}
											></a>
										),
									)}
								</div>
							</div>

							<div className="product-form product-variation-form product-size-swatch">
								<label className="mb-1">Size:</label>
								<div className="flex-wrap d-flex align-items-center product-variations">
									{['Small', 'Medium', 'Large', 'Extra Large'].map(size => (
										<a href="#" className="size" key={size}>
											{size}
										</a>
									))}
								</div>
								<a href="#" className="product-variation-clean">
									Clean All
								</a>
							</div>

							<div className="product-variation-price">
								<span></span>
							</div>

							<div className="product-form">
								<div className="product-qty-form">
									<div className="input-group">
										<input
											className="quantity form-control"
											type="number"
											min="1"
											max="10000000"
										/>
										<button className="quantity-plus w-icon-plus"></button>
										<button className="quantity-minus w-icon-minus"></button>
									</div>
								</div>
								<button className="btn btn-primary btn-cart">
									<i className="w-icon-cart"></i>
									<span>Add to Cart</span>
								</button>
							</div>

							<div className="social-links-wrapper">
								<div className="social-links">
									<div className="social-icons social-no-color border-thin">
										{[
											'facebook',
											'twitter',
											'pinterest',
											'whatsapp',
											'youtube',
										].map(social => (
											<a
												href="#"
												className={`social-icon social-${social} w-icon-${social}`}
												key={social}
											></a>
										))}
									</div>
								</div>
								<span className="divider d-xs-show"></span>
								<div className="product-link-wrapper d-flex">
									<a
										href="#"
										className="btn-product-icon btn-wishlist w-icon-heart"
									>
										<span></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default QuickView;
