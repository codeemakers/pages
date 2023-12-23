import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList";
import '../styles/product-details.css'
import MediaDesc from "./Description/MediaDesc";

import Description from "./Description/Description";
import products from "../assets/data/products";
import Reviews from "./Description/WriteReviews";

const ProductDetails = () => {

	const [reviewsCount, setReviewsCount] = useState();
	const [errorMsg, setErrorMsg] = useState('');
	const api = process.env.REACT_APP_TEST_SHEETAPI

	const [tab, setTab] = useState('desc')

	const { id } = useParams();

	const product = products.find(item => item.id === id);

	const {
		imgUrl,
		productName,
		price,
		category,
		objectives,
		youtubeLink
	} = product

	const relatedProd = products.filter((item) => item.category === category);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [product]);


	const getReviews = async () => {

		try {
			await fetch(api)
				.then(res => res.json())
				.then(data => {
					let review = data.review;
					setReviewsCount(review.length)
				})
		} catch (error) {
			console.log(error)
			setErrorMsg('Opps, Unable to fetch Google Reviews')
		}

	}

	useEffect(() => {
		getReviews();
	});

	var chat = `Hi Code Makers, I want ${productName} Project`;

	return (
		<Helmet title={productName}>

			<CommonSection title={productName} />

			<section className="pt-0 pb-0">
				<Container>
					<Row>

						<Col lg='6' className="prod">
							<img className="product__img" src={imgUrl} alt="Product Img" />
						</Col>

						<Col lg='6'>
							<div className="product__details">
								<h2>{productName}</h2>
								<div className="product__rating align-items-center gap-5 mb-3">
									<span>{category} Project</span>
								</div>

								<div className="d-flex align-items-center gap-5">
									<span className="product__price">₹ {price}</span>
								</div>

								<p className="pt-3">{objectives}</p>

								{/* <button whileHover={{ scale: 1.04 }} className="buy__btn">
									Buy via Whatsapp
								</button> */}

								<a className="dark-btn" rel="noreferrer" target='_blank'
									href={`${process.env.REACT_APP_WA_LINK}${chat}`}
								>
									Buy Via Whatsapp
								</a>
							</div>
						</Col>

					</Row>
				</Container>
			</section>

			<section className="mt-0">
				<Container>
					<Row>

						<Col lg='12' className="m-content-video">
							<h1 className="related__title fs-5 mt-0">Project Video</h1>
							<MediaDesc link={youtubeLink} productName={productName} />
						</Col>

						<Col lg='12' className="m-content-review">
							<Reviews count={reviewsCount} />
						</Col>

						<Col lg='12' className="tabs">
							<div className="tab__wrapper d-flex align-items-center gap-5">
								<h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>
									Description
								</h6>
								<h6 className={`${tab === 'med' ? 'active__tab' : ''}`} onClick={() => setTab('med')}>
									Project Video
								</h6>

								<h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>
									Review
								</h6>
							</div>

							{
								tab === 'desc' ?

									<div className="tab__content mt-4">
										<Description product={product} />
									</div>

									: tab === 'med' ?

										<MediaDesc link={youtubeLink} productName={productName} />

										: <Reviews count={reviewsCount} />
							}

						</Col>

						{
							relatedProd.length > 0 ?
								<>
									<Col lg='12' className="relatedProducts">
										<h1 className="related__title mb-4 fs-4">Other {category} Projects</h1>
									</Col>

									<ProductsList data={relatedProd} />
								</>
								: <div></div>
						}


					</Row>
				</Container>
			</section>

		</Helmet>
	);
};

export default ProductDetails;