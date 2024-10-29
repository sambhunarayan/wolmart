function RootElement() {
	return (
		<>
			<div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="pswp__bg"></div>
				<div className="pswp__scroll-wrap">
					<div className="pswp__container">
						<div className="pswp__item"></div>
						<div className="pswp__item"></div>
						<div className="pswp__item"></div>
					</div>
					<div className="pswp__ui pswp__ui--hidden">
						<div className="pswp__top-bar">
							<div className="pswp__counter"></div>
							<button
								className="pswp__button pswp__button--close"
								aria-label="Close (Esc)"
							></button>
							<button
								className="pswp__button pswp__button--zoom"
								aria-label="Zoom in/out"
							></button>
							<div className="pswp__preloader">
								<div className="loading-spin"></div>
							</div>
						</div>
						<div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
							<div className="pswp__share-tooltip"></div>
						</div>
						<button
							className="pswp__button--arrow--left"
							aria-label="Previous (arrow left)"
						></button>
						<button
							className="pswp__button--arrow--right"
							aria-label="Next (arrow right)"
						></button>
						<div className="pswp__caption">
							<div className="pswp__caption__center"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default RootElement;
