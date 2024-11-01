import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyAccount() {
	return (
		<>
			<Helmet>
				{/* Google Fonts */}
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Jost:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>

				{/* Font Awesome */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
					integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM7Z8Br3gkR5E9B0vK/G3eP4C8I1E9a9Ww5V0R8"
					crossOrigin="anonymous"
				/>

				{/* Swiper */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/10.0.0/swiper-bundle.min.css"
					integrity="sha384-n7pHlHc0BU5ykVrVdCRKk5CzMmNq+SFTkmbUbF4Tpm58Q45vDrI2R3+bwx5qDazA"
					crossOrigin="anonymous"
				/>

				{/* Animate.css */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
					integrity="sha384-MWMo5HQ4yIo8f+g+fbbmxDQLnHtXKtKaDgeXn+g88mOgqOHQKNXJH/U6Z8ZdeDl4"
					crossOrigin="anonymous"
				/>

				{/* Magnific Popup */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
					integrity="sha384-p8fpgvFojDlRMO8Hlg+eF7ifHrb9GuTUG5N1XZ28ltELzFZycVmNbnQVVVVDGFr/"
					crossOrigin="anonymous"
				/>

				{/* Custom Style */}
				<link rel="stylesheet" href="/assets/css/style.min.css" />
			</Helmet>
			<Header />
			<main className="main">
				<div className="page-header">
					<div className="container">
						<h1 className="page-title mb-0">My Account</h1>
					</div>
				</div>
				<nav className="breadcrumb-nav">
					<div className="container">
						<ul className="breadcrumb">
							<li>
								<a href="demo1.html" data-previewlistener="true">
									Home
								</a>
							</li>
							<li>My account</li>
						</ul>
					</div>
				</nav>
			</main>
			<div className="page-content pt-2">
				<div className="container">
					<div className="tab tab-vertical row gutter-lg">
						<ul className="nav nav-tabs mb-6" role="tablist">
							<li className="nav-item">
								<a href="#account-dashboard" className="nav-link">
									Dashboard
								</a>
							</li>
							<li className="nav-item">
								<a href="#account-orders" className="nav-link">
									Orders
								</a>
							</li>
							<li className="nav-item">
								<a href="#account-downloads" className="nav-link">
									Downloads
								</a>
							</li>
							<li className="nav-item">
								<a href="#account-addresses" className="nav-link active">
									Addresses
								</a>
							</li>
							<li className="nav-item">
								<a href="#account-details" className="nav-link">
									Account details
								</a>
							</li>
							<li className="link-item">
								<a href="/wishlist" data-previewlistener="true">
									Wishlist
								</a>
							</li>
							<li className="link-item">
								<a href="/assets/ajax/login" data-previewlistener="true">
									Logout
								</a>
							</li>
						</ul>
						<div className="tab-content mb-6">
							<div className="tab-pane" id="account-dashboard">
								<p className="greeting">
									Hello
									<span className="text-dark font-weight-bold">John Doe</span>
									(not
									<span className="text-dark font-weight-bold">John Doe</span>?
									<a href="#" className="text-primary">
										Log out
									</a>
									)
								</p>

								<p className="mb-4">
									From your account dashboard you can view your{' '}
									<a
										href="#account-orders"
										className="text-primary link-to-tab"
									>
										recent orders
									</a>
									, manage your{' '}
									<a
										href="#account-addresses"
										className="text-primary link-to-tab"
									>
										shipping and billing addresses
									</a>
									, and
									<a
										href="#account-details"
										className="text-primary link-to-tab"
									>
										edit your password and account details.
									</a>
								</p>

								<div className="row">
									<div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
										<a href="#account-orders" className="link-to-tab">
											<div className="icon-box text-center">
												<span className="icon-box-icon icon-orders">
													<i className="w-icon-orders"></i>
												</span>
												<div className="icon-box-content">
													<p className="text-uppercase mb-0">Orders</p>
												</div>
											</div>
										</a>
									</div>
									<div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
										<a href="#account-downloads" className="link-to-tab">
											<div className="icon-box text-center">
												<span className="icon-box-icon icon-download">
													<i className="w-icon-download"></i>
												</span>
												<div className="icon-box-content">
													<p className="text-uppercase mb-0">Downloads</p>
												</div>
											</div>
										</a>
									</div>
									<div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
										<a href="#account-addresses" className="link-to-tab">
											<div className="icon-box text-center">
												<span className="icon-box-icon icon-address">
													<i className="w-icon-map-marker"></i>
												</span>
												<div className="icon-box-content">
													<p className="text-uppercase mb-0">Addresses</p>
												</div>
											</div>
										</a>
									</div>
									<div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
										<a href="#account-details" className="link-to-tab">
											<div className="icon-box text-center">
												<span className="icon-box-icon icon-account">
													<i className="w-icon-user"></i>
												</span>
												<div className="icon-box-content">
													<p className="text-uppercase mb-0">Account Details</p>
												</div>
											</div>
										</a>
									</div>
									<div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
										<a
											className="link-to-tab"
											href="/wishlist"
											data-previewlistener="true"
										>
											<div className="icon-box text-center">
												<span className="icon-box-icon icon-wishlist">
													<i className="w-icon-heart"></i>
												</span>
												<div className="icon-box-content">
													<p className="text-uppercase mb-0">Wishlist</p>
												</div>
											</div>
										</a>
									</div>
									<div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
										<a href="#">
											<div className="icon-box text-center">
												<span className="icon-box-icon icon-logout">
													<i className="w-icon-logout"></i>
												</span>
												<div className="icon-box-content">
													<p className="text-uppercase mb-0">Logout</p>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div className="tab-pane mb-4" id="account-orders">
								<div className="icon-box icon-box-side icon-box-light">
									<span className="icon-box-icon icon-orders">
										<i className="w-icon-orders"></i>
									</span>
									<div className="icon-box-content">
										<h4 className="icon-box-title text-capitalize ls-normal mb-0">
											Orders
										</h4>
									</div>
								</div>

								<table className="shop-table account-orders-table mb-6">
									<thead>
										<tr>
											<th className="order-id">Order</th>
											<th className="order-date">Date</th>
											<th className="order-status">Status</th>
											<th className="order-total">Total</th>
											<th className="order-actions">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="order-id">#2321</td>
											<td className="order-date">August 20, 2021</td>
											<td className="order-status">Processing</td>
											<td className="order-total">
												<span className="order-price">
													<span className="rupee">₹</span>121.00
												</span>{' '}
												for
												<span className="order-quantity"> 1</span> item
											</td>
											<td className="order-action">
												<a
													href="#"
													className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
												>
													View
												</a>
											</td>
										</tr>
										{/* Repeat order rows as necessary */}
									</tbody>
								</table>

								<a
									href="shop-banner-sidebar.html"
									className="btn btn-dark btn-rounded btn-icon-right"
									data-previewlistener="true"
								>
									Go Shop<i className="w-icon-long-arrow-right"></i>
								</a>
							</div>

							<div className="tab-pane" id="account-downloads">
								<div className="icon-box icon-box-side icon-box-light">
									<span className="icon-box-icon icon-downloads mr-2">
										<i className="w-icon-download"></i>
									</span>
									<div className="icon-box-content">
										<h4 className="icon-box-title ls-normal">Downloads</h4>
									</div>
								</div>
								<p className="mb-4">No downloads available yet.</p>
								<a
									href="shop-banner-sidebar.html"
									className="btn btn-dark btn-rounded btn-icon-right"
									data-previewlistener="true"
								>
									Go Shop<i className="w-icon-long-arrow-right"></i>
								</a>
							</div>

							<div className="tab-pane active in" id="account-addresses">
								<div className="icon-box icon-box-side icon-box-light">
									<span className="icon-box-icon icon-map-marker">
										<i className="w-icon-map-marker"></i>
									</span>
									<div className="icon-box-content">
										<h4 className="icon-box-title mb-0 ls-normal">Addresses</h4>
									</div>
								</div>
								<p>
									The following addresses will be used on the checkout page by
									default.
								</p>
								<div className="row">
									<div className="col-sm-6 mb-6">
										<div className="ecommerce-address billing-address pr-lg-8">
											<h4 className="title title-underline ls-25 font-weight-bold">
												Billing Address
											</h4>
											<address className="mb-4">
												<table className="address-table">
													<tbody>
														<tr>
															<th>Name:</th>
															<td>John Doe</td>
														</tr>
														<tr>
															<th>Company:</th>
															<td>Conia</td>
														</tr>
														<tr>
															<th>Address:</th>
															<td>Wall Street</td>
														</tr>
														<tr>
															<th>City:</th>
															<td>California</td>
														</tr>
														<tr>
															<th>Country:</th>
															<td>United States (US)</td>
														</tr>
														<tr>
															<th>Postcode:</th>
															<td>92020</td>
														</tr>
														<tr>
															<th>Phone:</th>
															<td>1112223334</td>
														</tr>
													</tbody>
												</table>
											</address>
											<a
												href="#"
												className="btn btn-link btn-underline btn-icon-right text-primary"
											>
												Edit your billing address
												<i className="w-icon-long-arrow-right"></i>
											</a>
										</div>
									</div>
									<div className="col-sm-6 mb-6">
										<div className="ecommerce-address shipping-address pr-lg-8">
											<h4 className="title title-underline ls-25 font-weight-bold">
												Shipping Address
											</h4>
											<address className="mb-4">
												<table className="address-table">
													<tbody>
														<tr>
															<th>Name:</th>
															<td>John Doe</td>
														</tr>
														<tr>
															<th>Company:</th>
															<td>Conia</td>
														</tr>
														<tr>
															<th>Address:</th>
															<td>Wall Street</td>
														</tr>
														<tr>
															<th>City:</th>
															<td>California</td>
														</tr>
														<tr>
															<th>Country:</th>
															<td>United States (US)</td>
														</tr>
														<tr>
															<th>Postcode:</th>
															<td>92020</td>
														</tr>
														<tr>
															<th>Phone:</th>
															<td>1112223334</td>
														</tr>
													</tbody>
												</table>
											</address>
											<a
												href="#"
												className="btn btn-link btn-underline btn-icon-right text-primary"
											>
												Edit your shipping address
												<i className="w-icon-long-arrow-right"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
		</>
	);
}
export default MyAccount;
