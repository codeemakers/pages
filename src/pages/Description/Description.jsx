import React from 'react'
import { useParams } from "react-router-dom";
import './media-desc.css'
import products from '../../assets/data/products';

const Description = ({desc}) => {
	
	const { id } = useParams();

	const product = products.find(item => item.id === id);

	const { description } = product

	return (

		<>

			<div className="tab__content mt-2">
				<h6 className=''>{desc}</h6>
			</div>
		
		</>

	);

}

export default Description