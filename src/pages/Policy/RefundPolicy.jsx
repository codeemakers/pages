import React, { useEffect } from 'react'
import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/UI/CommonSection'
import '../../styles/cart.css'

const RefundPolicy = () => {

	const cYear = new Date().getFullYear();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (

		<Helmet title={`Cancellation and Refund Policy - ${cYear}`}>

			<CommonSection title={'Cancellation and Refund Policy'} />

			<section className='policy-section'>

				<h4 className="section__title mb-3 hed">
					Cancellation and Refund Policy
				</h4>

				<h5 className="section__title mt-4">Refund Policy</h5>

				<h6 className='mt-3'>
					(1) Contractor failed to deliver the Deliverables (2) mentioned above within 3 days (Or)
				</h6>

				<h6 className='mt-3'>
					(2) If complete software deployment is failed in Customer Laptop, i.e configuration of software.
				</h6>

				<h6 className="mt-3">
					{`Customer can contact ${process.env.REACT_APP_EMAIL} for refund and the timeline for processing the refund will be 3 to 5 days.`}
				</h6>

				<h5 className="section__title mt-3">Cancellation Policy</h5>

				<h6 className="mt-3">
					No cancellation, after order is placed. Code Makers delivery instant download feature of source code which make customer services faster.
				</h6>

			</section>

		</Helmet>

	)

}

export default RefundPolicy
