import { Helmet } from 'react-helmet';
import InnerHeader from '../components/InnerHeader';
import Navigation from '../components/productDefault/Navigation';
import MainContent from '../components/productDefault/MainContent';
import SideBar from '../components/productDefault/SideBar';
import RelatedProducts from '../components/productDefault/RelatedProducts';
// import Footer from '../components/footer';
import RootElement from '../components/productDefault/RootElement';
import QuickView from '../components/productDefault/QuickView';
import ScrollTop from '../components/ScrollTop';

function ProductDefault() {
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
				<link
					rel="stylesheet"
					type="text/css"
					href="/assets/css/photoswipe.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="/assets/css/default-skin.min.css"
				/>
				{/* <!-- Plugin JS File --> */}
				<script src="/assets/js/parallax.min.js"></script>
				<script src="/assets/js/jquery.plugin.min.js"></script>
				{/* <script src="/assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script> */}
				<script src="/assets/js/swiper-bundle.min.js"></script>
				<script src="/assets/js/imagesloaded.pkgd.min.js"></script>
				<script src="/assets/js/skrollr.min.js"></script>
				<script src="/assets/js/jquery.zoom.js"></script>
				<script src="/assets/js/jquery.countdown.min.js"></script>
				<script src="/assets/js/photoswipe.min.js"></script>
				<script src="/assets/js/photoswipe-ui-default.min.js"></script>
				<script src="/assets/js/main.min.js"></script>
			</Helmet>{' '}
			<InnerHeader />
			<main className="main mb-10 pb-1">
				{/* navbar */}
				<Navigation />
				<div className="page-content">
					<div className="container">
						<div className="row gutter-lg mb-10">
							{/* maincontent */}
							<MainContent />
							{/* sidebar */}
							<SideBar />
						</div>
						{/* <RelatedProducts /> */}
					</div>
				</div>
			</main>
			{/* <Footer /> */}
			<ScrollTop />
			<RootElement />
			<QuickView />
		</>
	);
}

export default ProductDefault;
