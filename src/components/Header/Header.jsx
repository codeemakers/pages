import React, { useEffect, useRef, useState, lazy, Suspense } from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import LoadingComponent from '../Loading/LoadingComponent';

const SearchComponent = lazy(() => import("../Search/SearchComponent"));

const navLinks = [
	{
		path: '/',
		display: 'Home'
	},
	{
		path: 'projects',
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
	const [isSearchVisible, setIsSearchVisible] = useState(false);

	const text = 'Hi, Code Makers...'

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


	const handleToggleSearch = () => {
		setIsSearchVisible(!isSearchVisible);
	};

	useEffect(() => {
		stickyHeader()

		return () => {
			window.removeEventListener('scroll', stickyHeader);
		}

	});

	return (
		<>

			<header className='header' ref={headerRef}>

				<Container>
					<Row>
						<div className="nav__wrapper">

							<div className="mobile__menu">
								<span onClick={menuToggle}>
									<i className="ri-menu-2-line"></i>
								</span>
							</div>

							<div className="logo">
								{/* <img src={logo} alt='Logo' /> */}
								<div>
									<NavLink to={'/'}>
										<h1>Code Makers</h1>
									</NavLink>
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

								<span className="fav__icon">
									<i onClick={handleToggleSearch} className="ri-search-line"></i>
								</span>

								<span className="wa__icon">

									<a rel="noreferrer" target="_blank"
										href={`${process.env.REACT_APP_WA_LINK}${text}`}
									>
										<i className="ri-whatsapp-line"></i>
									</a>
								</span>

							</div>

						</div>
					</Row>
				</Container>
			</header>

			<Suspense fallback={<LoadingComponent />}>
				<SearchComponent isVisible={isSearchVisible} onClose={handleToggleSearch} />
			</Suspense>
		</>
	)
}

// function DropdownItem(props) {

// 	return (

// 		<li className="dropdownItem">
// 			<i className={props.i}></i>
// 			<Link to=''> {props.text} </Link>
// 		</li>

// 	);

// }

export default Header