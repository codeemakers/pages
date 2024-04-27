import React from 'react';
import { maintanence } from "../../assets/images/ImagePaths"
import Lottie from 'react-lottie';
import '../../App.css'

const Maintenance = () => {

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: maintanence,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};

	return (
		<center className="maintenance-container">
            <div className="maintenance-content">
                <Lottie options={defaultOptions} height={"auto"} width={"100%"} />
                <h3 className="maintenance-message">
                    Sorry, we're down for scheduled maintenance right now
                </h3>
            </div>
        </center>
	)
}

export default Maintenance