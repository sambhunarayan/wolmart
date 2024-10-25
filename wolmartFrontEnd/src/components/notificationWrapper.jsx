import './App.css';

function notificationWrapper() {
	return (
		<>
			<div
				className="notification-wrapper bg-primary br-sm mb-10 appear-animate d-flex align-items-center justify-content-center fadeIn appear-animation-visible"
				style="animation-duration: 1.2s"
			>
				<i className="w-icon-mobile text-white"></i>
				<p className="font-secondary text-white">
					Download our new app today! Dont Miss our mobile-only offers and shop
					with Android Play.
				</p>
				<a
					href="#"
					className="btn btn-white btn-sm btn-outline btn-rounded btn-icon-right font-weight-bold text-capitalize"
				>
					Download
					<i className="w-icon-long-arrow-down"></i>
				</a>
			</div>
		</>
	);
}

export default notificationWrapper;
