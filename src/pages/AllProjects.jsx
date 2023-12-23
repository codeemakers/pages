import React, { useEffect } from 'react'
import '../styles/all-projects.css'
import { allProjects } from '../assets/images/ImagePaths';
import Helmet from '../components/Helmet/Helmet';
import TitleCard from '../components/UI/TitleCard';
import { motion } from 'framer-motion';

const AllProjects = ({category}) => {

	const cYear = new Date().getFullYear()
	const pYear = new Date().getFullYear() - 1

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (

		<Helmet title="Project Titles">

			<div id="content">

				<div className="container">

					<div className="row">

						<div className="col-lg-12 col-sm-12 hed">
							<img
								className="img-fluid" alt="android-projects-ideas-titles-topics-2021-2020"
								src={allProjects}
							/>
							{/* <h1>Android Projects Ideas Titles 2023 2022</h1> */}
						</div>

						<div className='pt'>

							<div className="heading-block nobottomborder center divcenter mb-0 clearfix pt1" >
								<h3>
									Latest {category && category} Projects Ideas {pYear} - {cYear}
								</h3>
							</div>

							<TitleCard />

						</div>

						{/* Banner */}
						<div className="mt-5 promo">

							<div className="container">
								<div className="content heading-block">

									<h6 className="uppercase ls1 mb-1">
										Filter Latest Android Projects And Choose The Best
									</h6>

									<h2 className="ls0 mt-2 mb-3">
										Buy Projects At <span>{process.env.REACT_APP_NAME}</span>
									</h2>

									<a className='call__btn'
										href={`tel:+91${process.env.REACT_APP_NUMBER}`}
									>
										<motion.button whileHover={{ scale: 1.1 }} className='buy__btn mt-0'>Call Now</motion.button>
									</a>
								</div>
							</div>
						</div>

					</div>

				</div>

			</div>

		</Helmet>


	);

}

export default AllProjects