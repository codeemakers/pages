import React from 'react'
import '../../styles/product-details.css'
import { reviewGirl } from '../../assets/images/ImagePaths'
import { motion } from 'framer-motion'
import Stars from '../../components/UI/Stars'

const WriteReviews = ({ count, avgStar, error }) => {

	return (

		error !== ''
			?
			<div className='mt-4'>
				<div className="alert alert-danger align-items-center justify-content-center">
					<p className='center fs-5 text-black'>{error}</p>
				</div>
			</div> :

			<div className='write__review mt-5' >

				<div className="review__wrapper">

					<img src={reviewGirl} alt="" />

					<div className="content">
						<h2>Code Makers</h2>

						<h5>{count} Google Reviews</h5>

						<div className="product__rating">
							<p><span>{avgStar}</span></p>
							<Stars stars={avgStar} />
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