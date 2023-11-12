import React, { useEffect, useState } from 'react'
import LoadingPage from '../Loading/LoadingPage';
import { NavLink } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import products from '../../assets/data/products';

const TitleCard = () => {

	const [loading, setLoading] = useState(true);

	const [rows, setRows] = useState([]);

	useEffect(() => {
		if (loading == true) {
			setRows(products);
			setLoading(false);
		}
	}, []);

	if (loading) {
		return <LoadingPage />;
	}

	return(

		<>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} className='table-responsive'  aria-label="a dense table">

					<TableHead>
						<TableRow>
							<TableCell align="center">
								<h5 className='fw-bold'>S.No</h5>
							</TableCell>
							<TableCell align="center">
								<h5 className='fw-bold'>Project Name</h5>
							</TableCell>
							<TableCell align="center">
								<h5 className='fw-bold'>Project Type</h5>
							</TableCell>
						</TableRow>
					</TableHead>
					
					<TableBody>
						
						{
							rows
              				.map((row, index) => {
									return (
										<TableRow hover role="checkbox" tabIndex={-1}>
											
											<TableCell key={row.id} align='center'>
												<h6>{index+1}</h6>
											</TableCell>

											<TableCell key={row.id} align='center'>
												<NavLink to={`/shop/${row.id}`}>
													<h6>{row.productName}</h6>
												</NavLink>
											</TableCell>

											<TableCell key={row.id} align='center'>
												<h6>{row.category}</h6>
											</TableCell>

										</TableRow>
									);
								}
							)
						}

					</TableBody>

				</Table>
			</TableContainer>
  

		</>

	);

}

export default TitleCard