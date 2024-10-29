const InnerHeader = () => {
	return (
		<header className="header header-border">
			<div className="header-top">
				<div className="container">
					<div className="header-left">
						<p className="welcome-msg">Welcome to Dream Deal Store</p>
					</div>
					<div className="header-right">
						<a className="d-lg-show" href="/my-account" aria-label="My Account">
							My Account
						</a>
						<a
							href="login.html"
							className="d-lg-show login sign-in"
							aria-label="Sign In"
						>
							<i className="w-icon-account"></i> Sign In
						</a>
						<span className="delimiter d-lg-show">/</span>
						<a
							href="signup.html"
							className="ml-0 d-lg-show login register"
							aria-label="Register"
						>
							Register
						</a>
					</div>
				</div>
			</div>

			<div className="header-middle">
				<div className="container">
					<div className="header-left mr-md-4">
						<a
							href="#"
							className="mobile-menu-toggle w-icon-hamburger"
							aria-label="Toggle Mobile Menu"
						></a>
						<a className="logo" href="/" aria-label="Home">
							<img
								src="./src/assets/img/logo.png"
								alt="Dream Deal Store Logo"
								width="205"
								height="45"
							/>
						</a>
						<form
							method="get"
							action="#"
							className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex"
							role="search"
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
							<button
								className="btn btn-search"
								type="submit"
								aria-label="Search"
							>
								<i className="w-icon-search"></i>
							</button>
						</form>
					</div>

					<div className="header-right ml-4">
						<div className="header-call d-xs-show d-lg-flex align-items-center">
							<a href="tel:#" className="w-icon-call" aria-label="Call Us"></a>
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
									0(800) 123-456
								</a>
							</div>
						</div>
						<a
							className="wishlist label-down link d-xs-show"
							href="/wishlist"
							aria-label="Wishlist"
						>
							<i className="w-icon-heart"></i>
							<span className="wishlist-label d-lg-show">Wishlist</span>
						</a>
						<div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
							<div className="cart-overlay"></div>
							<a
								href="#"
								className="cart-toggle label-down link"
								aria-label="Shopping Cart"
							>
								<i className="w-icon-cart">
									<span className="cart-count text-white">2</span>
								</i>
								<span className="cart-label">Cart</span>
							</a>
							<div className="dropdown-box">
								<div className="cart-header">
									<span>Shopping Cart</span>
									<a href="#" className="btn-close" aria-label="Close Cart">
										Close<i className="w-icon-long-arrow-right"></i>
									</a>
								</div>
								<div className="products">
									<div className="product product-cart">
										<div className="product-detail">
											<a
												className="product-name"
												href="/product-default"
												aria-label="Beige knitted elas runner shoes"
											>
												Beige Knitted Elas Runner Shoes
											</a>
											<div className="price-box">
												<span className="product-quantity">1</span>
												<span className="product-price">$25.68</span>
											</div>
										</div>
										<figure className="product-media">
											<a
												href="/product-default"
												aria-label="Beige knitted elas runner shoes"
											>
												<img
													src="./src/assets/img/products/product-1.jpg"
													alt="Beige Knitted Elas Runner Shoes"
													height="84"
													width="94"
												/>
											</a>
										</figure>
										<button
											className="btn btn-link btn-close"
											aria-label="Remove Product"
										>
											<i className="fas fa-times"></i>
										</button>
									</div>
									<div className="product product-cart">
										<div className="product-detail">
											<a
												className="product-name"
												href="/product-default"
												aria-label="Blue utility"
											>
												Blue Utility
											</a>
											<div className="price-box">
												<span className="product-quantity">1</span>
												<span className="product-price">$32.99</span>
											</div>
										</div>
										<figure className="product-media">
											<a href="/product-default" aria-label="Blue utility">
												<img
													src="./src/assets/img/products/product-2.jpg"
													alt="Blue Utility"
													width="84"
													height="94"
												/>
											</a>
										</figure>
										<button
											className="btn btn-link btn-close"
											aria-label="Remove Product"
										>
											<i className="fas fa-times"></i>
										</button>
									</div>
								</div>
								<div className="cart-total">
									<label>Subtotal:</label>
									<span className="price">$58.67</span>
								</div>
								<div className="cart-action">
									<a
										className="btn btn-dark btn-outline btn-rounded"
										href="/cart"
										aria-label="View Cart"
									>
										View Cart
									</a>
									<a
										className="btn btn-primary btn-rounded"
										href="/checkout"
										aria-label="Checkout"
									>
										Checkout
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="sticky-content-wrapper">
				<div className="header-bottom sticky-content fix-top sticky-header">
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
																	<a href="#">Sofas &amp; Couches</a>
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
														<div className="col-md-3 col-lg-3 col-6">
															<h4 className="menu-title">Lighting</h4>
															<hr className="divider" />
															<ul>
																<li>
																	<a href="#">Light Bulbs</a>
																</li>
																<li>
																	<a href="#">Lamps</a>
																</li>
																<li>
																	<a href="#">Ceiling Lights</a>
																</li>
																<li>
																	<a href="#">Wall Lights</a>
																</li>
																<li>
																	<a href="#">Bathroom Lighting</a>
																</li>
															</ul>
														</div>
														<div className="col-md-3 col-lg-3 col-6">
															<h4 className="menu-title">Home Accessories</h4>
															<hr className="divider" />
															<ul>
																<li>
																	<a href="#">Decorative Accessories</a>
																</li>
																<li>
																	<a href="#">Candles &amp; Holders</a>
																</li>
																<li>
																	<a href="#">Rugs</a>
																</li>
																<li>
																	<a href="#">Wall Art</a>
																</li>
																<li>
																	<a href="#">Curtains</a>
																</li>
															</ul>
														</div>
														<div className="col-md-3 col-lg-3 col-6">
															<h4 className="menu-title">Outdoor</h4>
															<hr className="divider" />
															<ul>
																<li>
																	<a href="#">Patio Furniture</a>
																</li>
																<li>
																	<a href="#">Garden Decor</a>
																</li>
																<li>
																	<a href="#">Lawn Mowers</a>
																</li>
																<li>
																	<a href="#">Pressure Washers</a>
																</li>
																<li>
																	<a href="#">All Garden Tools</a>
																</li>
																<li>
																	<a href="#">Outdoor Dining</a>
																</li>
															</ul>
														</div>
													</li>
												</ul>
											</li>
											<li>
												<a href="#">
													<i className="w-icon-heartbeat"></i>Healthy &amp;
													Beauty
												</a>
											</li>
											<li>
												<a href="#">
													<i className="w-icon-gift"></i>Gift Ideas
												</a>
											</li>
											<li>
												<a href="#">
													<i className="w-icon-gamepad"></i>Toys &amp; Games
												</a>
											</li>
											<li>
												<a href="#">
													<i className="w-icon-ice-cream"></i>Cooking
												</a>
											</li>
											<li>
												<a href="#">
													<i className="w-icon-ios"></i>Smart Phones
												</a>
											</li>
											<li>
												<a href="#">
													<i className="w-icon-camera"></i>Cameras &amp; Photo
												</a>
											</li>
											<li>
												<a href="#">
													<i className="w-icon-ruby"></i>Accessories
												</a>
											</li>
											<li>
												<a
													className="font-weight-bold text-primary text-uppercase ls-25"
													href="/shop"
													aria-label="View All Categories"
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
											<a href="/" aria-label="Home">
												Home
											</a>
										</li>
										<li>
											<a href="about.html" aria-label="About Us">
												About
											</a>
										</li>
										<li className="active">
											<a href="/shop" aria-label="Shop">
												Shop
											</a>
										</li>
										<li>
											<a href="/wishlist" aria-label="Wishlist">
												Wishlist
											</a>
										</li>
										<li>
											<a
												href="faq.html"
												aria-label="Frequently Asked Questions"
											>
												FAQ&apos;s
											</a>
										</li>
										<li>
											<a href="contact.html" aria-label="Contact Us">
												Contact
											</a>
										</li>
									</ul>
								</nav>
							</div>
							<div className="header-right">
								<a
									className="d-xl-show"
									href="/my-account"
									aria-label="My Account"
								>
									<i className="w-icon-user mr-1"></i>My Account
								</a>
								<a href="/shop" aria-label="Daily Deals">
									<i className="w-icon-sale"></i>Daily Deals
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default InnerHeader;
