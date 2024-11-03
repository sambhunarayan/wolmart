import React, { useState } from 'react';
function InnerHeader() {
	// State to track if the div is visible
	const [isActive, setIsActive] = useState(false);
	// Toggle function to add/remove the "active" class
	const toggleClass = () => {
		setIsActive(!isActive);
	};
	return (
		<>
			<header className="header header-border">
				<div className="header-top">
					<div className="container">
						<div className="header-left">
							<p className="welcome-msg">Welcome to dream deal Store</p>
						</div>
						<div className="header-right">
							<a className="d-lg-show" href="/my-account">
								My Account
							</a>
							<a className="d-lg-show login sign-in" href="/assets/ajax/login">
								<i className="w-icon-account"></i>Sign In
							</a>
							<span className="delimiter d-lg-show">/</span>
							<a
								className="ml-0 d-lg-show login register"
								href="/assets/ajax/login"
							>
								Register
							</a>
						</div>
					</div>
				</div>
				<div className="header-middle">
					<div className="container">
						<div className="header-left mr-md-4">
							<a href="#" className="mobile-menu-toggle w-icon-hamburger"></a>
							<a className="logo" href="/">
								<img
									src="assets/img/logo.png"
									alt="logo"
									width="205"
									height="45"
								/>
							</a>
							<form
								method="get"
								action="#"
								className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex"
							>
								<div className="select-box bg-white">
									<select id="category" name="category">
										<option value="">All Categories</option>
										<option value="">Fashion</option>
										<option value="">Furniture</option>
										<option value="">Shoes</option>
										<option value="">Sports</option>
										<option value="">Games</option>
										<option value="">Computers</option>
										<option value="">Electronics</option>
										<option value="">Kitchen</option>
										<option value="">Clothing</option>
									</select>
								</div>
								<input
									type="text"
									className="form-control bg-white pt-0 pb-0"
									name="search"
									id="search"
									placeholder="Search in..."
									required
								/>
								<button className="btn btn-search" type="submit">
									<i className="w-icon-search"></i>
								</button>
							</form>
						</div>
						<div className="header-right ml-4">
							<div className="header-call d-xs-show d-lg-flex align-items-center">
								<a href="tel:#" className="w-icon-call"></a>
								<div className="call-info d-lg-show">
									<h4 className="chat font-size-md text-normal ls-normal text-white mb-0">
										<a
											href="mailto:#"
											className="text-capitalize text-primary font-weight-normal"
										>
											Live Chat
										</a>
										<span className="text-light font-weight-normal">or :</span>
									</h4>
									<a
										href="tel:#"
										className="phone-number font-weight-bolder ls-50"
									>
										0(800)123-456
									</a>
								</div>
							</div>
							<a
								className="wishlist label-down link d-xs-show"
								href="/wishlist"
							>
								<i className="w-icon-heart"></i>
								<span className="wishlist-label d-lg-show">Wishlist</span>
							</a>
							<div
								className={`dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2 ${
									isActive ? 'opened' : ''
								}`}
							>
								<div className="cart-overlay"></div>
								<a
									href="#"
									onClick={toggleClass}
									className="cart-toggle label-down link"
								>
									<i className="w-icon-cart">
										<span className="cart-count text-white">2</span>
									</i>
									<span className="cart-label">Cart</span>
								</a>
								<div className="dropdown-box">
									<div className="cart-header">
										<span>Shopping Cart</span>
										<a href="#" onClick={toggleClass} className="btn-close">
											Close<i className="w-icon-long-arrow-right"></i>
										</a>
									</div>
									<div className="products">
										<div className="product product-cart">
											<div className="product-detail">
												<a className="product-name" href="/product-default">
													Beige knitted elas runner shoes
												</a>
												<div className="price-box">
													<span className="product-quantity">1</span>
													<span className="product-price">
														<span className="rupee">₹</span>25.68
													</span>
												</div>
											</div>
											<figure className="product-media">
												<a href="/product-default">
													<img
														src="assets/img/products/product-1.jpg"
														alt="product"
														height="84"
														width="94"
													/>
												</a>
											</figure>
											<button className="btn btn-link btn-close">
												<i className="fas fa-times"></i>
											</button>
										</div>
										<div className="product product-cart">
											<div className="product-detail">
												<a className="product-name" href="/product-default">
													Blue utility
												</a>
												<div className="price-box">
													<span className="product-quantity">1</span>
													<span className="product-price">
														<span className="rupee">₹</span>32.99
													</span>
												</div>
											</div>
											<figure className="product-media">
												<a href="/product-default">
													<img
														src="assets/img/products/product-2.jpg"
														alt="product"
														width="84"
														height="94"
													/>
												</a>
											</figure>
											<button className="btn btn-link btn-close">
												<i className="fas fa-times"></i>
											</button>
										</div>
									</div>
									<div className="cart-total">
										<label>Subtotal:</label>
										<span className="price">
											<span className="rupee">₹</span>58.67
										</span>
									</div>
									<div className="cart-action">
										<a
											className="btn btn-dark btn-outline btn-rounded"
											href="/cart"
										>
											View Cart
										</a>
										<a className="btn btn-primary btn-rounded" href="/checkout">
											Checkout
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sticky-content-wrapper" style={{ height: '52px' }}>
					<div
						className="header-bottom sticky-content fix-top sticky-header fixed"
						style={{ marginTop: '0px' }}
					>
						<div className="container">
							<div className="inner-wrap">
								<div className="header-left">
									<div
										className="dropdown category-dropdown has-border"
										data-visible="true"
									>
										<a
											href="#"
											className="category-toggle"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="true"
											data-display="static"
											title="Browse Categories"
										>
											<i className="w-icon-category"></i>
											<span>Browse Categories</span>
										</a>
										<div className="dropdown-box">
											<ul className="menu vertical-menu category-menu">
												<li className="has-submenu">
													<a href="#">
														<i className="w-icon-furniture"></i>Furniture
													</a>
													<ul className="megamenu type2">
														<li className="row">
															<div className="col-md-3 col-lg-3 col-6">
																<h4 className="menu-title">Furniture</h4>
																<hr className="divider" />
																<ul>
																	<li>
																		<a href="#">Sofas & Couches</a>
																	</li>
																	<li>
																		<a href="#">Armchairs</a>
																	</li>
																	<li>
																		<a href="#">Bed Frames</a>
																	</li>
																	<li>
																		<a href="#">Beside Tables</a>
																	</li>
																	<li>
																		<a href="#">Dressing Tables</a>
																	</li>
																</ul>
															</div>
															{/* Additional category sections go here */}
														</li>
													</ul>
												</li>
												<li>
													<a href="#">
														<i className="w-icon-heartbeat"></i>Healthy & Beauty
													</a>
												</li>
												<li>
													<a href="#">
														<i className="w-icon-gift"></i>Gift Ideas
													</a>
												</li>
												{/* Additional items go here */}
												<li>
													<a
														className="font-weight-bold text-primary text-uppercase ls-25"
														href="/shop"
													>
														View All Categories
														<i className="w-icon-angle-right"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<nav className="main-nav">
										<ul className="menu active-underline">
											<li>
												<a href="/">Home</a>
											</li>
											<li>
												<a href="about.html">About</a>
											</li>
											<li className="active">
												<a href="/shop">Shop</a>
											</li>
											{/* Additional nav items */}
										</ul>
									</nav>
								</div>
								<div className="header-right">
									<a className="d-xl-show" href="/my-account">
										<i className="w-icon-user mr-1"></i>My Account
									</a>
									<a href="/shop">
										<i className="w-icon-sale"></i>Daily Deals
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
export default InnerHeader;
