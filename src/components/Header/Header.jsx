import React, { useEffect, useRef } from 'react'
import './header.css'
import { logo, userIcon } from '../../assets/images/ImagePaths'
import { Container, Row } from 'reactstrap'
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const navLinks = [
	{
		path: 'pages/home',
		display: 'Home'
	},
	{
		path: 'pages/projects',
		display: 'Projects'
	},
	{
		path: 'support',
		display: 'Support'
	},
	{
		path: 'contact',
		display: 'Contact'
	}
]

const Header = () => {

	const headerRef = useRef(null)
	const menuRef = useRef(null)
	const cartBtn = useNavigate()
	const totalQty = useSelector(state => state.cart.totalQuantity)

	const stickyHeader = () => {
		window.addEventListener('scroll', () => {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				headerRef.current.classList.add('sticky__header')
			}
			else {
				headerRef.current.classList.remove('sticky__header')
			}
		})
	}

	const menuToggle = () => {
		menuRef.current.classList.toggle('active__menu')
	}

	useEffect(() => {
		stickyHeader()

		return () => {
			window.removeEventListener('scroll', stickyHeader);
		}

	});

	const navigateToCart = () => cartBtn('/cart');
	const navigateToAcc = () => cartBtn('/my-account');

	return (
		<header className='header' ref={headerRef}>

			<Container>
				<Row>
					<div className="nav__wrapper">
						<div className="logo">
							<img src={logo} alt='Logo' />
							<div>
								<h1>Code Maker</h1>
								{/* <p>Since 1990</p> */}
							</div>
						</div>

						<div className="navigation" ref={menuRef} onClick={menuToggle}>
							<ul className="menu">

								{
									navLinks.map((item, index) => (
										<li className="nav__item" key={index}>
											<NavLink
												to={item.path}
												className={(navClass) =>
													navClass.isActive ? 'nav__active' : ''
												}
											>
												{item.display}
											</NavLink>
										</li>
									))
								}

							</ul>
						</div>

						<div className="nav__icons">
							{/* <span className="fav__icon">
							<i className="ri-heart-line"></i>
							<span className='badge'>1</span>
						</span> */}
							<span className="cart__icon" onClick={navigateToCart}>
								<i className="ri-shopping-bag-line"></i>
								<span className='badge'>{totalQty}</span>
							</span>

							<motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />

							<div className='profile'>


								<motion.button whileHover={{ scale: 1.1 }} className="btn">

									<div className='menu-container'>

										<div className="menu-trigger" >
											<Link to='/my-account'>MY ACCOUNT</Link>
										</div>

									</div>

									<Link to='/login'>LOGIN / REGISTER</Link>

								</motion.button>

							</div>

							<div className="mobile__menu">
								<span onClick={menuToggle}><i className="ri-menu-line"></i></span>
							</div>

						</div>

					</div>
				</Row>
			</Container>

		</header>
	)
}

function DropdownItem(props) {

	return (

		<li className="dropdownItem">
			<i className={props.i}></i>
			<Link to=''> {props.text} </Link>
		</li>

	);

}

export default Header