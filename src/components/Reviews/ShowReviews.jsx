import React, { useEffect, useState } from 'react'
import './Testimonial.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import LongText from '../UI/TextLength';
import Stars from '../UI/Stars';

const ShowReviews = () => {

	const [reviewData, setReviewData] = useState();
	const [errorMsg, setErrorMsg] = useState('');
	// const [loading, setLoading] = useState(false);
	const api = process.env.REACT_APP_SHEETAPI;

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

	// Function to convert words to numbers
	const convertWordToNumber = word => {
		const wordMap = {
			ONE: 1,
			TWO: 2,
			THREE: 3,
			FOUR: 4,
			FIVE: 5
			// Add more mappings as needed
		};

		return wordMap[word] || 1; // Default to 1 if the word is not found in the map
	};

	return (

		<div>
			{
				<div className='testi-container' >
					{

						errorMsg === ''
							?
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
								{/* Carousel Starts */}
								{
									reviewData?.map((item, i) => {

										if (item[4] === true) {

											return <SwiperSlide key={i}>
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
													<div className="client-data-details">
														<p>{item[1]}</p>
													</div>
													<figure className="review__star">
														<Stars
															stars={convertWordToNumber(item[3])}
														/>
													</figure>
												</div>

											</SwiperSlide>;
										}
										return null;
									})
								}

							</Swiper>
							:
							<div className='mt-4'>
								<div className="alert alert-danger align-items-center justify-content-center">
									<p className='center fs-5 text-black'>{errorMsg}</p>
								</div>
							</div>
					}
				</div >
			}
		</div>
	);

}

export default ShowReviews