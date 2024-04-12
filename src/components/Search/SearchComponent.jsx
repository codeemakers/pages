// SearchComponent.jsx
import React, { useEffect, useState } from 'react';
import products from '../../assets/data/products';
import './search.css'; // Import your CSS file for styling
import ProductsList from '../UI/ProductsList';
import { Container, Row } from 'reactstrap';
import LoadingComponent from '../Loading/LoadingComponent';

const SearchComponent = ({ isVisible, onClose }) => {

	const [data, setProductsData] = useState(products);
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = e => {

		setLoading(true);
		setSearchQuery(e.target.value);
		setTimeout(() => {
			const searchedProduct = products.filter(item => item.productName.toLowerCase().includes(searchQuery.toLowerCase()))

			setProductsData(searchedProduct)
			setLoading(false);
		}, 2000); // Simulated delay of 2 seconds

		if (!isVisible) {
			setSearchQuery('');
			setProductsData(products);
		}
	};

	useEffect(() => {
		if (isVisible) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
			setSearchQuery('');
			setProductsData(products);
		}

		return () => {
			document.body.classList.remove('no-scroll');
		};
	}, [isVisible]);

	return (
		<div className="search-container">
			<div className={`search-page ${isVisible ? 'visible' : ''}`}>

				<div className="search-input-container mt-3">
					<input
						type="text"
						className="home-search-input"
						placeholder="Search for projects"
						autoComplete='off'
						onChange={handleSearch}
						name='search__field'
						style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
					/>
					<p onClick={onClose} className='clear-button' style={{ pointerEvents: isVisible ? 'auto' : 'none' }}></p>
					{/* &#10006; */}
				</div>

				<hr />
				<div className="search-info-text">
					{
						searchQuery === '' ?
							<span>Start typing to see projects you are looking for.</span>
							: ''
					}
				</div>

				<section className="pt-0 slider">
					<Container>
						<Row>
							{

								loading ? (<LoadingComponent />)
									: data.length === 0
										? <h1 className="text-center fs-4">No Projects Found!</h1> : searchQuery !== ''
											? <ProductsList data={data} />
											: <></>

							}
						</Row>
					</Container>
				</section>

			</div>
		</div>
	);
};

export default SearchComponent;
