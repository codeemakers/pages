import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import './footer.css'


const Footer = () => {
	const year = new Date().getFullYear()

	return <footer className='footer mt-5'>

		<Container>
			<Row>

				<Col lg='5' className='mb-4' md='6'>
					<div className="logo">
						<div>
							<h1 className='text-white'>Code Makers</h1>
						</div>
					</div>
					<p className="footer__text mt-4">
						We believe in Simple, Creative & Unique Project Standards & with Responsive Approach. Browse the best latest Android, PHP & Python projects that <Link to={'/'}><strong>Code Makers</strong></Link> offers.
					</p>
				</Col>

				<Col lg='3' md='3' className='mb-2'>
					<div className="footer__quick-links">
						<h4 className='quick__links-title'>About Us</h4>
						<ListGroup className='mb-3'>
							<ListGroupItem className='ps-0 border-0'>
								<Link to='/terms-conditions'>Terms & Conditions</Link>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0'>
								<Link to='/privacypolicy'>Privacy & Policy</Link>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0'>
								<Link to='/refundpolicy'>Cancellation & Refund Policy</Link>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0'>
								<Link to='/deliverypolicy'>Delivery Policy</Link>
							</ListGroupItem>
						</ListGroup>
					</div>
				</Col>

				{/* <Col lg='2' md='3' className='mb-2'>

					<div className="footer__quick-links">
						<h4 className='quick__links-title'>My Account</h4>
						<ListGroup className='mb-3'>
							<ListGroupItem className='ps-0 border-0'>
								<Link to='#'>Shop</Link>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0'>
								<Link to='#'>Cart</Link>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0'>
								<Link to='#'>Login</Link>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0'>
								<Link to='#'>My Wishlist</Link>
							</ListGroupItem>
						</ListGroup>
					</div>

				</Col> */}

				<Col lg='4' md='4'>

					<div className="footer__quick-links">
						<h4 className='quick__links-title'>Contact Us</h4>
						<ListGroup className='footer__contact'>
							<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
								<span><i className="ri-map-pin-line"></i></span>
								<p>Code Makers, Main Road, near Almeida Estate, Baliganapalli, Hosur</p>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
								<span><i className="ri-phone-line"></i></span>
								<p>{process.env.REACT_APP_NUMBER}</p>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
								<span><i className="ri-mail-line">	</i></span>
								<p>{process.env.REACT_APP_EMAIL}</p>
							</ListGroupItem>

						</ListGroup>
					</div>

				</Col>

				<Col lg='12'>
					<p className="footer__copyright">
						Copyrights © {year} All Rights Reserved by Code Makers
					</p>
				</Col>

			</Row>
		</Container>

	</footer>
}

export default Footer