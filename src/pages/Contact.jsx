import React, { useEffect } from 'react'
import '../styles/contact.css'
import { motion } from 'framer-motion';

const Contact = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (

		<>

			<section id="slider">
				<div>
					<div class="container topmargin-sm">
						<div class="row">

							<div class="col-lg-5 col-md-8">
								<div class="slider-title">
									<h2>Contact Details</h2>
								</div>
								<h3 class=" ls0 mt-4">
									<i class="ri-phone-line fs-3"></i>
									<a href="tel:+918825700348">
										+91 8825700348
									</a>
								</h3>
								<h3 class=" ls0 mb-3">
									<i class="ri-mail-line fs-3"></i>
									<a href="mailto:techservices.coo@gmail.com">
										techservices.coo@gmail.com
									</a>
								</h3>
							</div>

						</div>
					</div>
				</div>

			</section>

			{/* ##################################################### */}

			<section id="content">

				<div class="content-wrap pt-0">

					<div class="container">

						<div class="div3">
							<h3 class="ls0 mb-3 fs-3">Google Map</h3>
						</div>

						<div class="ratio ratio-21x9">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.135815156063!2d77.8399378145144!3d12.762447262528633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae76d21644eed7%3A0x6cb5ac06994b0d58!2sHosur%20IT%20Park!5e0!3m2!1sen!2sin!4v1687705846754!5m2!1sen!2sin"
								allowfullscreen='true'
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							>
							</iframe>
						</div>

					</div>

				</div>

			</section>

			{/* Promo/Contact ============================================ */}
			<div className="mt-5 promo">

				<div className="container">
					<div className="cont heading-block">

						<h6 className="uppercase ls1 mb-1">
							Download Latest Android Titles And Choice The Best
						</h6>

						<h2 className="ls0 mt-2 mb-4">
							Buy Projects At <span>Code Maker</span>
						</h2>

						<a href="tel:+918825700348">

							<motion.button
								whileHover={{ scale: 1.1 }}
								className='buy__btn mt-0'
							>
								Call Now
							</motion.button>
						</a>
					</div>
				</div>

			</div>

		</>
	);

}

export default Contact