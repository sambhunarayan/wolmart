const RelatedProducts = () => {
	const products = [
		{
			id: 1,
			name: 'Drone',
			image: 'assets/img/products/5.jpg',
			price: 632.0,
			rating: 100,
			reviews: 3,
		},
		{
			id: 2,
			name: 'Official Camera',
			image: 'assets/img/products/6.jpg',
			price: 263.0,
			rating: 100,
			reviews: 3,
		},
		{
			id: 3,
			name: 'Phone Charge Pad',
			image: 'assets/img/products/7-1.jpg',
			price: 23.0,
			rating: 80,
			reviews: 8,
		},
		{
			id: 4,
			name: 'Fashionalble Pencil',
			image: 'assets/img/products/8.jpg',
			price: 50.0,
			rating: 100,
			reviews: 9,
		},
		{
			id: 5,
			name: 'Fashionalble Pencil',
			image: 'assets/img/products/1-5-1.jpg',
			price: 50.0,
			rating: 100,
			reviews: 9,
		},
		{
			id: 6,
			name: 'Fashionalble Pencil',
			image: 'assets/img/products/1-1.jpg',
			price: 50.0,
			rating: 100,
			reviews: 9,
		},
	];

	const handlePreview = event => {
		const previewlistener = event.currentTarget.dataset.previewlistener;
		console.log(previewlistener); // Use the value as needed
		// Additional logic for handling preview
	};

	return (
		<section className="related-product-section">
			<div className="title-link-wrapper mb-4">
				<h4 className="title">Related Products</h4>
				<a
					href="#"
					className="btn btn-dark btn-link btn-slide-right btn-icon-right"
				>
					More Products<i className="w-icon-long-arrow-right"></i>
				</a>
			</div>
			<div
				className="swiper-container swiper-theme"
				data-swiper-options="{
                    'spaceBetween': 20,
                    'slidesPerView': 2,
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 4
                        },
                        '768': {
                            'slidesPerView': 5
                        },
                        '992': {
                            'slidesPerView': 6
                        }
                    }
                }"
			>
				<div className="swiper-wrapper">
					{products.map((product, index) => (
						<div
							className="swiper-slide product"
							key={product.id}
							role="group"
							aria-label={`${index + 1} / ${products.length}`}
							style={{ width: '176.667px', marginRight: '20px' }}
						>
							<figure className="product-media">
								<a
									href="/product-default"
									data-preview-listener="true"
									onClick={handlePreview}
								>
									<img
										src={`./src/${product.image}`}
										alt="Product"
										width="300"
										height="338"
									/>
								</a>
								<div className="product-action-vertical">
									<a
										href="#"
										className="btn-product-icon btn-cart w-icon-cart"
										title="Add to cart"
									></a>
									<a
										href="#"
										className="btn-product-icon btn-wishlist w-icon-heart"
										title="Add to wishlist"
									></a>
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
								<h4 className="product-name">
									<a href="/product-default">{product.name}</a>
								</h4>
								<div className="ratings-container">
									<div className="ratings-full">
										<span
											className="ratings"
											style={{ width: `${product.rating}%` }}
										></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a className="rating-reviews" href="/product-default">
										({product.reviews} reviews)
									</a>
								</div>
								<div className="product-pa-wrapper">
									<div className="product-price">
										<span className="rupee">₹</span>
										{product.price.toFixed(2)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<span
					className="swiper-notification"
					aria-live="assertive"
					aria-atomic="true"
				></span>
			</div>
		</section>
	);
};

export default RelatedProducts;
