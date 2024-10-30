import { Swiper, SwiperSlide } from 'swiper/react';
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
								spaceBetween={0}
								slidesPerView={1}
								pagination={{ clickable: true }}
								navigation
								loop
								className="swiper-container swiper-theme pg-inner pg-white animation-slider"
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
										<h3 className="banner-subtitle text-uppercase font-secondary font-weight-bolder slide-animate">
											From Online Store
										</h3>
										<h2 className="banner-title font-secondary text-capitalize text-white slide-animate">
											Men&apos;s Lifestyle Collection
										</h2>
										<h4 className="banner-price-info font-weight-normal text-white ls-25 slide-animate">
											Discount{' '}
											<span className="text-primary font-weight-bolder">
												50% OFF
											</span>{' '}
											This Week.
										</h4>
										<a
											href="index.html"
											className="btn btn-outline btn-white btn-rounded btn-icon-right slide-animate"
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
										<h3 className="banner-subtitle text-capitalize text-default font-secondary font-weight-bold slide-animate">
											Special Discount On Sale
										</h3>
										<h2 className="banner-title font-secondary text-dark ls-25 slide-animate">
											Lotion for Beauties
										</h2>
										<h4 className="banner-price-info font-weight-normal text-dark font-secondary ls-25 slide-animate">
											Up to{' '}
											<span className="text-primary font-weight-bolder">
												30% OFF
											</span>
										</h4>
										<a
											href="index.html"
											className="btn btn-outline btn-dark btn-rounded btn-icon-right slide-animate"
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
										<h3 className="banner-subtitle text-uppercase text-primary font-secondary font-weight-bold slide-animate">
											From Online Store
										</h3>
										<h2 className="banner-title font-secondary text-dark slide-animate">
											Women&apos;s Lifestyle Collection
										</h2>
										<hr className="divider slide-animate" />
										<h5 className="text-dark text-uppercase font-secondary font-weight-bold mb-2 slide-animate">
											For - Women
										</h5>
										<h5 className="product-identifier font-weight-normal text-dark text-uppercase slide-animate">
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
							{/* Static banners */}
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default IntroSection;
