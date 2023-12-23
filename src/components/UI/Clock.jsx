import React, { useEffect, useState } from 'react'
import './clock.css'

const Clock = () => {

	const [days, setDays] = useState();
	const [hours, setHours] = useState();
	const [mins, setMins] = useState();
	const [secs, setSecs] = useState();

	let interval;

	const countDown = ()=> {
		
		const dest = new Date(process.env.REACT_APP_OFFERDATE).getTime()
		interval = setInterval(()=> {

			const now = new Date().getTime()
			const diff = dest - now
			
			const days = Math.floor(diff / (1000 * 60 * 60 * 24))
			const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000*60*60))
			const mins = Math.floor(diff % (1000 * 60 * 60) / (1000*60))
			const secs = Math.floor(diff % (1000 * 60) / 1000)

			if(dest < 0) clearInterval(interval.current)
			else{
				setDays(days)
				setHours(hours)
				setMins(mins)
				setSecs(secs)
			}
		})
	}

	useEffect(() => {
		countDown()
	})

  return (
	<div className="clock__wrapper d-flex align-items-center gap-3">
		<div className="clock__data d-flex align-items-center gap-3">
			<div className='text-white text-center'>
				<h1 className='fs-3 mb-2'>{days} </h1>
				<h5 className='fs-6'>Days</h5>
			</div>
			<span className='text-white fs-3'>:</span>
		</div>

		<div className="clock__data d-flex align-items-center gap-3">
			<div className='text-white text-center'>
				<h1 className='fs-3 mb-2'>{hours} </h1>
				<h5 className='fs-6'>Hours</h5>
			</div>
			<span className='text-white fs-3'>:</span>
		</div>

		<div className="clock__data d-flex align-items-center gap-3">
			<div className='text-white text-center'>
				<h1 className='fs-3 mb-2'>{mins} </h1>
				<h5 className='fs-6'>Minutes</h5>
			</div>
			<span className='text-white fs-3'>:</span>
		</div>

		<div className="clock__data d-flex align-items-center gap-3">
			<div className='text-white text-center'>
				<h1 className='fs-3 mb-2'>{secs} </h1>
				<h5 className='fs-6'>Seconds</h5>
			</div>
		</div>
	</div>
  )
}

export default Clock