function LinkBanner() {
	return (
		<>
			<div className="container mb-4">
				<div
					className="banner link-banner-newsletter d-flex mb-8 align-items-center row gutter-no br-sm appear-animate fadeIn appear-animation-visible"
					style={{
						backgroundImage: `url("/assets/img/banner-6.jpg")`,
						backgroundColor: 'rgb(39, 57, 61)',
						animationDuration: '1.2s',
					}}
				>
					<div className="col-xl-5 col-lg-4 mr-auto">
						<figure className="banner-media d-lg-show">
							<img src="/assets/img/image-2.png" alt="Banner-image" />
						</figure>
					</div>
					<div className="banner-content col-xl-5 col-lg-6 col-sm-8 mb-4">
						<h2 className="banner-title text-white text-capitalize font-secondary font-weight-bolder">
							Download DreamDeal App Now!
						</h2>
						<p>
							Shopping fastly and easily more with our app. Get a link to
							download the app on your phone.
						</p>
						<form
							action="#"
							method="get"
							className="input-wrapper input-wrapper-inline flex-wrap input-wrapper-rounded text-dark"
						>
							<input
								className="form-control text-dark br-xs bg-white mr-2"
								type="email"
								placeholder="Enter Your Email..."
								name="email"
								id="email_4"
								required
							/>
							<button
								className="btn btn-primary btn-rounded br-xs"
								type="submit"
							>
								Send Link
							</button>
						</form>
					</div>
					<div className="col-lg-2 col-sm-4 newsletter-button">
						<a href="#">
							<img
								src="/assets/img/button-1.jpg"
								className="mb-4"
								alt="Button"
								width="141"
								height="41"
								style={{ backgroundColor: '#121315' }}
							/>
						</a>
						<a href="#">
							<img
								src="/assets/img/button-2.jpg"
								alt="Button"
								width="141"
								height="41"
								style={{ backgroundColor: '#121315' }}
							/>
						</a>
					</div>
					{/* End of Content Right */}
				</div>
			</div>
		</>
	);
}

export default LinkBanner;
