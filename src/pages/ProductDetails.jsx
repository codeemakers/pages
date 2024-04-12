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
	const [avgStar, setAvgStar] = useState();
	const [errorMsg, setErrorMsg] = useState('');
	const api = process.env.REACT_APP_SHEETAPI

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

		return wordMap[word] || 0; // Default to 1 if the word is not found in the map
	};

	const getReviews = async () => {

		try {
			await fetch(api)
				.then(res => res.json())
				.then(data => {
					let review = data.review;

					// Convert words to numbers and calculate the average
					let sum = 0;
					let count = 0; // Counter for the number of valid reviews
					review.forEach(reviews => {
						// Assuming the numbers in words are at index 3
						const numberInWords = reviews[3].toUpperCase(); // Ensure all words are in uppercase for consistency

						// Convert words to numbers
						const number = convertWordToNumber(numberInWords);

						if (number !== 0) {
							sum += number;
							count++;
						}

					});

					// Calculate the average
					// const average = (sum / review.length).toFixed(1);
					const average = count > 0 ? (sum / count).toFixed(1) : 0;

					// Set the average and the average in the state
					setReviewsCount(count)
					setAvgStar(average);
				})
		} catch (error) {
			console.log(error)
			setErrorMsg('Network error while fetching the reviews')
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
							<Reviews count={reviewsCount} error={errorMsg} avgStar={avgStar} />
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

										: <Reviews count={reviewsCount} avgStar={avgStar} error={errorMsg} />
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