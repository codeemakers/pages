import { Modal, Box, IconButton, Typography, Fade, Backdrop } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React from 'react'

const CustomModal = ({ onClose, title, content }) => {

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: {
			xs: 350, // 0
			sm: 350, // 600
			md: 400, // 900
			lg: 500, // 1200
			xl: 600 // 1536
		},
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 3,
	};

	return (

		<div>

			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={true}
				onClose={onClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>

				<Fade in={true}>

					<Box sx={style} borderRadius={2}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Review by {title}
							<IconButton onClick={onClose} style={{ float: 'right', fontSize: '20px' }}>
								<CloseRoundedIcon color="primary"></CloseRoundedIcon>
							</IconButton>
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							{content}
						</Typography>
					</Box>

				</Fade>

			</Modal>

		</div>
	)

}

export default CustomModal