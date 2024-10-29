import { Helmet } from 'react-helmet';
import CategoryWrapper from '../components/homePage/categoryWrapper';
import IntroSection from '../components/homePage/introSection';
import SwiperContainer from '../components/homePage/swiperContainer';
import DealOfTheDay from '../components/homePage/dealOfTheDay';
import SwiperContainer2 from '../components/homePage/swiperContainer2';
import NotificationWrapper from '../components/homePage/notificationWrapper';
import LatestProducts from '../components/homePage/latestProducts';
import BannerWrapper from '../components/homePage/bannerWrapper';
import RecentlyViewed from '../components/homePage/recentlyViewed';
import LinkBanner from '../components/homePage/linkBanner';
import Ourclients from '../components/homePage/ourClients';
import Newsletter from '../components/homePage/newsLetter';
import Header from '../components/header';
import Footer from '../components/footer';
import ScrollTop from '../components/scrollTop';

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
				<script src="/assets/js/jquery.min.js"></script>
				<script src="/assets/js/parallax.min.js"></script>
				<script src="/assets/js/jquery.plugin.min.js"></script>
				<script src="/assets/js/swiper-bundle.min.js"></script>
				<script src="/assets/js/imagesloaded.pkgd.min.js"></script>
				<script src="/assets/js/skrollr.min.js"></script>
				<script src="/assets/js/jquery.magnific-popup.min.js"></script>
				<script src="/assets/js/jquery.zoom.js"></script>
				<script src="/assets/js/jquery.countdown.min.js"></script>
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
