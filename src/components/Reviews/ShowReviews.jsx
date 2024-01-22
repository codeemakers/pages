import React, { useEffect, useState } from 'react'
import './Testimonial.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import { user } from '../../assets/images/ImagePaths'
import LongText from '../UI/TextLength';

const ShowReviews = () => {

	const [reviewData, setReviewData] = useState();
	const [errorMsg, setErrorMsg] = useState('');
	const [loading, setLoading] = useState(false);
	const api = process.env.REACT_APP_TEST_SHEETAPI;

	const getReviews = async () => {

		try {
			await fetch(api, { mode: 'cors', })
				.then(res => res.json())
				.then(data => {
					let review = data.review;
					setReviewData(review);
				})
		} catch (error) {
			console.log(error)
			setErrorMsg('Opps, Unable to fetch Google Reviews')
		}

	}

	useEffect(() => {
		getReviews();
	});

	return (

		<div>
			{
				<div div className='testi-container' >
					{

						errorMsg.length !== ''
							?
							<div className='mt-4'>
								<div className="alert alert-danger align-items-center justify-content-center">

									<p className='center fs-5 text-black'>{errorMsg}</p>
								</div>
							</div> :

							<Swiper
								slidesPerView={1}
								spaceBetween={20}
								autoplay={{
									delay: 2500,
									disableOnInteraction: true,
								}}
								pagination={{
									clickable: true,
								}}
								modules={[Pagination, Autoplay]}
								className="mySwiper sectionn testi-container"
								breakpoints={{
									640: {
										slidesPerView: 1,
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 1,
										spaceBetween: 20,
									},
									1024: {
										slidesPerView: 2,
										spaceBetween: 20,
									},
								}}
							>

								<div>

									{/* Carousel Starts */}
									{
										reviewData?.map((item, i) => (
											<SwiperSlide key={i}>

												<div className="swiper-client-msg">
													<div>
														<LongText
															limit={65}
															content={item[2]}
															title={item[1]}
														/>
													</div>
												</div>
												<div className="swiper-client-data grid grid-two-column">
													<figure className='user-img'>
														<img src={user} alt="Client Review" />
													</figure>
													<div className="client-data-details">
														<p>{item[1]}</p>
														<p>Google Review</p>
													</div>
												</div>

											</SwiperSlide>
										))
									}

								</div>

							</Swiper>

					}
				</div >
			}
		</div>
	);

}

export default ShowReviews