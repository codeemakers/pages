import React from 'react'
import { Link } from 'react-router-dom'
import { Container} from 'reactstrap'
import '../../styles/common-section.css'

const CheckoutCommon = ({t1,t2,t3}) => {
	
	const className = 'fs-2 text-white link link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'

  return <section className="common__section">
	<Container className='text-center d-flex align-items-center justify-content-center gap-3'>
		<Link to={'/cart'} className={className}>{t1}</Link>
		<Link to={'/checkout'} className={className}>{t2}</Link>
		<h1 to={'/'} className='fs-2 text-white link'>{t3}</h1>
	</Container>
  </section>
}

export default CheckoutCommon