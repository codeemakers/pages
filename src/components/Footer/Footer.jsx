import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import './footer.css'


const Footer = () => {
	const year = new Date().getFullYear()

	return <footer className='footer mt-5'>

		<Container>
			<Row>

				<Col lg='4' className='mb-4' md='6'>
					<div className="logo">
						<div>
							<h1 className='text-white'>Code Maker</h1>
						</div>
					</div>
					<p className="footer__text mt-4">
						We believe in Simple, Creative & Unique Project Standards & with Responsive Approach. Browse the best latest Android, PHP & Python projects that <strong>Code Maker</strong> offers.
					</p>
				</Col>

				<Col lg='3' md='3' className='mb-2'>
					<div className="footer__quick-links">
						<h4 className='quick__links-title'>About Us</h4>
						<ListGroup className='mb-3'>
							<ListGroupItem className='ps-0 border-0'>
								<Link to='#'>Terms & Conditions</Link>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0'>
								<Link to='#'>Privacy & Policy</Link>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0'>
								<Link to='#'>Cancellation & Refund Policy</Link>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0'>
								<Link to='#'>Delivery Policy</Link>
							</ListGroupItem>
						</ListGroup>
					</div>
				</Col>

				<Col lg='2' md='3' className='mb-2'>

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

				</Col>

				<Col lg='3' md='4'>

					<div className="footer__quick-links">
						<h4 className='quick__links-title'>Contact Us</h4>
						<ListGroup className='footer__contact'>
							<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
								<span><i className="ri-map-pin-line"></i></span>
								<p>#9E, Venco Staff Quatres, Baliganapalli</p>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
								<span><i className="ri-phone-line"></i></span>
								<p>9566731404 / 9865152810</p>
							</ListGroupItem>

							<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
								<span><i className="ri-mail-line">	</i></span>
								<p>shivakrishnan26@gmail.com</p>
							</ListGroupItem>

						</ListGroup>
					</div>

				</Col>

				<Col lg='12'>
					<p className="footer__copyright">
						Copyrights © {year} All Rights Reserved by Code Maker
					</p>
				</Col>

			</Row>
		</Container>

	</footer>
}

export default Footer