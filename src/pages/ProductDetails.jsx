import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList";
import '../styles/product-details.css'
import { motion } from "framer-motion";
import MediaDesc from "./Description/MediaDesc";

import DocumentDownload from "./Description/DocumentDownload";
import Description from "./Description/Description";
import products from "../assets/data/products";
import Reviews from "./Description/WriteReviews";

const ProductDetails = () => {

	const [tab, setTab] = useState('desc')

	const { id } = useParams();

	const product = products.find(item => item.id === id);
	const link = 'https://www.youtube.com/embed/mB8ajdvRnC0?si=p-SQRM1WthHWm8tn'

	const {
		imgUrl,
		productName,
		price,
		avgRating,
		category,
		reviews,
		description,
		shortDesc,
	} = product

	const relatedProd = products.filter((item) => item.category === category);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [product]);

	return (
		<Helmet title={productName}>

			<CommonSection title={productName} />

			<section className="pt-0">
				<Container>
					<Row>

						<Col lg='6' className="prod">
							<img className="product__img" src={imgUrl} alt="Product Image" />
						</Col>

						<Col lg='6'>
							<div className="product__details">
								<h2>{productName}</h2>
								<div className="product__rating d-flex align-items-center gap-5 mb-3">
									{/* <div>
										<span><i className="ri-star-s-fill"></i></span>
										<span><i className="ri-star-s-fill"></i></span>
										<span><i className="ri-star-s-fill"></i></span>
										<span><i className="ri-star-half-s-fill"></i></span>
										<span><i className="ri-star-half-s-fill"></i></span>
									</div>

									<p>(<span>4.2</span> ratings)</p> */}
									<span>{category} Project</span>
								</div>

								<div className="d-flex align-items-center gap-5">
									<span className="product__price">₹ {price}</span>
								</div>

								<p className="pt-3">{shortDesc}</p>

								{/* <button whileHover={{ scale: 1.04 }} className="buy__btn">
									Buy via Whatsapp
								</button> */}

								<a class="dark-btn" href="https://api.whatsapp.com/send/?phone=+917067207547&amp;text=I%20want%20to%20Buy%20Glow-Ui%20template">
									Buy Via Whatsapp
								</a>
							</div>
						</Col>

					</Row>
				</Container>
			</section>

			<section>
				<Container>
					<Row>

						<Col lg='12'>
							<div className="tab__wrapper d-flex align-items-center gap-5">
								<h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>
									Description
								</h6>
								<h6 className={`${tab === 'med' ? 'active__tab' : ''}`} onClick={() => setTab('med')}>
									Project Video
								</h6>
								<h6 className={`${tab === 'doc' ? 'active__tab' : ''}`} onClick={() => setTab('doc')}>
									Free Project Document
								</h6>
								<h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>
									Review
								</h6>
							</div>

							{
								tab === 'desc' ?

									<div className="tab__content mt-4">
										<Description desc={description} />
									</div>

									: tab === 'doc' ?

										<div className="tab__content mt-4">
											<DocumentDownload name={productName} />
										</div>

										: tab === 'med' ?

											<MediaDesc link={link} productName={productName} />

											: <Reviews />
							}

						</Col>

						<Col lg='12' className="mt-5">
							<h1 className="related__title mb-4 fs-4">You may also Like</h1>
						</Col>

						<ProductsList data={relatedProd} />

					</Row>
				</Container>
			</section>

		</Helmet>
	);
};

export default ProductDetails;