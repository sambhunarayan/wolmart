// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function newsletter() {
	return (
		<>
			<div className="newsletter-popup mfp-hide">
				<div className="newsletter-content">
					<h4 className="text-uppercase font-weight-normal ls-25">
						Get Up to<span className="text-primary">25% Off</span>
					</h4>
					<h2 className="ls-25">Sign up to DreamDeal</h2>
					<p className="text-light ls-10">
						Subscribe to the DreamDeal market newsletter to receive updates on
						special offers.
					</p>
					<form
						action="#"
						method="get"
						className="input-wrapper input-wrapper-inline input-wrapper-round"
					>
						<input
							type="email"
							className="form-control email font-size-md"
							name="email"
							id="email2"
							placeholder="Your email address"
							required=""
						/>
						<button className="btn btn-dark" type="submit">
							SUBMIT
						</button>
					</form>
					<div className="form-checkbox d-flex align-items-center">
						<input
							type="checkbox"
							className="custom-checkbox"
							id="hide-newsletter-popup"
							name="hide-newsletter-popup"
							required=""
						/>
						<label
							// eslint-disable-next-line react/no-unknown-property
							for="hide-newsletter-popup"
							className="font-size-sm text-light"
						>
							Don&apos;t show this popup again.
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default newsletter;
