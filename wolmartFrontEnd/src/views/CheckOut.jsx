import React from 'react';
import { Helmet } from 'react-helmet';
import InnerHeader from '../components/InnerHeader';
import ScrollTop from '../components/ScrollTop';
import { Link } from 'react-router-dom';
import LoginForm from '../components/checkout/LoginForm';
import CouponForm from '../components/checkout/CouponForm';
import Coupon from '../components/checkout/CouponForm';
import CheckoutForm from '../components/checkout/CheckOutForm';
function Checkout({ currentStep }) {
	return (
		<>
			<Helmet>
				<link rel="icon" type="image/png" href="assets/img/favicon.png" />
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
				<script src="/assets/js/parallax.min.js"></script>
				<script src="/assets/js/jquery.plugin.min.js"></script>
				<script src="/assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
				<script src="/assets/js/swiper-bundle.min.js"></script>
				<script src="/assets/js/imagesloaded.pkgd.min.js"></script>
				<script src="/assets/js/skrollr.min.js"></script>
				<script src="/assets/js/jquery.zoom.js"></script>
				<script src="/assets/js/jquery.countdown.min.js"></script>
				<script src="/assets/js/photoswipe.min.js"></script>
				<script src="/assets/js/photoswipe-ui-default.min.js"></script>
				<script src="/assets/js/main.min.js"></script>
			</Helmet>
			<InnerHeader />

			<main className="main checkout">
				<nav className="breadcrumb-nav">
					<div className="container">
						<ul
							className="breadcrumb shop-breadcrumb bb-no"
							role="navigation"
							aria-label="Breadcrumb"
						>
							<li className={currentStep === 'cart' ? 'passed' : ''}>
								<Link
									to="/cart"
									aria-current={currentStep === 'cart' ? 'step' : undefined}
								>
									Shopping Cart
								</Link>
							</li>
							<li
								className={
									currentStep === 'checkout'
										? 'active'
										: currentStep === 'order'
										? 'passed'
										: ''
								}
							>
								<Link
									to="/checkout"
									aria-current={currentStep === 'checkout' ? 'step' : undefined}
								>
									Checkout
								</Link>
							</li>
							<li className={currentStep === 'order' ? 'active' : ''}>
								<Link
									to="/order"
									aria-current={currentStep === 'order' ? 'step' : undefined}
								>
									Order Complete
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</main>
			<div className="page-content">
				<div className="container">
					<div className="login-toggle">
						Returning customer?{' '}
						<a
							href="#"
							className="show-login font-weight-bold text-uppercase text-dark"
						>
							Login
						</a>
					</div>
					<LoginForm />
					<div className="coupon-toggle">
						Have a coupon?{' '}
						<a
							href="#"
							className="show-coupon font-weight-bold text-uppercase text-dark"
						>
							Enter your code
						</a>
					</div>
					<Coupon />
					<CheckoutForm />
				</div>
			</div>
			<ScrollTop />
		</>
	);
}

export default Checkout;
