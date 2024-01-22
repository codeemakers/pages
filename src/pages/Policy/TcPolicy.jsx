import React from 'react'
import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/UI/CommonSection'

const TCPolicy = () => {

	const appName = process.env.REACT_APP_NAME;
	const address = process.env.REACT_APP_ADDRESS;
	// const email = process.env.REACT_APP_EMAIL;

	return (

		<Helmet title="Terms & Conditions">

			<CommonSection title={"Terms & Conditions"} />

			<section className='policy-section'>

				<h4 className="section__title mb-3 hed">
					Terms & Conditions
				</h4>

				<center>
					<h5 className="section__title mt-4">Customer Service Aggreement</h5>
				</center>

				<h6>
					This Service Agreement effective as from purchased date of project, is made and entered into by and between Customer and {appName}, with a registered address located at {address}. (hereinafter the “Contractor”).
				</h6>

				<ol>

					<li><h5 className="section__title mt-4">DEFINTIONS</h5></li>

					<h6>For purposes of this Agreement, the following terms shall have the following meanings:</h6>

					<ol>
						<li>
							<h6>“Services” means any and all services specified in the scope of Work (as defined below).</h6>
						</li>
						<li>
							<h6>“Deliverables” means any tangible property, including software media, delivered to Customer under this Service Contract, as specified in the scope of Work.</h6>
						</li>
						<li>
							<h6>“Project” means the combination of Services and Deliverables to be provided under this Agreement.</h6>
						</li>
					</ol>

					<li><h5 className="section__title mt-4">Scope of Work</h5></li>

				</ol>

			</section>

		</Helmet>

	)

}

export default TCPolicy