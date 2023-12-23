import React, { useEffect } from 'react'
import '../styles/contact.css'
import { motion } from 'framer-motion';

const Contact = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const number = process.env.REACT_APP_NUMBER;
	const email = process.env.REACT_APP_EMAIL;

	return (

		<>

			<section id="slider">
				<div>
					<div className="container topmargin-sm">
						<div className="row">

							<div className="col-lg-5 col-md-8">
								<div className="slider-title">
									<h2>Contact Details</h2>
								</div>
								<h3 className="ls0 mt-4 text_contact">
									<i className="ri-phone-line fs-3"></i>
									<a href={`tel:+91${number}`}>
										+91 {number}
									</a>
								</h3>
								<h3 className="text_contact ls0 mb-3">
									<i className="ri-mail-line fs-3"></i>
									<a href={`mailto:+91${email}`}>
										{email}
									</a>
								</h3>
							</div>

						</div>
					</div>
				</div>

			</section>

			<section id="content">

				<div className="content-wrap pt-0">

					<div className="container">

						<div className="div3">
							<h3 className="ls0 mb-3 fs-3">Google Map</h3>
						</div>

						<div className="ratio ratio-21x9">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.478095572964!2d77.9183285!3d12.8769499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae75b1f97e8861%3A0xb8c0ae81d623d499!2sCode%20Maker!5e0!3m2!1sen!2sin!4v1699815694959!5m2!1sen!2sin"
								allowFullScreen
								loading="lazy"
								title='google-maps'
								referrerPolicy='no-referrer-when-downgrade'
							>
							</iframe>
						</div>

					</div>

				</div>

			</section>

			{/* Banner */}
			<div className="mt-5 promo">

				<div className="container">
					<div className="content heading-block">

						<h6 className="uppercase ls1 mb-1">
							Filter Latest Android Projects And Choose The Best
						</h6>

						<h2 className="ls0 mt-2 mb-3">
							Buy Projects At <span>{process.env.REACT_APP_NAME}</span>
						</h2>

						<a href={`tel:+91${number}`}>
							<motion.button whileHover={{ scale: 1.1 }} className='buy__btn mt-0'>Call Now</motion.button>
						</a>
					</div>
				</div>
			</div>

		</>
	);

}

export default Contact