import { Helmet } from 'react-helmet';
import InnerHeader from '../components/InnerHeader';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
function Login() {
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
				{/* <!-- jQuery --> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

				{/* <!-- Magnific Popup --> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

				<script src="/assets/js/main.min.js"></script>
			</Helmet>
			<InnerHeader />
			<main className="main login-page">
				<div className="page-header">
					<div className="container">
						<h1 className="page-title mb-0">My Account</h1>
					</div>
				</div>
				<nav className="breadcrumb-nav">
					<div className="container">
						<ul className="breadcrumb">
							<li>
								<a href="demo1.html">Home</a>
							</li>
							<li>My account</li>
						</ul>
					</div>
				</nav>
				<div className="page-content">
					<div className="container">
						<div className="login-popup">
							<div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
								<ul className="nav nav-tabs text-uppercase" role="tablist">
									<li className="nav-item">
										<a href="#sign-in" className="nav-link active">
											Sign In
										</a>
									</li>
									<li className="nav-item">
										<a href="#sign-up" className="nav-link">
											Sign Up
										</a>
									</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane active in" id="sign-in">
										<div className="form-group">
											<label>Username or email address *</label>
											<input
												type="text"
												className="form-control"
												name="username"
												id="username"
												required
											/>
										</div>
										<div className="form-group mb-0">
											<label>Password *</label>
											<input
												type="password"
												className="form-control"
												name="password"
												id="password"
												required
											/>
										</div>
										<div className="form-checkbox d-flex align-items-center justify-content-between">
											<input
												type="checkbox"
												className="custom-checkbox"
												id="remember1"
												name="remember1"
												required
											/>
											<label htmlFor="remember1">Remember me</label>
											<a href="#">Lost your password?</a>
										</div>
										<a href="#" className="btn btn-primary">
											Sign In
										</a>
									</div>
									<div className="tab-pane" id="sign-up">
										<div className="form-group">
											<label>Your email address *</label>
											<input
												type="email"
												className="form-control"
												name="email_1"
												id="email_1"
												required
											/>
										</div>
										<div className="form-group mb-5">
											<label>Password *</label>
											<input
												type="password"
												className="form-control"
												name="password_1"
												id="password_1"
												required
											/>
										</div>
										<div className="checkbox-content login-vendor">
											<div className="form-group mb-5">
												<label>First Name *</label>
												<input
													type="text"
													className="form-control"
													name="first-name"
													id="first-name"
													required
												/>
											</div>
											<div className="form-group mb-5">
												<label>Last Name *</label>
												<input
													type="text"
													className="form-control"
													name="last-name"
													id="last-name"
													required
												/>
											</div>
											<div className="form-group mb-5">
												<label>Shop Name *</label>
												<input
													type="text"
													className="form-control"
													name="shop-name"
													id="shop-name"
													required
												/>
											</div>
											<div className="form-group mb-5">
												<label>Shop URL *</label>
												<input
													type="text"
													className="form-control"
													name="shop-url"
													id="shop-url"
													required
												/>
												<small>
													https://d-themes.com/wordpress/wolmart/demo-1/store/
												</small>
											</div>
											<div className="form-group mb-5">
												<label>Phone Number *</label>
												<input
													type="tel"
													className="form-control"
													name="phone-number"
													id="phone-number"
													required
												/>
											</div>
										</div>
										<p>
											Your personal data will be used to support your experience
											throughout this website, to manage access to your account,
											and for other purposes described in our{' '}
											<a href="#" className="text-primary">
												privacy policy
											</a>
											.
										</p>
										<div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
											<input
												type="checkbox"
												className="custom-checkbox"
												id="remember"
												name="remember"
												required
											/>
											<label htmlFor="remember" className="font-size-md">
												I agree to the{' '}
												<a href="#" className="text-primary font-size-md">
													privacy policy
												</a>
											</label>
										</div>
										<a href="#" className="btn btn-primary">
											Sign Up
										</a>
									</div>
								</div>
								<p className="text-center">Sign in with social account</p>
								<div className="social-icons social-icon-border-color d-flex justify-content-center">
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
										className="social-icon social-google fab fa-google"
									></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />

			<ScrollTop />
		</>
	);
}
export default Login;
