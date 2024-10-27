import CategoryWrapper from './categoryWrapper';
import IntroSection from './introSection';
import SwiperContainer from './swiperContainer';
import DealOfTheDay from './dealOfTheDay';
import SwiperContainer2 from './swiperContainer2';
import NotificationWrapper from './notificationWrapper';
import LatestProducts from './latestProducts';
import BannerWrapper from './bannerWrapper';
import RecentlyViewed from './recentlyViewed';
import LinkBanner from './linkBanner';
import Ourclients from './ourClients';
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
