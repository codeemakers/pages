import React, { useState } from 'react'
import './FAQ.css'
import {set1,set2} from './FaqAPI'
import MyAccordion from './MyAccordion';
import { motion } from 'framer-motion'

const FAQ = () => {
	const [data1] = useState(set1);
	const [data2] = useState(set2);
  return (

	<div className='top-div'>
		<div className='left'>
			<section className="main-div1">

				{
					data1.map((curElem) => {
						const {id} = curElem;
						return <MyAccordion key={id} {...curElem} />
					})
				}			

			</section>
		</div>

		<div className='right'>
			<section className="main-div2">

				{
					data2.map((curElem) => {
						const {id} = curElem;
						return <MyAccordion key={id} {...curElem} />
					})
				}

			</section>

			{/* https://wa.me/919566731404 */}
			<center>
				<motion.button whileHover={{scale:1.1}} className='dgtBtn'>
					<a href="https://wa.me/918825700348" rel="noreferrer" target="_blank">
						Still Having Doughts?
					</a> 
				</motion.button>
			</center>
		</div>
	</div>
  
  )
}

export default FAQ;