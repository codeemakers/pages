import React from 'react'
import './how.css'
import { howit } from '../../assets/images/ImagePaths'

const HowIt = () => {
	return (
		<div className="howit">
			<div className="section nobg mt-0 mb-0 pb-0">
				<div className="container">
					<div className="c1 heading-block nobottomborder center divcenter mb-0 clearfix">
					</div>
					<div className="deskContent">
						
						<center className='t2'>
							<h2 className="section__title mb-5">How It Works</h2>
						</center>

						<div className="row">
							
							<div className="col-sm-4 col-xs-4" >
								<div className="works">
									<div className="worksnum">
										<h1>1</h1>
									</div>
									<div className="worksdesc">
										<p>SELECT TOPIC <br />
											<span>New Projects are Available</span>
										</p>	 </div>
								</div>
							</div>

							<div className="col-sm-4 col-xs-4"  >
								<div className="works">
									<div className="worksnum">
										<h1>2</h1>
									</div>
									<div className="worksdesc">
										<p>DEMO VIDEO<br />
											<span>Watch Video Demo</span>
										</p>
									</div>
								</div>
							</div>

							<div className="col-sm-4 col-xs-4"  >
								<div className="works">
									<div className="worksnum">
										<h1>3</h1>
									</div>
									<div className="worksdesc">
										<p>ONLINE PAYMENT<br /><span>Card/Net Banking/UPI/Paypal/All Currency </span></p>	</div>
								</div>
							</div>

						</div>

						<div className="row mt-3" >
							
							<div className="col-sm-4"  >
								<div className="works">
									<div className="worksnum">
										<h1>4</h1>
									</div>
									<div className="worksdesc">
										<p>GET DELIVERY<br /><span>- Instant Download from Whatsapp <br />-  Mail or Github</span></p>	</div>

								</div>
							</div>

							<div className="col-sm-4" >
								<div className="works">
									<div className="worksnum">
										<h1>5</h1>
									</div>
									<div className="worksdesc">
										<p>REMOTE SUPPORT<br />
											<span>Get Remote Support by Anydesk<br/>(Max 2 Configuration)</span>
										</p>
									</div>
								</div>
							</div>

							<div className="col-sm-4">
								<div className="works">
									<div className="worksnum">
										<h1>6</h1>
									</div>
									<div className="worksdesc">
										<p>DEPLOYMENT<br /><span > Full Source Code & DB and Software</span></p> </div>

								</div>
							</div>
						</div>
						
						<div className="row mt-3" >
							
							<div className="col-sm-4" >
								<div className="works">
									<div className="worksnum">
										<h1>7</h1>
									</div>
									<div className="worksdesc">
										<p>GOOGLE MEET DEMO<br />
											<span >- Live Demo Explantion <br />- Recording Session</span></p>	</div>
								</div>
							</div>

							<div className="col-sm-4" >
								<div className="works">
									<div className="worksnum">
										<h1>8</h1>
									</div>
									<div className="worksdesc">
										<p>SUPPORT<br />
											<span>- Get Whatsapp & Call Support<br />- Till project completion. </span></p></div>
								</div>
							</div>

							<div className="col-sm-4" >
								<div className="works">
									<div className="worksnum">
										<h1>9</h1>
									</div>
									<div className="worksdesc">
										<p >ISSUE<br /><span>- Critical and Functionality fix only.</span></p>

									</div>
								</div>
							</div>
							
						</div>

					</div>
					{/* <!-- destkop content--> */}



					<div className="phoneContent"   >
						<h3 className="nott fw-bold fs-3">How It Works</h3>

						<div className="row"  >
							<div className="col-lg-12 col-sm-12 " >
								<img className="img-fluid" alt="Code Makers How it Works"
									src={howit} />
							</div>
						</div>
					</div>
					{/* <!-- phoneContent --> */}

				</div>

			</div>
		</div>

	)
}

export default HowIt