import React, { useEffect, useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";

import '../styles/shop.css'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {

	const [data, setProductsData] = useState(products);

	useEffect(() => {
		const completedProducts = products.filter(item => item.category === 'Android' || 'PHP' || 'Python' || 'React JS');
		setProductsData(completedProducts);
	}, [])

	const handleFilter = e => {

		const filterValue = e.target.value

		if (filterValue === 'Show') setProductsData(products);

		if (filterValue === 'Android') {
			const filteredProducts = products.filter(item => item.category === 'Android')
			setProductsData(filteredProducts)
		}

		if (filterValue === 'PHP') {
			const filteredProducts = products.filter(item => item.category === 'PHP')
			setProductsData(filteredProducts)
		}

		if (filterValue === 'Python') {
			const filteredProducts = products.filter(item => item.category === 'Python')
			setProductsData(filteredProducts)
		}

		if (filterValue === 'React JS') {
			const filteredProducts = products.filter(item => item.category === 'React JS')
			setProductsData(filteredProducts)
		}
	};

	const handleSearch = e => {
		const searchTerm = e.target.value;

		const searchedProduct = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

		setProductsData(searchedProduct)
	};

	const handleSort = (e) => {
		const sortValue = e.target.value;

		if (sortValue === 'Show') {
			// Show all products without sorting
			setProductsData([...products]);
		} else {
			const sortedProducts = [...products].sort((a, b) => {
				if (sortValue === 'ascending') {
					return a.price - b.price;
				} else if (sortValue === 'descending') {
					return b.price - a.price;
				}
				return 0; // Default case
			});

			setProductsData(sortedProducts);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (

		<Helmet title='Shop'>

			<CommonSection title={'Shop'} />

			<section className="slider">
				<Container>
					<Row>

						<Col lg='3' md='6'>
							<div className="filter__widget">
								<select onChange={handleFilter}>
									<option>Filter by Category</option>
									<option value='Show'>Show All</option>
									<option value='Android'>Android</option>
									<option value='PHP'>PHP</option>
									<option value='React JS'>React JS</option>
									<option value='Python'>Python</option>
								</select>
							</div>
						</Col>

						<Col lg='3' md='6' className="sort text-end">
							<div className="filter__widget">
								<select onChange={handleSort}>
									<option>Sort by price</option>
									<option value='Show'>Show All</option>
									<option value='ascending'>Low to High</option>
									<option value='descending'>High to Low</option>
								</select>
							</div>
						</Col>

						<Col lg='6' md='12'>
							<div className="search__box">
								<input placeholder="Search Projects" type="text" onChange={handleSearch} />
								<span><i className="ri-search-line"></i></span>
							</div>
						</Col>

					</Row>
				</Container>
			</section>

			<section className="pt-0 slider">
				<Container>
					<Row>
						{
							data.length === 0
								? <h1 className="text-center fs-4">No Projects Found!</h1>
								: <ProductsList data={data} />
						}
					</Row>
				</Container>
			</section>

		</Helmet>
	);
};

export default Shop;