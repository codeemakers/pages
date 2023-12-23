import React from 'react'
import '../../styles/product-details.css'
import { reviewGirl } from '../../assets/images/ImagePaths'
import { motion } from 'framer-motion'

const WriteReviews = ({ count }) => {

	return (

		<div className='write__review mt-5'>

			<div className="review__wrapper">

				<img src={reviewGirl} alt="" />

				<div className="content">
					<h2>Code Makers</h2>

					<h5>{count} Google Reviews</h5>

					<div className="product__rating">
						<p><span>4.2</span></p>
						<div>
							<span><i className="ri-star-s-fill"></i></span>
							<span><i className="ri-star-s-fill"></i></span>
							<span><i className="ri-star-s-fill"></i></span>
							<span><i className="ri-star-s-fill"></i></span>
							<span><i className="ri-star-s-fill"></i></span>
						</div>
					</div>

					<center className='mt-1'>
						<a rel="noreferrer" href='https://g.page/r/CZnUI9aBrsC4EB0/review' target='_blank'>
							<motion.button whileHover={{ scale: 1.06 }} className="review__btn">
								Write Review
							</motion.button>
						</a>
					</center>

				</div>

			</div>

		</div>

	)

}

export default WriteReviews