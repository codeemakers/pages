import React from "react";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";
// import { useLocation } from "react-router-dom";

const Layout = () => {

	// const loc = useLocation()
	return <>

		<Header />

		<div>
			<Routers />
		</div>

		<Footer />

	</>
};

export default Layout;