import React from 'react'
import './customproject.css'
import { motion } from 'framer-motion'

const CustomProject = () => {

	var text = 'Hi Code Makers, I want a custom project to be developed?';

	return (

		<div className='pt-3 mt-3'>

			<div className="suggestion">
				<div className="suggestion-wrapper seection" id="suggestion">
					<div className="widget Image" data-version="1" id="Image15">
						<div className="txt">
							<h2>Have any project in mind</h2>

							<a href={`${process.env.REACT_APP_WA_LINK}${text}`}
								rel="noreferrer" target='_blank'
							>
								<motion.button whileHover={{ scale: 1.1 }} className='text-btn'>
									Give Project
								</motion.button>
							</a>
						</div>
						<div className="pic">
							<img alt="Have any project in mind" id="Image15_img" src="https://cdni.iconscout.com/illustration/premium/thumb/presentation-4489889-3832825.png" />
						</div>
					</div>
				</div>
			</div>

		</div>

	)

}

export default CustomProject