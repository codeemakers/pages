import React, { useEffect } from 'react'
import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/UI/CommonSection'

const DeliveryPolicy = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (

		<Helmet title="Delivery Policy">

			<CommonSection title={'Delivery Policy'} />

			<section className='policy-section'>

				<h4 className="section__title mb-3 hed">
					Delivery Policy
				</h4>

				<h6>
					<ol className='lh-lg'>
						<li>Customer get instant download links in whatsapp after payment.</li>
						<li>We will do the configuraion and demo in working hours only</li>
						<li>All deliverable in online and live session. No physical delivery is involved.</li>
						<li>In case of emergency support, we will do as per request.</li>
					</ol>
				</h6>

			</section>

		</Helmet>

	)

}

export default DeliveryPolicy