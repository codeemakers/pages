import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import './reviews.css'

import { qoute } from '../../assets/images/ImagePaths'

const Reviews = () => {

	const [reviewData, setReviewData] = useState();
	const api = process.env.REACT_SHEET_TEST_API

	const getReviews = async () => {

		try {
			await fetch(api)
				.then(res => res.json())
				.then(data => {
					let review = data.review;
					setReviewData(review);
				})
		} catch (error) {
			console.log(error)
		}

	}

	useEffect(() => {
		getReviews();
	}, [])

	return (

		<>

			<div className='review-section'>

				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					loop={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2,
					}}
					pagination={{ el: '.swiper-pagination', clickable: true }}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
						clickable: true,
					}}
					modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
					className="swiper-container"
				>

					{

						reviewData?.map((item, i) => (

							<SwiperSlide key={i}>
								<div className="testimonialBox">
									<img src={qoute} alt="" className='qoute' />
									<div className="content">
										<p>{item[2]}</p>
										<div className="details">
											<h3>
												{item[1]}<br />
												<span>Google Review</span>
											</h3>
										</div>
									</div>
								</div>
							</SwiperSlide>

						))

					}

					<div className="slider-controler">
						<div className="swiper-button-prev slider-arrow">
							<ion-icon name="arrow-back-outline"></ion-icon>
						</div>
						<div className="swiper-button-next slider-arrow">
							<ion-icon name="arrow-forward-outline"></ion-icon>
						</div>
						<div className="swiper-pagination"></div>
					</div>

				</Swiper>

			</div>
		</>
	);

}

export default Reviews