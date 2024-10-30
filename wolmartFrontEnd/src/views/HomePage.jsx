import { Helmet } from 'react-helmet';
import CategoryWrapper from '../components/homePage/CategoryWrapper';
import IntroSection from '../components/homePage/IntroSection';
import SwiperContainer from '../components/homePage/SwiperContainer';
import DealOfTheDay from '../components/homePage/DealOfTheDay';
import SwiperContainer2 from '../components/homePage/SwiperContainer2';
import NotificationWrapper from '../components/homePage/NotificationWrapper';
import LatestProducts from '../components/homePage/LatestProducts';
import BannerWrapper from '../components/homePage/BannerWrapper';
import RecentlyViewed from '../components/homePage/RecentlyViewed';
import LinkBanner from '../components/homePage/LinkBanner';
import Ourclients from '../components/homePage/OurClients';
import Newsletter from '../components/homePage/NewsLetter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

function homePage() {
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
					href="/assets/css/home.min.css"
				/>
				{/* Plugin JS Files */}
				{/* <!-- jQuery --> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

				{/* <!-- Parallax.js --> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js"></script>

				{/* <!-- jQuery Plugin (This might be customized; specify if you need a particular one) --> */}

				{/* <!-- Swiper --> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.min.js"></script>

				{/* <!-- imagesLoaded --> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js"></script>

				{/* <!-- Skrollr --> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"></script>

				{/* <!-- Magnific Popup --> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

				{/* <!-- jQuery Zoom --> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-zoom/1.7.21/jquery.zoom.min.js"></script>

				{/* <!-- jQuery Countdown --> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-countdown/2.2.0/jquery.countdown.min.js"></script>

				{/* <!-- Main Script (customized, no CDN) --> */}
				<script src="/assets/js/main.min.js"></script>
			</Helmet>
			<Header />
			<main className="main">
				{/* category */}
				<CategoryWrapper />
				{/* intro section */}
				<IntroSection />
				{/* swiper container */}
				<SwiperContainer />
				{/* deal of the day */}
				<DealOfTheDay />
				{/* swiper container 2 */}
				<SwiperContainer2 />
				{/* notification wrapper */}
				<NotificationWrapper />
				{/* latest products */}
				<LatestProducts />
				{/* banner wrapper */}
				<BannerWrapper />
				{/* selected products */}
				<RecentlyViewed />
				{/* link banner */}
				<LinkBanner />
				{/* our clients */}
				<Ourclients />
			</main>
			<Footer />

			<ScrollTop />
			<Newsletter />
		</>
	);
}

export default homePage;
