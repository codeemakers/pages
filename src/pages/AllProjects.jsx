import React, { useEffect } from 'react'
import '../styles/all-projects.css'
import { allProjects } from '../assets/images/ImagePaths';
import Helmet from '../components/Helmet/Helmet';
import TitleCard from '../components/UI/TitleCard';
import { motion } from 'framer-motion';

const AllProjects = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (

		<Helmet title="Project Titles">

			<section id="content">
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
									Latest Android Projects Ideas Titles 2023 2022
								</h3>
							</div>



							<TitleCard />

						</div>


						{/* Promo/Contact ============================================ */}
						<div className="mt-5 promo">

							<div className="container">
								<div className="cont heading-block">

									<h6 className="uppercase ls1 mb-1">
										Download Latest Android Titles And Choice The Best
									</h6>

									<h2 className="ls0 mt-2 mb-4">
										Buy Projects At <span>Code Maker</span>
									</h2>

									<a href="tel:+918825700348">
										<motion.button whileHover={{ scale: 1.1 }} className='buy__btn mt-0'>Call Now</motion.button>
									</a>
								</div>
							</div>
						</div>

						{/* #### */}
					</div>
				</div>

			</section>

		</Helmet>


	);

}

export default AllProjects