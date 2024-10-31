import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function IntroSection() {
	return (
		<>
			<div className="container mb-2">
				<div className="intro-section mb-2">
					<div className="row">
						<div className="intro-wrapper col-lg-9 mt-4 mb-4">
							<Swiper
								modules={[Navigation, Pagination, Autoplay]} // Set modules directly here
								spaceBetween={10}
								slidesPerView={1}
								pagination={{ clickable: true }}
								navigation
								loop={true}
								autoplay={{
									delay: 3000, // Time in milliseconds (3000 ms = 3 seconds)
									disableOnInteraction: false, // Continue autoplay after user interactions
								}}
							>
								{/* Slide 1 */}
								<SwiperSlide
									className="swiper-slide banner banner-fixed intro-slide intro-slide1 br-sm"
									style={{
										backgroundImage: `url("/assets/img/intro-3.jpg")`,
										backgroundColor: 'rgb(63, 62, 58)',
									}}
								>
									<div className="banner-content y-50 text-right">
										<h3
											className="banner-subtitle text-uppercase font-secondary font-weight-bolder slide-animate"
											data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '.5s', 'delay': '.2s'}"
										>
											From Online Store
										</h3>
										<h2
											className="banner-title font-secondary text-capitalize text-white slide-animate"
											data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.5s', 'delay': '.4s'}"
										>
											Men&apos;s Lifestyle Collection
										</h2>
										<h4
											className="banner-price-info font-weight-normal text-white ls-25 slide-animate"
											data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.5s', 'delay': '.4s'}"
										>
											Discount{' '}
											<span className="text-primary font-weight-bolder">
												50% OFF
											</span>{' '}
											This Week.
										</h4>
										<a
											href="index.html"
											className="btn btn-outline btn-white btn-rounded btn-icon-right slide-animate"
											data-animation-options="{'name': 'fadeInUpShorter', 'duration': '.5s', 'delay': '.6s'}"
										>
											Shop Now
											<i className="w-icon-long-arrow-right"></i>
										</a>
									</div>
								</SwiperSlide>

								{/* Slide 2 */}
								<SwiperSlide
									className="swiper-slide banner banner-fixed intro-slide intro-slide2 br-sm"
									style={{
										backgroundImage: `url("/assets/img/intro-2.jpg")`,
										backgroundColor: 'rgb(226, 226, 224)',
									}}
								>
									<div className="banner-content y-50">
										<h3
											className="banner-subtitle text-capitalize text-default font-secondary font-weight-bold slide-animate"
											data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.5s', 'delay': '.2s'}"
										>
											Special Discount On Sale
										</h3>
										<h2
											className="banner-title font-secondary text-dark ls-25 slide-animate"
											data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.5s', 'delay': '.4s'}"
										>
											Lotion for Beauties
										</h2>
										<h4
											className="banner-price-info font-weight-normal text-dark font-secondary ls-25 slide-animate"
											data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.5s', 'delay': '.4s'}"
										>
											Up to{' '}
											<span className="text-primary font-weight-bolder">
												30% OFF
											</span>
										</h4>
										<a
											href="index.html"
											className="btn btn-outline btn-dark btn-rounded btn-icon-right slide-animate"
											data-animation-options="{'name': 'fadeInUpShorter', 'duration': '.5s', 'delay': '.6s'}"
										>
											Shop Now
											<i className="w-icon-long-arrow-right"></i>
										</a>
									</div>
								</SwiperSlide>

								{/* Slide 3 */}
								<SwiperSlide
									className="swiper-slide banner banner-fixed intro-slide intro-slide3 br-sm"
									style={{
										backgroundImage: `url("/assets/img/intro-1.jpg")`,
										backgroundColor: 'rgb(234, 234, 234)',
									}}
								>
									<div className="banner-content y-50">
										<h3
											className="banner-subtitle text-uppercase text-primary font-secondary font-weight-bold slide-animate"
											data-animation-options="{'name': 'fadeInDownShorter', 'duration': '.5s', 'delay': '.2s'}"
										>
											From Online Store
										</h3>
										<h2
											className="banner-title font-secondary text-dark slide-animate"
											data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '.5s', 'delay': '.4s'}"
										>
											Women&apos;s Lifestyle Collection
										</h2>
										<hr
											className="divider slide-animate"
											data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.5s', 'delay': '.5s'}"
										/>
										<h5
											className="text-dark text-uppercase font-secondary font-weight-bold mb-2 slide-animate"
											data-animation-options="{'name': 'fadeInRightShorter', 'duration': '.5s', 'delay': '.4s'}"
										>
											For - Women
										</h5>
										<h5
											className="product-identifier font-weight-normal text-dark text-uppercase slide-animate"
											data-animation-options="{'name': 'fadeInUpShorter', 'duration': '.5s', 'delay': '.6s'}"
										>
											Product Identifier:{' '}
											<span className="font-weight-bolder text-primary">
												DD2030
											</span>
										</h5>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className="intro-banner-wrapper col-lg-3 mt-4">
							<div className="banner banner-fixed intro-banner br-sm mb-4">
								<figure className="br-sm">
									<img
										src="/assets/img/banner-1.jpg"
										alt="Category Banner"
										width="680"
										height="180"
										style={{ backgroundColor: '#565960' }}
									/>
								</figure>
								<div className="banner-content">
									<h5 className="banner-subtitle text-uppercase text-lighter font-weight-bold">
										New In
									</h5>
									<h3 className="banner-title text-white font-secondary font-weight-bolder ls-25">
										Cosmetical
									</h3>
									<a
										href="index.html"
										className="btn btn-white btn-link btn-slide-right btn-icon-right btn-infinite"
									>
										Shop Now
										<i className="w-icon-long-arrow-right"></i>
									</a>
								</div>
							</div>
							{/* End of Intro Banner */}
							<div className="banner banner-fixed intro-banner intro-banner2 br-sm mb-4">
								<figure className="br-sm">
									<img
										src="/assets/img/banner-2.jpg"
										alt="Category Banner"
										width="680"
										height="180"
										style={{ backgroundColor: '#565960' }}
									/>
								</figure>
								<div className="banner-content">
									<h5 className="banner-subtitle text-uppercase text-default font-weight-bold">
										On Sale
									</h5>
									<h3 className="banner-title text-dark font-secondary font-weight-bolder ls-25">
										Kids Store
									</h3>
									<a
										href="index.html"
										className="btn btn-dark btn-link btn-slide-right btn-icon-right btn-infinite"
									>
										Shop Now
										<i className="w-icon-long-arrow-right"></i>
									</a>
								</div>
							</div>
							{/* End of Intro Banner */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default IntroSection;
