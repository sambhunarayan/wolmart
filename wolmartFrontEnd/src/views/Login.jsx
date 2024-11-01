// import { Helmet } from 'react-helmet';
// import Header from '../components/Header';
// import ScrollTop from '../components/ScrollTop';
// import Footer from '../components/Footer';
// function Login() {

// 	const [mobile, setMobile] = useState('');
// 	const [password, setPassword] = useState('');


// 	const handleLogin = async () => {
// 		const requestModel = {
// 			service: 'home',
// 			action: 'getHomeDeals',
// 		};

// 		try {
// 			const finalResponse = await fetchData(requestModel);
// 			console.log('Decrypted Response:', finalResponse);

// 			if (finalResponse.status === true) {
// 				console.log("Login Successfull")
// 			}
// 		} catch (error) {
// 			console.error('Error fetching deals:', error);
// 		}
// 	};


// 	return (
// 		<>
// 			<Helmet>
// 				<link rel="icon" type="image/png" href="/assets/img/favicon.png" />
// 				<link
// 					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Jost:wght@400;500;600;700;800&display=swap"
// 					rel="stylesheet"
// 				/>
// 				<link
// 					rel="preload"
// 					href="/assets/css/fontawesome-free/webfonts/fa-regular-400.woff2"
// 					as="font"
// 					type="font/woff2"
// 					crossOrigin="anonymous"
// 				/>
// 				<link
// 					rel="preload"
// 					href="/assets/css/fontawesome-free/webfonts/fa-solid-900.woff2"
// 					as="font"
// 					type="font/woff2"
// 					crossOrigin="anonymous"
// 				/>
// 				<link
// 					rel="preload"
// 					href="/assets/css/fontawesome-free/webfonts/fa-brands-400.woff2"
// 					as="font"
// 					type="font/woff2"
// 					crossOrigin="anonymous"
// 				/>
// 				<link
// 					rel="preload"
// 					href="/assets/fonts/wolmart.ttf?png09e"
// 					as="font"
// 					type="font/ttf"
// 					crossOrigin="anonymous"
// 				/>
// 				<link
// 					rel="stylesheet"
// 					type="text/css"
// 					href="/assets/css/fontawesome-free/css/all.min.css"
// 				/>
// 				<link
// 					rel="stylesheet"
// 					type="text/css"
// 					href="/assets/css/swiper-bundle.min.css"
// 				/>
// 				<link
// 					rel="stylesheet"
// 					type="text/css"
// 					href="/assets/css/animate.min.css"
// 				/>
// 				<link
// 					rel="stylesheet"
// 					type="text/css"
// 					href="/assets/css/magnific-popup.min.css"
// 				/>
// 				<link
// 					rel="stylesheet"
// 					type="text/css"
// 					href="/assets/css/style.min.css"
// 				/>
// 				{/* <!-- jQuery --> */}
// 				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

// 				{/* <!-- Magnific Popup --> */}
// 				<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

