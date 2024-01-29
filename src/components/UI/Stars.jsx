const Stars = ({ stars }) => {

	const ratingStar = Array.from({ length: 5 }, (elem, index) => {

		let num = index + 0.5;

		return (

			// i = 0, i = 1, i = 2, i =3, i = 4
			<span key={index}>

				{
					stars >= index + 1 ? (
						<i className="ri-star-fill icon"></i>
					) : stars >= num ? (
						<i className="ri-star-half-fill"></i>
					) : (
						<i className="ri-star-line icon"></i>
					)
				}

			</span>

		)
	})

	return (
		<div className='icon-style'>
			{ratingStar}
		</div>
	)

}

export default Stars