import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/api";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/zoom";


const MainContent = () => {

	const [productDetails, setProductDetails] = useState(null);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	// Fetch Product Details
	useEffect(() => {
		const handleFetchProductDetails = async () => {
			const requestModel = {
				"service": "products",
				"action": "getProductDetails",
				"input": {
					"product_id": localStorage.getItem("product_Id")
				}
			};

			try {
				const response = await fetchData(requestModel);
				console.log("product details Response:", response);

				// Set product details from response
				if (response && response.data) {
					setProductDetails(response.data);
				}
			} catch (error) {
				console.error("Error fetching ProductDetails:", error);
			}
		};

		handleFetchProductDetails();
	}, []);

	 if (!productDetails) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			{productDetails ? (
				<div className="main-content">
					<div className="product product-single row">
						<div className="col-md-6 mb-4 mb-md-8">
							<div className="product-gallery product-gallery-sticky">
								<Swiper 
									className="product-single-swiper swiper-theme nav-inner"
									navigation 
									slidesPerView={1}
									onSlideChange={() => console.log('slide change')}
									onSwiper={(swiper) => console.log(swiper)}
									>
									{productDetails.images.map((image, index) => (
										<SwiperSlide key={index}>
										<figure className="product-image">
											<img
											src={image}
											alt={`Product ${productDetails.name} ${index + 1}`}
											width="800"
											height="900"
											/>
										</figure>
										</SwiperSlide>
										))}
								</Swiper>
								<div className="product-thumbs-wrap">
									<Swiper
										onSwiper={setThumbsSwiper}
										className="product-thumbs swiper-wrapper row cols-4 gutter-sm"
										slidesPerView={4}
										spaceBetween={10}
										freeMode
										watchSlidesProgress
									>
										{productDetails.images.map((image, index) => (
										<SwiperSlide key={index} className="product-thumb">
											<img
											src={image}
											alt={`Thumbnail ${productDetails.name} ${index + 1}`}
											width="100"
											height="112"
											/>
										</SwiperSlide>
										))}
									</Swiper>
								</div>
								{/* <Swiper
									className="product-single-swiper swiper-theme nav-inner"
									navigation
									thumbs={{ swiper: thumbsSwiper }}
									slidesPerView={1}
									>

										{productDetails.images.map((image, index) => (
										<SwiperSlide key={index}>
										<figure className="product-image">
											<img
											src={image}
											alt={`Product ${productDetails.name} ${index + 1}`}
											width="800"
											height="900"
											/>
										</figure>
										</SwiperSlide>
									))}
								</Swiper>
								<div className="product-thumbs-wrap">
									<Swiper
										onSwiper={setThumbsSwiper}
										className="product-thumbs swiper-wrapper row cols-4 gutter-sm"
										slidesPerView={4}
										spaceBetween={10}
										freeMode
										watchSlidesProgress
									>
										{productDetails.images.map((image, index) => (
										<SwiperSlide key={index} className="product-thumb">
											<img
											src={image}
											alt={`Thumbnail ${productDetails.name} ${index + 1}`}
											width="100"
											height="112"
											/>
										</SwiperSlide>
										))}
									</Swiper>
								</div> */}
							</div>
						</div>
						<div className="col-md-6 mb-6 mb-md-8">
							<div
								className="product-details"
								data-sticky-options="{'minWidth': 767}"
							>
								<h1 className="product-title">{productDetails.name}</h1>
								<div className="product-bm-wrapper">
									<figure className="brand">
										<img
											src="./src/assets/img/brands/brand-2.jpg"
											alt="Brand"
											width="105"
											height="48"
										/>
									</figure>
									<div className="product-meta">
										<div className="product-categories">
											Category:{' '}
											<span className="product-category">
												<a href="#">{productDetails.category.name}</a>
											</span>
										</div>
										<div className="product-sku">
											SKU: <span>{productDetails.sku}</span>
										</div>
									</div>
								</div>

								<hr className="product-divider" />

								<div className="product-price">
									<ins className="new-price">
										<span className="rupee">₹</span>{productDetails.sale_price} -{' '}
										<span className="rupee">₹</span>{productDetails.base_price}
									</ins>
								</div>

								<div className="ratings-container">
									<div className="ratings-full">
										<span className="ratings" style={{ width: '80%' }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
									<a href="#product-tab-reviews" className="rating-reviews">
										({productDetails.review_count})
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
								
								{productDetails.variants_mapping && productDetails.variants_mapping.length > 0 && (
  <div>
    {productDetails.variants_mapping.map((variant, index) => (
      <div key={index} className={`product-form product-variation-form product-${variant.attribute.toLowerCase()}-swatch`}>
        {/* Display attribute label */}
        <label className="mb-1">{variant.attribute}:</label>

        {/* Check if the attribute is "Size" */}
        {variant.attribute === "Size" ? (
          <div className="flex-wrap d-flex align-items-center product-variations">
            {variant.attribute_values.map((value) => (
              <a key={value._id} href="#" className="size">
                {value.value}
              </a>
            ))}
          </div>
        ) : variant.attribute === "Colour" ? (
          // If the attribute is "Colour", render color swatches
          <div className="d-flex align-items-center product-variations">
            {variant.attribute_values.map((value) => (
              <a
                key={value._id}
                href="#"
                className="color"
                style={{ backgroundColor: value.value.toLowerCase() }}
              ></a>
            ))}
          </div>
        ) : null}
        
        {/* Clear all option */}
        <a href="#" className="product-variation-clean" style={{ display: 'none' }}>
          Clean All
        </a>
      </div>
    ))}
  </div>
)}


								<div className="product-variation-price">
									<span></span>
								</div>

								<div className="social-links-wrapper">
									<div className="social-links">
										<div className="social-icons social-no-color border-thin">
											<a
												href="#"
												className="social-icon social-facebook w-icon-facebook"
											></a>
											<a
												href="#"
												className="social-icon social-twitter w-icon-twitter"
											></a>
											<a
												href="#"
												className="social-icon social-pinterest fab fa-pinterest-p"
											></a>
											<a
												href="#"
												className="social-icon social-whatsapp fab fa-whatsapp"
											></a>
											<a
												href="#"
												className="social-icon social-youtube fab fa-linkedin-in"
											></a>
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
									<a
										href="/cart"
										type="button" className="btn btn-primary">add to cart</a>
								</div>
							</div>
						</div>
					</div>
					<div className="tab tab-nav-boxed tab-nav-underline product-tabs">
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
								<a href="#product-tab-description" className="nav-link active">
									Description
								</a>
							</li>
							<li className="nav-item">
								<a href="#product-tab-specification" className="nav-link">
									Specifications
								</a>
							</li>
							<li className="nav-item">
								<a href="#product-tab-reviews" className="nav-link">
									Customer Reviews (3)
								</a>
							</li>
						</ul>
						<div className="tab-content">
							<div className="tab-pane active" id="product-tab-description">
								<div className="row mb-4">
									<div className="col-md-12 mb-5">
										<h4 className="title tab-pane-title font-weight-bold mb-2">
											Detail
										</h4>
										<p className="mb-4">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
											do eiusmod tempor incididunt arcu cursus vitae congue
											mauris. Sagittis id consectetur purus ut. Tellus rutrum
											tellus pelle Vel pretium lectus quam id leo in vitae turpis
											massa.
										</p>
										<ul className="list-type-check">
											<li>
												Nunc nec porttitor turpis. In eu risus enim. In vitae
												mollis elit.
											</li>
											<li>Vivamus finibus vel mauris ut vehicula.</li>
											<li>
												Nullam a magna porttitor, dictum risus nec, faucibus
												sapien.
											</li>
										</ul>
									</div>
								</div>

								<div className="row cols-md-3">
									<div className="mb-3">
										<h5 className="sub-title font-weight-bold">
											<span className="mr-3">1.</span>Free Shipping &amp; Return
										</h5>
										<p className="detail pl-5">
											We offer free shipping for products on orders above 50
											<span className="rupee">₹</span> and offer free delivery for
											all orders in US.
										</p>
									</div>
									<div className="mb-3">
										<h5 className="sub-title font-weight-bold">
											<span>2.</span>Free and Easy Returns
										</h5>
										<p className="detail pl-5">
											We guarantee our products and you could get back all of your
											money anytime you want in 30 days.
										</p>
									</div>
									<div className="mb-3">
										<h5 className="sub-title font-weight-bold">
											<span>3.</span>Special Financing
										</h5>
										<p className="detail pl-5">
											Get 20%-50% off items over 50
											<span className="rupee">₹</span> for a month or over 250
											<span className="rupee">₹</span> for a year with our special
											credit card.
										</p>
									</div>
								</div>
							</div>

							<div className="tab-pane" id="product-tab-specification">
								<ul className="list-none">
									{productDetails.product_specifications.map((spec, index) => (
										<li key={index}>
											<label>{spec.specification_name}</label>
											<p>{spec.specification_value}</p>
										</li>
									))}
								</ul>
							</div>
							<div className="tab-pane" id="product-tab-reviews">
								<div className="row mb-4">
									<div className="col-xl-4 col-lg-5 mb-4">
										<div className="ratings-wrapper">
											<div className="avg-rating-container">
												<h4 className="avg-mark font-weight-bolder ls-50">3.3</h4>
												<div className="avg-rating">
													<p className="text-dark mb-1">Average Rating</p>
													<div className="ratings-container">
														<div className="ratings-full">
															<span
																className="ratings"
																style={{ width: '60%' }}
															></span>
															<span className="tooltiptext tooltip-top"></span>
														</div>
														<a href="#" className="rating-reviews">
															(3 Reviews)
														</a>
													</div>
												</div>
											</div>
											<div className="ratings-value d-flex align-items-center text-dark ls-25">
												<span className="text-dark font-weight-bold">66.7%</span>{' '}
												Recommended
												<span className="count">(2 of 3)</span>
											</div>
											<div className="ratings-list">
												{[100, 80, 60, 40, 20].map((width, index) => (
													<div className="ratings-container" key={index}>
														<div className="ratings-full">
															<span
																className="ratings"
																style={{ width: `${width}%` }}
															></span>
															<span className="tooltiptext tooltip-top"></span>
														</div>
														<div className="progress-bar progress-bar-sm ">
															<span style={{ width: `${width / 2}%` }}></span>
														</div>
														<div className="progress-value">
															<mark>{`${width / 2}%`}</mark>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>

									<div className="col-xl-8 col-lg-7 mb-4">
										<div className="review-form-wrapper">
											<h3 className="title tab-pane-title font-weight-bold mb-1">
												Submit Your Review
											</h3>
											<p className="mb-3">
												Your email address will not be published. Required fields
												are marked *
											</p>
											<form action="#" method="POST" className="review-form">
												<div className="rating-form">
													<label htmlFor="rating">
														Your Rating Of This Product :
													</label>
													<span className="rating-stars">
														{[1, 2, 3, 4, 5].map(star => (
															<a key={star} className={`star-${star}`} href="#">
																{star}
															</a>
														))}
													</span>
													<select
														name="rating"
														id="rating"
														required
														style={{ display: 'none' }}
													>
														<option value="">Rate…</option>
														<option value="5">Perfect</option>
														<option value="4">Good</option>
														<option value="3">Average</option>
														<option value="2">Not that bad</option>
														<option value="1">Very poor</option>
													</select>
												</div>
												<textarea
													cols="30"
													rows="6"
													placeholder="Write Your Review Here..."
													className="form-control"
													id="review"
												></textarea>
												<div className="row gutter-md">
													<div className="col-md-6">
														<input
															type="text"
															className="form-control"
															placeholder="Your Name"
															id="author"
														/>
													</div>
													<div className="col-md-6">
														<input
															type="text"
															className="form-control"
															placeholder="Your Email"
															id="email_1"
														/>
													</div>
												</div>
												<div className="form-group">
													<input
														type="checkbox"
														className="custom-checkbox"
														id="save-checkbox"
													/>
													<label htmlFor="save-checkbox">
														Save my name, email, and website in this browser for
														the next time I comment.
													</label>
												</div>
												<button type="submit" className="btn btn-dark">
													Submit Review
												</button>
											</form>
										</div>
									</div>
								</div>

								<div className="tab tab-nav-boxed tab-nav-outline tab-nav-center">
									<ul className="nav nav-tabs" role="tablist">
										{[
											{ href: '#show-all', label: 'Show All', isActive: true },
											{
												href: '#helpful-positive',
												label: 'Most Helpful Positive',
											},
											{
												href: '#helpful-negative',
												label: 'Most Helpful Negative',
											},
											{ href: '#highest-rating', label: 'Highest Rating' },
											{ href: '#lowest-rating', label: 'Lowest Rating' },
										].map((tab, index) => (
											<li className="nav-item" key={index}>
												<a
													href={tab.href}
													className={`nav-link ${tab.isActive ? 'active' : ''}`}
												>
													{tab.label}
												</a>
											</li>
										))}
									</ul>
									<div className="tab-content">
										<div className="tab-pane active" id="show-all">
											<ul className="comments list-style-none">
												{[
													{
														author: 'John Doe',
														date: 'March 22, 2021 at 1:54 pm',
														ratingWidth: '60%',
														commentText:
															'Pellentesque habitant morbi tristique senectus et. In dictum non consectetur a erat. Nunc ultrices eros in cursus turpis massa tincidunt ante in nibh mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.',
														helpfulCount: 1,
														unhelpfulCount: 0,
														avatar: 'assets/img/products/1-100x100.png',
														images: [
															{
																src: 'assets/img/products/review-img-1.jpg',
																alt: "Attachment image of John Doe's review on Electronics Black Wrist Watch",
																zoomImage:
																	'assets/img/products/review-img-1-800x900.jpg',
															},
														],
													},
													{
														author: 'John Doe',
														date: 'March 22, 2021 at 1:52 pm',
														ratingWidth: '80%',
														commentText:
															'Nullam a magna porttitor, dictum risus nec, faucibus sapien. Ultrices eros in cursus turpis massa tincidunt ante in nibh mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.',
														helpfulCount: 1,
														unhelpfulCount: 0,
														avatar: 'assets/img/products/1-100x100.png',
														images: [
															{
																src: 'assets/img/products/review-img-2.jpg',
																alt: "Attachment image of John Doe's review on Electronics Black Wrist Watch",
																zoomImage: 'assets/img/products/review-img-2.jpg',
															},
															{
																src: 'assets/img/products/review-img-3.jpg',
																alt: "Attachment image of John Doe's review on Electronics Black Wrist Watch",
																zoomImage: 'assets/img/products/review-img-3.jpg',
															},
														],
													},
													{
														author: 'John Doe',
														date: 'March 22, 2021 at 1:21 pm',
														ratingWidth: '60%',
														commentText:
															'In fermentum et sollicitudin ac orci phasellus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. In dictum non consectetur a erat. Nunc scelerisque viverra mauris in aliquam sem fringilla.',
														helpfulCount: 0,
														unhelpfulCount: 1,
														avatar: 'assets/img/products/1-100x100.png',
														images: [],
													},
												].map((comment, index) => (
													<li className="comment" key={index}>
														<div className="comment-body">
															<figure className="comment-avatar">
																<img
																	src={comment.avatar}
																	alt="Commenter Avatar"
																	width="90"
																	height="90"
																/>
															</figure>
															<div className="comment-content">
																<h4 className="comment-author">
																	<a href="#">{comment.author}</a>
																	<span className="comment-date">
																		{comment.date}
																	</span>
																</h4>
																<div className="ratings-container comment-rating">
																	<div className="ratings-full">
																		<span
																			className="ratings"
																			style={{ width: comment.ratingWidth }}
																		></span>
																		<span className="tooltiptext tooltip-top"></span>
																	</div>
																</div>
																<p>{comment.commentText}</p>
																<div className="comment-action">
																	<a
																		href="#"
																		className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
																	>
																		<i className="far fa-thumbs-up"></i>Helpful (
																		{comment.helpfulCount})
																	</a>
																	<a
																		href="#"
																		className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
																	>
																		<i className="far fa-thumbs-down"></i>
																		Unhelpful ({comment.unhelpfulCount})
																	</a>
																	<div className="review-image">
																		{comment.images.map((image, imgIndex) => (
																			<a href="#" key={imgIndex}>
																				<figure>
																					<img
																						src={image.src}
																						width="60"
																						height="60"
																						alt={image.alt}
																						data-zoom-image={image.zoomImage}
																					/>
																				</figure>
																			</a>
																		))}
																	</div>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>

										<div className="tab-pane" id="helpful-positive">
											<ul className="comments list-style-none">
												{[
													{
														author: 'John Doe',
														date: 'March 22, 2021 at 1:54 pm',
														ratingWidth: '60%',
														commentText:
															'Pellentesque habitant morbi tristique senectus et. In dictum non consectetur a erat. Nunc ultrices eros in cursus turpis massa tincidunt ante in nibh mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.',
														helpfulCount: 1,
														unhelpfulCount: 0,
														avatar: 'assets/img/products/1-100x100.png',
														images: [
															{
																src: 'assets/img/products/review-img-1.jpg',
																alt: "Attachment image of John Doe's review on Electronics Black Wrist Watch",
																zoomImage: 'assets/img/products/review-img-1.jpg',
															},
														],
													},
													{
														author: 'John Doe',
														date: 'March 22, 2021 at 1:52 pm',
														ratingWidth: '80%',
														commentText:
															'Nullam a magna porttitor, dictum risus nec, faucibus sapien. Ultrices eros in cursus turpis massa tincidunt ante in nibh mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.',
														helpfulCount: 1,
														unhelpfulCount: 0,
														avatar: 'assets/img/products/1-100x100.png',
														images: [
															{
																src: 'assets/img/products/review-img-2.jpg',
																alt: "Attachment image of John Doe's review on Electronics Black Wrist Watch",
																zoomImage:
																	'assets/img/products/review-img-2-800x900.jpg',
															},
															{
																src: 'assets/img/products/review-img-3.jpg',
																alt: "Attachment image of John Doe's review on Electronics Black Wrist Watch",
																zoomImage:
																	'assets/img/products/review-img-3-800x900.jpg',
															},
														],
													},
												].map((comment, index) => (
													<li className="comment" key={index}>
														<div className="comment-body">
															<figure className="comment-avatar">
																<img
																	src={comment.avatar}
																	alt="Commenter Avatar"
																	width="90"
																	height="90"
																/>
															</figure>
															<div className="comment-content">
																<h4 className="comment-author">
																	<a href="#">{comment.author}</a>
																	<span className="comment-date">
																		{comment.date}
																	</span>
																</h4>
																<div className="ratings-container comment-rating">
																	<div className="ratings-full">
																		<span
																			className="ratings"
																			style={{ width: comment.ratingWidth }}
																		></span>
																		<span className="tooltiptext tooltip-top"></span>
																	</div>
																</div>
																<p>{comment.commentText}</p>
																<div className="comment-action">
																	<a
																		href="#"
																		className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
																	>
																		<i className="far fa-thumbs-up"></i>Helpful (
																		{comment.helpfulCount})
																	</a>
																	<a
																		href="#"
																		className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
																	>
																		<i className="far fa-thumbs-down"></i>
																		Unhelpful ({comment.unhelpfulCount})
																	</a>
																	<div className="review-image">
																		{comment.images.map((image, imgIndex) => (
																			<a href="#" key={imgIndex}>
																				<figure>
																					<img
																						src={image.src}
																						width="60"
																						height="60"
																						alt={image.alt}
																						data-zoom-image={image.zoomImage}
																					/>
																				</figure>
																			</a>
																		))}
																	</div>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>

										<div className="tab-pane" id="helpful-negative">
											<ul className="comments list-style-none">
												{[
													{
														author: 'John Doe',
														date: 'March 22, 2021 at 1:21 pm',
														ratingWidth: '60%',
														commentText:
															'In fermentum et sollicitudin ac orci phasellus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. In dictum non consectetur a erat. Nunc scelerisque viverra mauris in aliquam sem fringilla.',
														helpfulCount: 0,
														unhelpfulCount: 1,
														avatar: 'assets/img/products/1-100x100.png',
													},
												].map((comment, index) => (
													<li className="comment" key={index}>
														<div className="comment-body">
															<figure className="comment-avatar">
																<img
																	src={comment.avatar}
																	alt="Commenter Avatar"
																	width="90"
																	height="90"
																/>
															</figure>
															<div className="comment-content">
																<h4 className="comment-author">
																	<a href="#">{comment.author}</a>
																	<span className="comment-date">
																		{comment.date}
																	</span>
																</h4>
																<div className="ratings-container comment-rating">
																	<div className="ratings-full">
																		<span
																			className="ratings"
																			style={{ width: comment.ratingWidth }}
																		></span>
																		<span className="tooltiptext tooltip-top"></span>
																	</div>
																</div>
																<p>{comment.commentText}</p>
																<div className="comment-action">
																	<a
																		href="#"
																		className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
																	>
																		<i className="far fa-thumbs-up"></i>Helpful (
																		{comment.helpfulCount})
																	</a>
																	<a
																		href="#"
																		className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
																	>
																		<i className="far fa-thumbs-down"></i>
																		Unhelpful ({comment.unhelpfulCount})
																	</a>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>

										<div className="tab-pane" id="highest-rating">
											<ul className="comments list-style-none">
												{[
													{
														author: 'John Doe',
														date: 'March 22, 2021 at 1:52 pm',
														ratingWidth: '80%',
														commentText:
															'Nullam a magna porttitor, dictum risus nec, faucibus sapien. Ultrices eros in cursus turpis massa tincidunt ante in nibh mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.',
														helpfulCount: 1,
														unhelpfulCount: 0,
														avatar: 'assets/img/products/1-100x100.png',
														reviewImages: [
															{
																src: 'assets/img/products/review-img-2.jpg',
																zoom: 'assets/img/products/review-img-2-800x900.jpg',
															},
															{
																src: 'assets/img/products/review-img-3.jpg',
																zoom: 'assets/img/products/review-img-3-800x900.jpg',
															},
														],
													},
												].map((comment, index) => (
													<li className="comment" key={index}>
														<div className="comment-body">
															<figure className="comment-avatar">
																<img
																	src={comment.avatar}
																	alt="Commenter Avatar"
																	width="90"
																	height="90"
																/>
															</figure>
															<div className="comment-content">
																<h4 className="comment-author">
																	<a href="#">{comment.author}</a>
																	<span className="comment-date">
																		{comment.date}
																	</span>
																</h4>
																<div className="ratings-container comment-rating">
																	<div className="ratings-full">
																		<span
																			className="ratings"
																			style={{ width: comment.ratingWidth }}
																		></span>
																		<span className="tooltiptext tooltip-top"></span>
																	</div>
																</div>
																<p>{comment.commentText}</p>
																<div className="comment-action">
																	<a
																		href="#"
																		className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
																	>
																		<i className="far fa-thumbs-up"></i>Helpful (
																		{comment.helpfulCount})
																	</a>
																	<a
																		href="#"
																		className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
																	>
																		<i className="far fa-thumbs-down"></i>
																		Unhelpful ({comment.unhelpfulCount})
																	</a>
																	<div className="review-image">
																		{comment.reviewImages.map(
																			(image, imgIndex) => (
																				<a href="#" key={imgIndex}>
																					<figure>
																						<img
																							src={image.src}
																							width="60"
																							height="60"
																							alt={`Attachment image of ${comment.author}'s review`}
																							data-zoom-image={image.zoom}
																						/>
																					</figure>
																				</a>
																			),
																		)}
																	</div>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>
										<div className="tab-pane" id="lowest-rating">
											<ul className="comments list-style-none">
												{[
													{
														author: 'John Doe',
														date: 'March 22, 2021 at 1:54 pm',
														ratingWidth: '60%',
														commentText:
															'Pellentesque habitant morbi tristique senectus et. In dictum non consectetur a erat. Nunc ultrices eros in cursus turpis massa tincidunt ante in nibh mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.',
														helpfulCount: 1,
														unhelpfulCount: 0,
														avatar: 'assets/img/products/1-100x100.png',
														reviewImages: [
															{
																src: 'assets/img/products/review-img-3.jpg',
																zoom: 'assets/img/products/review-img-3-800x900.jpg',
															},
														],
													},
												].map((comment, index) => (
													<li className="comment" key={index}>
														<div className="comment-body">
															<figure className="comment-avatar">
																<img
																	src={comment.avatar}
																	alt="Commenter Avatar"
																	width="90"
																	height="90"
																/>
															</figure>
															<div className="comment-content">
																<h4 className="comment-author">
																	<a href="#">{comment.author}</a>
																	<span className="comment-date">
																		{comment.date}
																	</span>
																</h4>
																<div className="ratings-container comment-rating">
																	<div className="ratings-full">
																		<span
																			className="ratings"
																			style={{ width: comment.ratingWidth }}
																		></span>
																		<span className="tooltiptext tooltip-top"></span>
																	</div>
																</div>
																<p>{comment.commentText}</p>
																<div className="comment-action">
																	<a
																		href="#"
																		className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
																	>
																		<i className="far fa-thumbs-up"></i>Helpful (
																		{comment.helpfulCount})
																	</a>
																	<a
																		href="#"
																		className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
																	>
																		<i className="far fa-thumbs-down"></i>
																		Unhelpful ({comment.unhelpfulCount})
																	</a>
																	<div className="review-image">
																		{comment.reviewImages.map(
																			(image, imgIndex) => (
																				<a href="#" key={imgIndex}>
																					<figure>
																						<img
																							src={image.src}
																							width="60"
																							height="60"
																							alt={`Attachment image of ${comment.author}'s review`}
																							data-zoom-image={image.zoom}
																						/>
																					</figure>
																				</a>
																			),
																		)}
																	</div>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			) : (
				<p>Loading product details...</p>
			)}
		</div>
	);
};

export default MainContent;