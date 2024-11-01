import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
function Cart() {
	return (
		<>
			<Helmet>
				<link rel="icon" type="image/png" href="/assets/img/favicon.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Jost:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="preload"
					href="/assets/css/fontawesome-free/webfonts/fa-regular-400.woff2"
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
					type="text/css"
					href="/assets/css/fontawesome-free/css/all.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="/assets/css/swiper-bundle.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="/assets/css/animate.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="/assets/css/magnific-popup.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="/assets/css/style.min.css"
				/>
			</Helmet>
			<Header />
			<main className="main cart">
				<nav className="breadcrumb-nav">
					<div className="container">
						<ul className="breadcrumb shop-breadcrumb bb-no">
							<li className="active">
								<a href="/cart" data-previewlistener="true">
									Shopping Cart
								</a>
							</li>
							<li>
								<a href="/checkout" data-previewlistener="true">
									Checkout
								</a>
							</li>
							<li>
								<a href="order.html" data-previewlistener="true">
									Order Complete
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className="page-content">
					<div className="container">
						<div className="row gutter-lg mb-10">
							<div className="col-lg-8 pr-lg-4 mb-6">
								<table className="shop-table cart-table">
									<thead>
										<tr>
											<th className="product-name">
												<span>Product</span>
											</th>
											<th></th>
											<th className="product-price">
												<span>Price</span>
											</th>
											<th className="product-quantity">
												<span>Quantity</span>
											</th>
											<th className="product-subtotal">
												<span>Subtotal</span>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="product-thumbnail">
												<div className="p-relative">
													<a
														href="/product-default"
														data-previewlistener="true"
													>
														<figure>
															<img
																src="/assets/img/products/12.jpg"
																alt="product"
																width="300"
																height="338"
															/>
														</figure>
													</a>
													<button type="submit" className="btn btn-close">
														<i className="fas fa-times"></i>
													</button>
												</div>
											</td>
											<td className="product-name">
												<a href="/product-default" data-previewlistener="true">
													Classic Simple Backpack
												</a>
											</td>
											<td className="product-price">
												<span className="amount">
													<span className="rupee">₹</span>40.00
												</span>
											</td>
											<td className="product-quantity">
												<div className="input-group">
													<input
														className="quantity form-control"
														type="number"
														min="1"
														max="100000"
													/>
													<button className="quantity-plus w-icon-plus"></button>
													<button className="quantity-minus w-icon-minus"></button>
												</div>
											</td>
											<td className="product-subtotal">
												<span className="amount">
													<span className="rupee">₹</span>40.00
												</span>
											</td>
										</tr>
										<tr>
											<td className="product-thumbnail">
												<div className="p-relative">
													<a
														href="/product-default"
														data-previewlistener="true"
													>
														<figure>
															<img
																src="/assets/img/products/13.jpg"
																alt="product"
																width="300"
																height="338"
															/>
														</figure>
													</a>
													<button className="btn btn-close">
														<i className="fas fa-times"></i>
													</button>
												</div>
											</td>
											<td className="product-name">
												<a href="/product-default" data-previewlistener="true">
													Smart Watch
												</a>
											</td>
											<td className="product-price">
												<span className="amount">
													<span className="rupee">₹</span>60.00
												</span>
											</td>
											<td className="product-quantity">
												<div className="input-group">
													<input
														className="quantity form-control"
														type="number"
														min="1"
														max="100000"
													/>
													<button className="quantity-plus w-icon-plus"></button>
													<button className="quantity-minus w-icon-minus"></button>
												</div>
											</td>
											<td className="product-subtotal">
												<span className="amount">
													<span className="rupee">₹</span>60.00
												</span>
											</td>
										</tr>
									</tbody>
								</table>
								<div className="cart-action mb-6">
									<a
										href="#"
										className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"
									>
										<i className="w-icon-long-arrow-left"></i>Continue Shopping
									</a>
									<button
										type="submit"
										className="btn btn-rounded btn-default btn-clear"
										name="clear_cart"
										value="Clear Cart"
									>
										Clear Cart
									</button>
									<button
										type="submit"
										className="btn btn-rounded btn-update disabled"
										name="update_cart"
										value="Update Cart"
									>
										Update Cart
									</button>
								</div>
								<form className="coupon">
									<h5 className="title coupon-title font-weight-bold text-uppercase">
										Coupon Discount
									</h5>
									<input
										type="text"
										className="form-control mb-4"
										placeholder="Enter coupon code here..."
										required
									/>
									<button className="btn btn-dark btn-outline btn-rounded">
										Apply Coupon
									</button>
								</form>
							</div>
							<div className="col-lg-4 sticky-sidebar-wrapper">
								<div className="sticky-sidebar">
									<div className="cart-summary mb-4">
										<h3 className="cart-title text-uppercase">Cart Totals</h3>
										<div className="cart-subtotal d-flex align-items-center justify-content-between">
											<label className="ls-25">Subtotal</label>
											<span>
												<span className="rupee">₹</span>100.00
											</span>
										</div>
										<hr className="divider" />
										<ul className="shipping-methods mb-2">
											<li>
												<label className="shipping-title text-dark font-weight-bold">
													Shipping
												</label>
											</li>
											<li>
												<div className="custom-radio">
													<input
														type="radio"
														id="free-shipping"
														className="custom-control-input"
														name="shipping"
													/>
													<label
														htmlFor="free-shipping"
														className="custom-control-label color-dark"
													>
														Free Shipping
													</label>
												</div>
											</li>
											<li>
												<div className="custom-radio">
													<input
														type="radio"
														id="local-pickup"
														className="custom-control-input"
														name="shipping"
													/>
													<label
														htmlFor="local-pickup"
														className="custom-control-label color-dark"
													>
														Local Pickup
													</label>
												</div>
											</li>
											<li>
												<div className="custom-radio">
													<input
														type="radio"
														id="flat-rate"
														className="custom-control-input"
														name="shipping"
													/>
													<label
														htmlFor="flat-rate"
														className="custom-control-label color-dark"
													>
														Flat rate: <span className="rupee">₹</span>5.00
													</label>
												</div>
											</li>
										</ul>
										<div className="shipping-calculator">
											<p className="shipping-destination lh-1">
												Shipping to <strong>CA</strong>.
											</p>
											<form className="shipping-calculator-form">
												<div className="form-group">
													<div className="select-box">
														<select
															name="country"
															className="form-control form-control-md"
														>
															<option value="default" selected>
																United States (US)
															</option>
															<option value="us">United States</option>
															<option value="uk">United Kingdom</option>
															<option value="fr">France</option>
															<option value="aus">Australia</option>
														</select>
													</div>
												</div>
												<div className="form-group">
													<div className="select-box">
														<select
															name="state"
															className="form-control form-control-md"
														>
															<option value="default" selected>
																California
															</option>
															<option value="ohio">Ohio</option>
														</select>
													</div>
												</div>
												<div className="form-group">
													<input
														className="form-control form-control-md"
														type="text"
														name="town-city"
														placeholder="Town / City"
													/>
												</div>
												<div className="form-group">
													<input
														className="form-control form-control-md"
														type="text"
														name="zipcode"
														placeholder="ZIP"
													/>
												</div>
												<button
													type="submit"
													className="btn btn-dark btn-outline btn-rounded"
												>
													Update Totals
												</button>
											</form>
										</div>
										<hr className="divider mb-6" />
										<div className="order-total d-flex justify-content-between align-items-center">
											<label>Total</label>
											<span className="ls-50">
												<span className="rupee">₹</span>100.00
											</span>
										</div>
										<a
											href="/checkout"
											className="btn btn-block btn-dark btn-icon-right btn-rounded btn-checkout"
										>
											Proceed to checkout
											<i className="w-icon-long-arrow-right"></i>
										</a>
									</div>
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
						data-previewListener="true"
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
export default Cart;
