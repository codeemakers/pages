import React from 'react'
import './shopheader.css'
import {logo} from '../../assets/images/ImagePaths'

const ShopHeader = () => {
  

	return (

		<div className='cont'>

			<div className='sec'>

					<div className="logo">
						<img src={logo} alt='Logo' />
						<div>
							<h1>Project Nexus</h1>
						</div>
					</div>

					<div className='inputSection'>

						<input className='input' type="text" placeholder='Search...'/>

					</div>

			</div>

		</div>

	);


}

export default ShopHeader