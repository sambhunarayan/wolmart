import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
function Wishlist() {
	return (
		<>
			<Helmet>
				{/* Google Fonts: Poppins and Jost */}
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Jost:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>

				{/* FontAwesome */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
					integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMtcLB2b6L6gTpZfJd5jV6uG4pI0Fj6Zj6ftHcV"
					crossOrigin="anonymous"
				/>

				{/* Swiper CSS */}
				<link
					rel="stylesheet"
					href="https://unpkg.com/swiper/swiper-bundle.min.css"
				/>

				{/* Animate.css */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
					integrity="sha384-7VHuuKuQ8QqK8eH3S3dG5Vw9jVt02TDuv4G7rVq4W6J6LxpmEt4EYz0pgi/E4Fxs"
					crossOrigin="anonymous"
				/>

				{/* Magnific Popup CSS */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
					integrity="sha384-Vi7GME3px92Oqklsu7s41QLMSVuBo9C+WmFSVq5/ZO0vw+sBqSKvgh5X/0SyD1ab"
					crossOrigin="anonymous"
				/>

				{/* Custom Style CSS */}
				<link rel="stylesheet" href="/assets/css/style.min.css" />

				{/* jQuery */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
					integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLR8wM3l5z5b5yJ+L+tvZq8I3Vz+3tLv5kxGq5nlJZ"
					crossOrigin="anonymous"
				></script>

				{/* Parallax */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js"
					integrity="sha384-lSmF1tEbhzgfs6PRyLZ+1hD1G0Vo8Go6y1VlsA4TjB/sJ17xdF8Za5P9k1tJZgIz"
					crossOrigin="anonymous"
				></script>

				{/* jQuery Plugin */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery-plugins/1.1.0/jquery.plugin.min.js"
					crossOrigin="anonymous"
				></script>

				{/* Magnific Popup */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
					integrity="sha384-GtVoTR/D6/hvCdqJeSRtDBZb48abMFJzUikUmrX9NckgKLRdF2qej6u3qW45B9tw"
					crossOrigin="anonymous"
				></script>

				{/* Swiper */}
				<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

				{/* imagesLoaded */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/imagesloaded/4.1.4/imagesloaded.pkgd.min.js"
					integrity="sha384-DNpWwx3iBbUjaP9sD1Gh7sbipUVGpQbkO9NlkG/ahQl28lfKv3xOFe/fITyPIVl7"
					crossOrigin="anonymous"
				></script>

				{/* Skrollr */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"
					integrity="sha384-ICywZzovzVHV26Of46Y70T9auFpKwLVv9GbYydMtnJ4DjzT2AvZhH8P4V4Skq0uG"
					crossOrigin="anonymous"
				></script>

				{/* jQuery Zoom */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.21/jquery.zoom.min.js"
					integrity="sha384-B0aGpU0VDa1s0v6zGpM55g09cjbP8ZZbhwdRMhSlduyV80XKOZP/QVG91D8Sdp2S"
					crossOrigin="anonymous"
				></script>

				{/* jQuery Countdown */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery-countdown/2.2.0/jquery.countdown.min.js"
					integrity="sha384-L9kO87vXTezXc7nLBo5vXaRGKZ+HzreR+fq0zpITuLnXMFm/nC5yDz6fjIlcX68K"
					crossOrigin="anonymous"
				></script>

				{/* PhotoSwipe */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.js"
					integrity="sha384-yZf9SRGs5S9mMlDDMklmfZKeZgT2Ez9yqWa1m4Z/fWtXSu9Wtb0W6/biLz9cy0zS"
					crossOrigin="anonymous"
				></script>

				{/* PhotoSwipe UI Default */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe-ui-default.min.js"
					integrity="sha384-Kth5+jh0HEhbCbl0A3LMt/eX9bEXD1NQb6V1FNZKjBd59qO2j/TLN3LCxSOGFDk+"
					crossOrigin="anonymous"
				></script>

				{/* Main Script - Replace with CDN if available */}
				<script src="/assets/js/main.min.js"></script>
			</Helmet>
			<Header />
			<main className="main wishlist-page">
				<div className="page-header">
					<div className="container">
						<h1 className="page-title mb-0">Wishlist</h1>
					</div>
				</div>
				<nav className="breadcrumb-nav mb-10">
					<div className="container">
						<ul className="breadcrumb">
							<li>
								<a href="demo1.html" data-previewlistener="true">
									Home
								</a>
							</li>
							<li>Wishlist</li>
						</ul>
					</div>
				</nav>
				<div className="page-content">
					<div className="container">
						<h3 className="wishlist-title">My wishlist</h3>
						<table className="shop-table wishlist-table">
							<thead>
								<tr>
									<th className="product-name">
										<span>Product</span>
									</th>
									<th></th>
									<th className="product-price">
										<span>Price</span>
									</th>
									<th className="product-stock-status">
										<span>Stock Status</span>
									</th>
									<th className="wishlist-action">Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="product-thumbnail">
										<div className="p-relative">
											<a href="/product-default">
												<figure>
													<img
														src="assets/img/products/7-1.jpg"
														alt="product"
														width="300"
														height="338"
													/>
												</figure>
											</a>
											<button type="button" className="btn btn-close">
												<i className="fas fa-times"></i>
											</button>
										</div>
									</td>
									<td className="product-name">
										<a href="/product-default">Blue Sky Trunk</a>
									</td>
									<td className="product-price">
										<ins className="new-price">
											<span className="rupee">₹</span>85.00
										</ins>
									</td>
									<td className="product-stock-status">
										<span className="wishlist-in-stock">In Stock</span>
									</td>
									<td className="wishlist-action">
										<div className="d-lg-flex">
											<a
												href="#"
												className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
											>
												Quick View
											</a>
											<a
												href="#"
												className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart"
											>
												Add to cart
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td className="product-thumbnail">
										<div className="p-relative">
											<a href="/product-default">
												<figure>
													<img
														src="assets/img/products/19-1.jpg"
														alt="product"
														width="300"
														height="338"
													/>
												</figure>
											</a>
											<button type="button" className="btn btn-close">
												<i className="fas fa-times"></i>
											</button>
										</div>
									</td>
									<td className="product-name">
										<a href="/product-default">Handmade Ring</a>
									</td>
									<td className="product-price">
										<ins className="new-price">
											<span className="rupee">₹</span>5.00
										</ins>
									</td>
									<td className="product-stock-status">
										<span className="wishlist-in-stock">In Stock</span>
									</td>
									<td className="wishlist-action">
										<div className="d-lg-flex">
											<a
												href="#"
												className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
											>
												Quick View
											</a>
											<a
												href="#"
												className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart"
											>
												Add to cart
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td className="product-thumbnail">
										<div className="p-relative">
											<a href="/product-default">
												<figure>
													<img
														src="assets/img/products/20.jpg"
														alt="product"
														width="300"
														height="338"
													/>
												</figure>
											</a>
											<button type="button" className="btn btn-close">
												<i className="fas fa-times"></i>
											</button>
										</div>
									</td>
									<td className="product-name">
										<a href="/product-default">Pencil Case</a>
									</td>
									<td className="product-price">
										<ins className="new-price">
											<span className="rupee">₹</span>54.00
										</ins>
									</td>
									<td className="product-stock-status">
										<span className="wishlist-in-stock">In Stock</span>
									</td>
									<td className="wishlist-action">
										<div className="d-lg-flex">
											<a
												href="#"
												className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
											>
												Quick View
											</a>
											<a
												href="#"
												className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart"
											>
												Add to cart
											</a>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="social-links">
							<label>Share On:</label>
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
									className="social-icon social-pinterest w-icon-pinterest"
								></a>
								<a
									href="#"
									className="social-icon social-email far fa-envelope"
								></a>
								<a
									href="#"
									className="social-icon social-whatsapp fab fa-whatsapp"
								></a>
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
export default Wishlist;
