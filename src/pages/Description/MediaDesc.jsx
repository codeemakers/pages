import React from 'react'
import './media-desc.css'
import { Container } from 'reactstrap';

const MediaDesc = ({link, productName}) => {

  return (

	<div className='mt-5'>

		{/* <p>
			<iframe 
				data-lazyloaded="1" 
				src={`https://www.youtube.com/embed/${link}`} 
				title="Youtube Video Player" 
				width="500" 
				height="375" 
				data-src={`https://www.youtube.com/embed/${link}`} 
				frameborder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen data-ll-status="loaded" 
				className="entered litespeed-loaded m-content"
			></iframe>
			<noscript>
				<iframe 
					title="Women Security - SMS Alert, Online Complaint Registering, Search Near by Police" 
					width="500" height="375" 
					src="https://www.youtube.com/embed/i-Fk-kZYsZw?feature=oembed" frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
					allowFullScreen data-ll-status="loaded"
					className="entered litespeed-loaded d-content"
				></iframe>
			</noscript>
		</p>

		<p>
			<iframe 
				data-lazyloaded="1" 
				src={`https://www.youtube.com/embed/${link}`} 
				title="YouTube video player" 
				data-src={`https://www.youtube.com/embed/${link}`} 
				allowFullScreen
				width="1250" 
				height="650" 
				frameborder="0" 
				data-ll-status="loaded" 
				className="entered litespeed-loaded d-content"
			>
			</iframe>
			<noscript>
				<iframe 
					title="YouTube video player" 
					src={`https://www.youtube.com/embed/${link}`} 
					allowFullScreen
					width="1250" 
					height="650" 
					frameborder="0"
				>
				</iframe>
			</noscript>
		</p> */}

		<Container>

		<div class="ratio ratio-16x9">
			<iframe 
				src={`https://www.youtube.com/embed/${link}`}
				// src='https://www.youtube.com/embed/mB8ajdvRnC0?si=p-SQRM1WthHWm8tn' 
				title={`${productName}`}
				allowFullScreen 
			/>
		</div>

		</Container>

	</div>
	

  )
}

export default MediaDesc