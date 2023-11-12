import React, { useState } from 'react'

const MyAccordion = ({ques,ans}) => {
	
	const [show,setShow] = useState(false);
  return (
	<>
		<div className="main-heading">
			<p onClick={() => setShow(!show)}>{ !show ? '➕' : '➖' }</p>
			<h3>{ques}</h3>
		</div>
		{ show && <p className='answers'>{ans}</p> }
	</>
  )
}

export default MyAccordion