import React, { useEffect } from 'react'
import '../styles/support.css'
import { motion } from 'framer-motion'

const Support = () => {
  
	useEffect(() => {
		window.scrollTo(0,0);
	}, []);

	return (

		<div className="sections nobg mt-5 mb-0 pb-0 pt-5">
			
			<div className="container">
				
				<div className="div2 mb-4">
					<h3 className="nott ls0 mb-1">FAQs</h3>
					<h6> Get Technical &amp; Purchase FAQs</h6>
				</div>

				<div className="row">

					<div className="col-lg-6 col-sm-6">

						<div className=" ">
							<h3 className="text-transform-none ls0">1.	When will I get the project delivery link after payment?</h3>
							<p>You will get <b>Instant Download</b>. We will do the configuration and demo in working hours <b>Mon-Fri - 9:30AM to 6:00PM IST</b> and Sat(Min Support)</p>
						</div>

						<div className=" ">
							<h3 className="text-transform-none ls0">2.	How I get delivery and demo?</h3>
							<p>We will connect you through Anydesk or Splashtop software with Google Meet demo session.</p>
						</div>
						
						<div className=" ">
							<h3 className="text-transform-none ls0">3.	What does project purchase include?</h3>
							<p>1.Complete source code
							2. Full document/ report
							3. Installation &amp; configuration
							4. Project explanation &amp; demo
							5. Support till project completion</p>
						</div>

						<div className=" ">
							<h3 className="text-transform-none ls0">4.	How can I make the Payment?</h3>
							<p>Payment Options:
								•Debit Card
								•Credit Card
								•Net Banking
								•Google Pay
								•UPI Payment
								•Wallet
								•Direct Bank Transfer.
							</p>
						</div>
												
						<div className=" ">
							<h3 className="text-transform-none ls0">5.	Will I get a refund?</h3>
							<p>Yes, Check the  
								<span>
									<a target="_blank" rel="noreferrer" href="https://codeshoppy.com/shop/refundpolicy/">
										Refund Policy 
									</a>
								</span>
							</p>
						</div>
						
						<div className=" ">
							<h3 className="text-transform-none ls0">6.	Will your provide revisions / modifications?</h3>
							<p>a. 1 Revision we will provide like app name, color etc</p>
							<p>b. For functionality changes we will commit as per feasibility </p>
							<p>c. No Revision for Django and Premium PHP Projects </p>
						</div>
					</div>

					<div className="col-lg-6 col-sm-6 mt-0 pt-0">
						
						<div className=" ">
							<h3 className="text-transform-none ls0">7.	Can I edit the code by myself?</h3>
							<p>Yes you can do with change management video tutorials. But functionality changes at your own risk</p>
						</div>
						
						
						<div className=" ">
							<h3 className="text-transform-none ls0">8.	Will you do custom projects?</h3>
							<p>No, Currently we are not commiting New Custom projects</p>
						</div>
						
						<div className=" ">
							<h3 className="text-transform-none ls0">9.	What is the technology used for Android?</h3>
							<p>Using <b>Angularjs and Cordovo platform</b>, It's hybird app work with both android and web.</p>
						</div>
						
						<div className=" ">
							<h3 className="text-transform-none ls0">10.	Can I get the Full Project Report / Documentation?</h3>
							<p>Yes. You will get the well documented report Check Here 
							<a target="_blank" rel="noreferrer" href="https://codeshoppy.com/Sample%20Full%20Document.pdf">Sample Report</a>  </p>
						</div>
						
						<div className=" ">
							<h3 className="text-transform-none ls0">11. What should I do if there are any issues after the project delivery?</h3>
							<p>You can contact our support team if there are any issues.Tech Support: +91 9629754500  Whatsapp Now</p>
						</div>
						

						<div className=" ">
							<h3 className="text-transform-none ls0">12.How to buy the project?</h3>
							<p>Buy from official link 
							<a target="_blank" rel="noreferrer" href="https://codeshoppy.com/shop/"> Code Shoppy </a> through any of the online payment method available</p>
						</div>
				
					</div>	
				</div>

			</div>

			<div className="center">
				<a rel="noreferrer" target="_blank" href="https://wa.me/919629754500" > 
					<motion.button whileHover={{scale:1.1}} className="buy__btn">
						Still Having Doubts?
					</motion.button>
				</a>
			</div>
				
		</div>

	);


}

export default Support