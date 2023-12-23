import React from 'react'
import './media-desc.css'

const MediaDesc = ({ link, productName }) => {

	return (

		<div className=''>

			<iframe
				data-lazyloaded="1"
				data-src={link}
				src={link}
				title={`${productName}`}
				width="1200"
				height="500"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="entered litespeed-loaded d-content perfmatters-lazy loaded mt-5"
				data-mce-fragment="1"
				data-was-processed="true"
			/>

			<iframe
				data-lazyloaded="1"
				data-src={link}
				src={link}
				title={`${productName}`}
				width="1200"
				height="200"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="entered litespeed-loaded m-content perfmatters-lazy loaded mt-4"
				data-mce-fragment="1"
				data-was-processed="true"
			/>

		</div>
	)
}

export default MediaDesc