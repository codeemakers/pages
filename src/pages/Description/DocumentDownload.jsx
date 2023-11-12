import React from 'react'
import { NavLink, useParams } from "react-router-dom";
import './media-desc.css'

const DocumentDownload = ({name}) => {

	const { id } = useParams();

	return (

		<>
	
			<div class="w3eden mt-5">
				<div class="link-template-default border-dark card mb-2">
					<div class="card-body">
						<div class="media d-flex justify-content-between align-items-center">
							<div class="mr-3 img-48 doc-img">
								<img data-lazyloaded="1" src="https://shoppy.b-cdn.net/wp-content/plugins/download-manager/assets/file-type-icons/doc.png" class="wpdm_icon entered litespeed-loaded" alt="Icon" data-src="https://shoppy.b-cdn.net/wp-content/plugins/download-manager/assets/file-type-icons/doc.png" data-ll-status="loaded" />
								<noscript>
									<img class="wpdm_icon" alt="Icon" src="https://shoppy.b-cdn.net/wp-content/plugins/download-manager/assets/file-type-icons/doc.png" />
								</noscript>
							</div>
							<div class="media-body">
								<h4 class="package-title fs-4 fw-bold mb-1">
									<NavLink to={`/shop/download/${id}`}>
										{name}
									</NavLink>
								</h4>
								<div class="text-muted text-small text">
									<i class="ri-file-copy-line"></i> 1 file(s)
								</div>
							</div>
							<div class="ml-3">
								<a
									class="btn btn-success btn-lg"
									// v-bind:download="file.name"
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