// 				<script src="/assets/js/main.min.js"></script>
// 			</Helmet>
// 			<Header />
// 			<main className="main login-page">
// 				<div className="page-header">
// 					<div className="container">
// 						<h1 className="page-title mb-0">My Account</h1>
// 					</div>
// 				</div>
// 				<nav className="breadcrumb-nav">
// 					<div className="container">
// 						<ul className="breadcrumb">
// 							<li>
// 								<a href="demo1.html">Home</a>
// 							</li>
// 							<li>My account</li>
// 						</ul>
// 					</div>
// 				</nav>
// 				<div className="page-content">
// 					<div className="container">
// 						<div className="login-popup">
// 							<div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
// 								<ul className="nav nav-tabs text-uppercase" role="tablist">
// 									<li className="nav-item">
// 										<a href="#sign-in" className="nav-link active">
// 											Sign In
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a href="#sign-up" className="nav-link">
// 											Sign Up
// 										</a>
// 									</li>
// 								</ul>
// 								<div className="tab-content">
// 									<div className="tab-pane active in" id="sign-in">
// 										<div className="form-group">
// 											<label>Username or email address *</label>
// 											<input
// 												type="text"
// 												className="form-control"
// 												name="username"
// 												id="username"
// 												required
// 											/>
// 										</div>
// 										<div className="form-group mb-0">
// 											<label>Password *</label>
// 											<input
// 												type="password"
// 												className="form-control"
// 												name="password"
// 												id="password"
// 												required
// 											/>
// 										</div>
// 										<div className="form-checkbox d-flex align-items-center justify-content-between">
// 											<input
// 												type="checkbox"
// 												className="custom-checkbox"
// 												id="remember1"
// 												name="remember1"
// 												required
// 											/>
// 											<label htmlFor="remember1">Remember me</label>
// 											<a href="#">Lost your password?</a>
// 										</div>
// 										<a href="#" className="btn btn-primary">
// 											Sign In
// 										</a>
// 									</div>
// 									<div className="tab-pane" id="sign-up">
// 										<div className="form-group">
// 											<label>Your email address *</label>
// 											<input
// 												type="email"
// 												className="form-control"
// 												name="email_1"
// 												id="email_1"
// 												required
// 											/>
// 										</div>
// 										<div className="form-group mb-5">
// 											<label>Password *</label>
// 											<input
// 												type="password"
// 												className="form-control"
// 												name="password_1"
// 												id="password_1"
// 												required
// 											/>
// 										</div>
// 										<div className="checkbox-content login-vendor">
// 											<div className="form-group mb-5">
// 												<label>First Name *</label>
// 												<input
// 													type="text"
// 													className="form-control"
// 													name="first-name"
// 													id="first-name"
// 													required
// 												/>
// 											</div>
// 											<div className="form-group mb-5">
// 												<label>Last Name *</label>
// 												<input
// 													type="text"
// 													className="form-control"
// 													name="last-name"
// 													id="last-name"
// 													required
// 												/>
// 											</div>
// 											<div className="form-group mb-5">
// 												<label>Shop Name *</label>
// 												<input
// 													type="text"
// 													className="form-control"
// 													name="shop-name"
// 													id="shop-name"
// 													required
// 												/>
// 											</div>
// 											<div className="form-group mb-5">
// 												<label>Shop URL *</label>
// 												<input
// 													type="text"
// 													className="form-control"
// 													name="shop-url"
// 													id="shop-url"
// 													required
// 												/>
// 												<small>
// 													https://d-themes.com/wordpress/wolmart/demo-1/store/
// 												</small>
// 											</div>
// 											<div className="form-group mb-5">
// 												<label>Phone Number *</label>
// 												<input
// 													type="tel"
// 													className="form-control"
// 													name="phone-number"
// 													id="phone-number"
// 													required
// 												/>
// 											</div>
// 										</div>
// 										<p>
// 											Your personal data will be used to support your experience
// 											throughout this website, to manage access to your account,
// 											and for other purposes described in our{' '}
// 											<a href="#" className="text-primary">
// 												privacy policy
// 											</a>
// 											.
// 										</p>
// 										<div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
// 											<input
// 												type="checkbox"
// 												className="custom-checkbox"
// 												id="remember"
// 												name="remember"
// 												required
// 											/>
// 											<label htmlFor="remember" className="font-size-md">
// 												I agree to the{' '}
// 												<a href="#" className="text-primary font-size-md">
// 													privacy policy
// 												</a>
// 											</label>
// 										</div>
// 										<a href="#" className="btn btn-primary">
// 											Sign Up
// 										</a>
// 									</div>
// 								</div>
// 								<p className="text-center">Sign in with social account</p>
// 								<div className="social-icons social-icon-border-color d-flex justify-content-center">
// 									<a
// 										href="#"
// 										className="social-icon social-facebook w-icon-facebook"
// 									></a>
// 									<a
// 										href="#"
// 										className="social-icon social-twitter w-icon-twitter"
// 									></a>
// 									<a
// 										href="#"
// 										className="social-icon social-google fab fa-google"
// 									></a>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</main>
// 			<Footer />
// 			<div className="compare-popup">
// 				<div className="container">
// 					<div className="compare-title">
// 						<h4 className="title title-center">Compare Products</h4>
// 					</div>
// 					<ul className="compare-product-list list-style-none">
// 						<li></li>
// 						<li></li>
// 						<li></li>
// 						<li></li>
// 					</ul>
// 					<a href="#" className="btn btn-clean">
// 						Clean All
// 					</a>
// 					<a
// 						href="compare.html"
// 						className="btn btn-dark btn-rounded"
// 						data-previewlistener="true"
// 					>
// 						Start Compare!
// 					</a>
// 				</div>
// 			</div>
// 			<div className="compare-popup-overlay"></div>
// 			<div className="minipopup-area"></div>
// 			<ScrollTop />
// 		</>
// 	);
// }
// export default Login;




