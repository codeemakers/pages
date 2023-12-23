import React from 'react'
import { NavLink } from "react-router-dom";
import './media-desc.css'

const DocumentDownload = ({product}) => {

	return (

		<>
	
			<div className="w3eden mt-4">
				<div className="link-template-default border-dark card mb-2">
					<div className="card-body">
						<div className="media d-flex justify-content-between align-items-center">
							<div className="mr-3 img-48 doc-img">
								<img data-lazyloaded="1" src="https://shoppy.b-cdn.net/wp-content/plugins/download-manager/assets/file-type-icons/doc.png" className="wpdm_icon entered litespeed-loaded" alt="Icon" data-src="https://shoppy.b-cdn.net/wp-content/plugins/download-manager/assets/file-type-icons/doc.png" data-ll-status="loaded" />
								<noscript>
									<img className="wpdm_icon" alt="Icon" src="https://shoppy.b-cdn.net/wp-content/plugins/download-manager/assets/file-type-icons/doc.png" />
								</noscript>
							</div>
							<div className="media-body">
								<h4 className="package-title fs-4 fw-bold mb-1">
									<NavLink to={`/shop/download/${product.id}`}>
										{product.productName}
									</NavLink>
								</h4>
								<div className="text-muted text-small text">
									<i className="ri-file-copy-line"></i> 1 file(s)
								</div>
							</div>
							<div className="ml-3">
								<a
									className="btn btn-success btn-lg"
									href={product.documentLink}
									target='_blank'
									rel="noreferrer"
								>
									Download
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>

	);

	


}

export default DocumentDownload