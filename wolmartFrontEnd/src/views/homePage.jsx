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
// import Banner from './banner';

function homePage() {
	return (
		<>
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
		</>
	);
}

export default homePage;
