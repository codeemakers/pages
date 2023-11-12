import React from 'react'
import '../../styles/product-details.css'
import { reviewGirl } from '../../assets/images/ImagePaths'

const WriteReviews = () => {

	return (

		<div className='write__review mt-5'>
			<div className="review__wrapper">

				<img src={reviewGirl} alt="" />

				<div className="content">
					<h2>Code Maker</h2>

					<h5>2 Google Reviews</h5>

					<div className="product__rating d-flex align-items-center gap-4 mb-3">
						<p><span>4.2</span></p>
						<div>
							<span><i className="ri-star-s-fill"></i></span>
							<span><i className="ri-star-s-fill"></i></span>
							<span><i className="ri-star-s-fill"></i></span>
							<span><i className="ri-star-s-fill"></i></span>
							<span><i className="ri-star-s-fill"></i></span>
						</div>
					</div>
				</div>

			</div>
			<center className='mt-5'>
				<a href='#' target='_blank' className="buy__btn">
					Write Review
				</a>
			</center>
		</div>

	)

}

export default WriteReviews