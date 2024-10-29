import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Optional: Import additional styles
import 'swiper/css/navigation'; // Optional: Import additional styles

function SwiperContainer() {
	const swiperOptions = {
		loop: true,
		spaceBetween: 0,
		breakpoints: {
			0: { slidesPerView: 2 },
			576: { slidesPerView: 3 },
			768: { slidesPerView: 4 },
			992: { slidesPerView: 4 },
			1200: { slidesPerView: 4 },
			1500: { slidesPerView: 4 },
		},
	};

	return (
		<div className="container mb-2">
			<Swiper {...swiperOptions}>
				{[...Array(3)].map((_, idx) => (
					<SwiperSlide key={idx} className="icon-box icon-box-side text-dark">
						<span
							className={`icon-box-icon ${
								['icon-shipping', 'icon-payment', 'icon-money'][idx]
							}`}
						>
							<i className={`w-icon-${['truck', 'bag', 'money'][idx]}`}></i>
						</span>
						<div className="icon-box-content">
							<h4 className="icon-box-title">
								{
									[
										'Free Shipping & Returns',
										'Secure Payment',
										'Money Back Guarantee',
									][idx]
								}
							</h4>
							<p className="text-default">
								{
									[
										'For all orders over $99',
										'We ensure secure payment',
										'Any back within 30 days',
									][idx]
								}
							</p>
						</div>
					</SwiperSlide>
				))}
				<SwiperSlide className="icon-box icon-box-side text-dark icon-box-chat mt-0">
					<span className="icon-box-icon icon-chat mr-lg-4">
						<i className="w-icon-chat"></i>
					</span>
					<div className="icon-box-content">
						<h4 className="icon-box-title">Customer Support</h4>
						<p className="text-default">Call or email us 24/7</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default SwiperContainer;
