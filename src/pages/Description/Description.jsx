import React from 'react'
import './media-desc.css'
import DocumentDownload from './DocumentDownload';
import { faq } from '../../assets/images/ImagePaths';

const Description = ({ product }) => {

	return (

		<div>

			<div className="tab__content mt-1">

				<h4 className="section__title mt-4 mb-3">
					{product.productName.toUpperCase()}
				</h4>
				<h5 className="section__title mb-3">Abstract</h5>
				<h6 className='mb-0 pb-0'>{product.abstract}</h6>

				<DocumentDownload product={product} />

				<img src={faq} alt="" className='faq__img' />

				{/* <h5 className="section__title mt-4">Objectives</h5>
				<h6 className='mt-3'>{product.objectives}</h6> */}

				<h5 className="section__title mt-4">Software Requirements</h5>
				<h6 className='mt-3'>{product.swreq}</h6>

				<h5 className="section__title mt-4">Proposed System</h5>
				<h6 className='mt-3'>{product.proposed}</h6>

				<h5 className="section__title mt-4">System Modules</h5>
				{
					product.modules?.map((item, index) => (
						<div key={index} className='module mt-3'>
							<h6 className='module__name'>{item.name}</h6>
							<div className='module__desc mt-3'>
								<i className="ri-arrow-right-s-line"></i>
								<h6 className='pl-3'>{item.desc}</h6>
							</div>
						</div>
					))
				}

			</div>

		</div>

	);

}

export default Description