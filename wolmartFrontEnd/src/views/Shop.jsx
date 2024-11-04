import { Helmet } from 'react-helmet';
import ScrollTop from '../components/ScrollTop';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/api';


function Shop() {

	const [allProductList, setAllProductList] = useState([]);
	useEffect(() => {
		const handleFetchCategories = async () => {
			const requestModel = {
				service: "products",
				action: "getProducts",
				input: {
					type: "",
				},
			};

			try {
				const response = await fetchData(requestModel);
				console.log("All products Response:", response);

				if (response && response.data) {
					setAllProductList(response.data.products);
				}
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};
		handleFetchCategories();
	}, []);

	const addToCart = async (product_Id) => {
		console.log("PRODUCT ID::::::::::::", product_Id);
		const requestModel = {
			service: "cart",
			action: "addToCart",
			input: {
				product_id: product_Id,
				product_variant_id: "",
				quantity: 1,
			},
		};

		try {
			const response = await fetchData(requestModel);
			console.log("Add to cart Response:", response);

			// Set product details from response
			if (response && response.data) {
			}
		} catch (error) {
			console.error("Error fetching ProductDetails:", error);
		}
	};
	return (
		<>
			<Helmet>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Jost:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="preload"
					href="assets/css/fontawesome-free/webfonts/fa-regular-400.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/assets/css/fontawesome-free/webfonts/fa-solid-900.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/assets/css/fontawesome-free/webfonts/fa-brands-400.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/assets/fonts/wolmart.ttf?png09e"
					as="font"
					type="font/ttf"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="/assets/css/fontawesome-free/css/all.min.css"
				/>
				<link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
				<link rel="stylesheet" href="/assets/css/animate.min.css" />
				<link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
				<link rel="stylesheet" href="/assets/css/style.min.css" />
				<script src="/assets/js/jquery.min.js" type="text/javascript" />
				<script src="/assets/js/parallax.min.js" type="text/javascript" />
				<script src="/assets/js/jquery.plugin.min.js" type="text/javascript" />
				<script src="/assets/js/swiper-bundle.min.js" type="text/javascript" />
				<script
					src="/assets/js/imagesloaded.pkgd.min.js"
					type="text/javascript"
				/>
				<script src="/assets/js/skrollr.min.js" type="text/javascript" />
				<script src="/assets/js/jquery.zoom.js" type="text/javascript" />
				<script
					src="/assets/js/jquery.countdown.min.js"
					type="text/javascript"
				/>
				<script src="/assets/js/main.min.js" type="text/javascript" />
			</Helmet>
			<InnerHeader />
			<main className="main">
				<nav className="breadcrumb-nav">
					<div className="container">
						<ul className="breadcrumb bb-no">
							<li>
								<a href="demo1.html">Home</a>
							</li>
							<li>
								<a href="/shop">Shop</a>
							</li>
							<li>All</li>
						</ul>
					</div>
				</nav>
				<div className="page-content">
					<div className="container">
						<div
							className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
							style={{
								backgroundImage: 'url(assets/img/banner1.jpg)',
								backgroundColor: '#FFC74E',
							}}
						>
							<div className="banner-content">
								<h4 className="banner-subtitle font-weight-bold">
									Accessories Collection
								</h4>
								<h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">
									Smart Wrist Watches
								</h3>
								<a
									className="btn btn-dark btn-rounded btn-icon-right"
									href="/shop"
								>
									Discover Now<i className="w-icon-long-arrow-right"></i>
								</a>
							</div>
						</div>
						<div className="shop-content row gutter-lg mb-10">
							<aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
								<div className="sidebar-overlay"></div>
								<a className="sidebar-close" href="#">
									<i className="close-icon"></i>
								</a>
								<div className="sidebar-content scrollable">
									<div className="sticky-sidebar">
										<div className="filter-actions">
											<label>Filter :</label>
											<a
												href="#"
												className="btn btn-dark btn-link filter-clean"
											>
												Clean All
											</a>
										</div>
										<div className="widget widget-collapsible">
											<h3 className="widget-title">
												<span>All Categories</span>
												<span className="toggle-btn"></span>
											</h3>
											<ul className="widget-body filter-items search-ul">
												<li>
													<a href="#">Accessories</a>
												</li>
												<li>
													<a href="#">Babies</a>
												</li>
												<li>
													<a href="#">Beauty</a>
												</li>
												<li>
													<a href="#">Decoration</a>
												</li>
												<li>
													<a href="#">Electronics</a>
												</li>
												<li>
													<a href="#">Fashion</a>
												</li>
												<li>
													<a href="#">Food</a>
												</li>
												<li>
													<a href="#">Furniture</a>
												</li>
												<li>
													<a href="#">Kitchen</a>
												</li>
												<li>
													<a href="#">Medical</a>
												</li>
												<li>
													<a href="#">Sports</a>
												</li>
												<li>
													<a href="#">Watches</a>
												</li>
											</ul>
										</div>
										<div className="widget widget-collapsible">
											<h3 className="widget-title collapsed">
												<span>Price</span>
												<span className="toggle-btn"></span>
											</h3>
											<div className="widget-body">
												<ul className="filter-items search-ul">
													<li>
														<a href="#">
															<span className="rupee">₹</span>0.00 -{' '}
															<span className="rupee">₹</span>100.00
														</a>
													</li>
													<li>
														<a href="#">
															<span className="rupee">₹</span>100.00 -{' '}
															<span className="rupee">₹</span>200.00
														</a>
													</li>
													<li>
														<a href="#">
															<span className="rupee">₹</span>200.00 -{' '}
															<span className="rupee">₹</span>300.00
														</a>
													</li>
													<li>
														<a href="#">
															<span className="rupee">₹</span>300.00 -{' '}
															<span className="rupee">₹</span>500.00
														</a>
													</li>
													<li>
														<a href="#">
															<span className="rupee">₹</span>500.00+
														</a>
													</li>
												</ul>
												<form className="price-range">
													<input
														type="number"
														name="min_price"
														className="min_price text-center"
														placeholder="₹min"
													/>
													<span className="delimiter">-</span>
													<input
														type="number"
														name="max_price"
														className="max_price text-center"
														placeholder="₹max"
													/>
													<a href="#" className="btn btn-primary btn-rounded">
														Go
													</a>
												</form>
											</div>
										</div>
										<div className="widget widget-collapsible">
											<h3 className="widget-title collapsed">
												<span>Size</span>
												<span className="toggle-btn"></span>
											</h3>
											<ul className="widget-body filter-items item-check mt-1">
												<li>
													<a href="#">Extra Large</a>
												</li>
												<li>
													<a href="#">Large</a>
												</li>
												<li>
													<a href="#">Medium</a>
												</li>
												<li>
													<a href="#">Small</a>
												</li>
											</ul>
										</div>
										<div className="widget widget-collapsible">
											<h3 className="widget-title collapsed">
												<span>Brand</span>
												<span className="toggle-btn"></span>
											</h3>
											<ul className="widget-body filter-items item-check mt-1">
												<li>
													<a href="#">Elegant Auto Group</a>
												</li>
												<li>
													<a href="#">Green Grass</a>
												</li>
												<li>
													<a href="#">Node Js</a>
												</li>
												<li>
													<a href="#">NS8</a>
												</li>
												<li>
													<a href="#">Red</a>
												</li>
												<li>
													<a href="#">Skysuite Tech</a>
												</li>
												<li>
													<a href="#">Sterling</a>
												</li>
											</ul>
										</div>
										<div className="widget widget-collapsible">
											<h3 className="widget-title collapsed">
												<span>Color</span>
												<span className="toggle-btn"></span>
											</h3>
											<ul className="widget-body filter-items item-check mt-1">
												<li>
													<a href="#">Black</a>
												</li>
												<li>
													<a href="#">Blue</a>
												</li>
												<li>
													<a href="#">Brown</a>
												</li>
												<li>
													<a href="#">Green</a>
												</li>
												<li>
													<a href="#">Grey</a>
												</li>
												<li>
													<a href="#">Orange</a>
												</li>
												<li>
													<a href="#">Yellow</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</aside>
							<div className="main-content">
								<nav className="toolbox sticky-toolbox sticky-content fix-top">
									<div className="toolbox-left">
										<a
											href="#"
											className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle btn-icon-left d-block d-lg-none"
										>
											<i className="w-icon-category"></i>
											<span>Filters</span>
										</a>
										<div className="toolbox-item toolbox-sort select-box text-dark">
											<label>Sort By :</label>
											<select name="orderby" className="form-control">
												<option value="default" selected="selected">
													Default sorting
												</option>
												<option value="popularity">Sort by popularity</option>
												<option value="rating">Sort by average rating</option>
												<option value="date">Sort by latest</option>
												<option value="price-low">
													Sort by price: low to high
												</option>
												<option value="price-high">
													Sort by price: high to low
												</option>
											</select>
										</div>
									</div>
									<div className="toolbox-right">
										<div className="toolbox-item toolbox-show select-box">
											<select name="count" className="form-control">
												<option value="9">Show 9</option>
												<option value="12" selected="selected">
													Show 12
												</option>
												<option value="24">Show 24</option>
												<option value="36">Show 36</option>
											</select>
										</div>
									</div>
								</nav>
								<div className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2">

									{allProductList.map((products, index) => <div className="product-wrap">
										<div className="product product-slideup-content">
											<figure className="product-media">
												<a href="/product-default" data-previewlistener="true">
													<img
														src={products.images[0]}
														alt="Product"
														width="300"
														height="338"
													/>
												</a>
												<div className="product-action-vertical">
													<a
														href="#"
														className="btn-product-icon btn-quickview w-icon-search"
														title="Quick View"
													></a>
												</div>
											</figure>
											<div className="product-details">
												<div className="product-cat">
													<a href="/shop" data-previewlistener="true">
														Electronics
													</a>
												</div>
												<h3 className="product-name">
													<a
														href="/product-default"
														data-previewlistener="true"
													>
														{products.name}
													</a>
												</h3>
												<div className="ratings-container">
													<div className="ratings-full">
														<span
															className="ratings"
															style={{ width: '100%' }}
														></span>
														<span className="tooltiptext tooltip-top"></span>
													</div>
													<a
														className="rating-reviews"
														href="/product-default"
														data-previewlistener="true"
													>
														(3 reviews)
													</a>
												</div>
												<div className="product-price">
													<span className="rupee">₹</span>{products.sale_price}-
													<span className="rupee">₹</span>{products.base_price}
												</div>
											</div>
											<div className="product-hidden-details">
												<div className="product-action">
													<a
														onClick={() => addToCart(products._id)}
														className="btn-product btn-cart added"
														title="Add to Cart"
													>
														<i className="w-icon-cart"></i>
														<span>Add To Cart</span>
													</a>
													<a
														href="#"
														className="btn-product-icon btn-wishlist w-icon-heart"
														title="Add to wishlist"
													></a>
												</div>
											</div>
										</div>
									</div>)}
								</div>

								<div className="toolbox toolbox-pagination justify-content-between">
									<p className="showing-info mb-2 mb-sm-0">
										Showing<span>1-12 of 60</span> Products
									</p>
									<ul className="pagination">
										<li className="prev disabled">
											<a
												href="#"
												aria-label="Previous"
												tabIndex="-1"
												aria-disabled="true"
											>
												<i className="w-icon-long-arrow-left"></i>Prev
											</a>
										</li>
										<li className="page-item active">
											<a className="page-link" href="#">
												1
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="next">
											<a href="#" aria-label="Next">
												Next<i className="w-icon-long-arrow-right"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
			<div className="compare-popup">
				<div className="container">
					<div className="compare-title">
						<h4 className="title title-center">Compare Products</h4>
					</div>
					<ul className="compare-product-list list-style-none">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<a href="#" className="btn btn-clean">
						Clean All
					</a>
					<a
						href="compare.html"
						className="btn btn-dark btn-rounded"
						data-previewlistener="true"
					>
						Start Compare!
					</a>
				</div>
			</div>
			<div className="compare-popup-overlay"></div>
			<div className="minipopup-area"></div>
			<ScrollTop />
		</>
	);
}
export default Shop;
