import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const ProductCard = ({ item }) => {

	const searchProjectOnClick = () => setTimeout(() => window.location.reload(), 500);

	return (

		<>
			<Col lg='3' md='4' className='mb-2'>

				<div className="product__item">
					<div className="product__img">
						<NavLink to={`/shop/${item.id}`} onClick={searchProjectOnClick}>
							<motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
						</NavLink>

					</div>

					<div className="p-2 product__info">
						<h3 className="product__name">
							<NavLink to={`/shop/${item.id}`} >
								{item.productName}
							</NavLink>
						</h3>
					</div>

					{/* <div className='product__card-bottom d-flex align-items-center justify-content-center p-2'>
				<span className='product__cat'>{item.category}</span>
				<motion.span whileTap={{scale:1.2}} onClick={addToCart}>
					<i className="ri-add-line"></i>
				</motion.span>
			</div> */}
				</div>

			</Col>
		</>

	)
}

export default ProductCard