import { Helmet } from 'react-helmet';
import { useState } from 'react'; // Import useState
import Header from '../components/Header';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
import { fetchData } from '../api/api';


function Login() {
	const [mobile, setMobile] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		const requestModel = {
			service: 'auth',
			action: 'login',
			input: {
				mobile: "8089183628",
				password: "Abcd#12345"
			},
		};

		try {
			const finalResponse = await fetchData(requestModel);
			console.log('Decrypted Response:', finalResponse);

			if (finalResponse.status === true) {
				localStorage.setItem("accessToken", finalResponse.data.access_token);
			}
		} catch (error) {
			console.error('Error fetching login data:', error);
		}
	};

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
					href="/assets/css/fontawesome-free/css/all.min.css"
				/>
				<link
					rel="stylesheet"
					href="/assets/css/swiper-bundle.min.css"
				/>
				<link
					rel="stylesheet"
					href="/assets/css/animate.min.css"
				/>
				<link
					rel="stylesheet"
					href="/assets/css/magnific-popup.min.css"
				/>
				<link
					rel="stylesheet"
					href="/assets/css/style.min.css"
				/>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
				<script src="/assets/js/main.min.js"></script>
			</Helmet>
			<Header />
			<main className="main login-page">
				<div className="page-header">
					<div className="container">
						<h1 className="page-title mb-0">My Account</h1>
					</div>
				</div>
				<nav className="breadcrumb-nav">
					<div className="container">
						<ul className="breadcrumb">
							<li><a href="demo1.html">Home</a></li>
							<li>My account</li>
						</ul>
					</div>
				</nav>
				<div className="page-content">
					<div className="container">
						<div className="login-popup">
							<div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
								<ul className="nav nav-tabs text-uppercase" role="tablist">
									<li className="nav-item"><a href="#sign-in" className="nav-link active">Sign In</a></li>
									<li className="nav-item"><a href="#sign-up" className="nav-link">Sign Up</a></li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane active in" id="sign-in">
										<div className="form-group">
											<label>Username or email address *</label>
											<input
												type="text"
												className="form-control"
												name="username"
												value={mobile}
												onChange={(e) => setMobile(e.target.value)}
												required
											/>
										</div>
										<div className="form-group mb-0">
											<label>Password *</label>
											<input
												type="password"
												className="form-control"
												name="password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												required
											/>
										</div>
										<div className="form-checkbox d-flex align-items-center justify-content-between">
											<input type="checkbox" className="custom-checkbox" id="remember1" name="remember1" required />
											<label htmlFor="remember1">Remember me</label>
											<a href="#">Lost your password?</a>
										</div>
										<button onClick={handleLogin} className="btn btn-primary">Sign In</button>
									</div>
									<div className="tab-pane" id="sign-up">
										{/* Sign Up form content here */}
									</div>
								</div>
								<p className="text-center">Sign in with social account</p>
								<div className="social-icons social-icon-border-color d-flex justify-content-center">
									<a href="#" className="social-icon social-facebook w-icon-facebook"></a>
									<a href="#" className="social-icon social-twitter w-icon-twitter"></a>
									<a href="#" className="social-icon social-google fab fa-google"></a>
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
