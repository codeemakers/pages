import { Routes,Route,Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Download from '../pages/Download';
import AllProjects from '../pages/AllProjects';
import Contact from '../pages/Contact';
import Support from '../pages/Support';

const Routers = () => {
	return ( 
		<Routes>
			
			<Route path='/pages' element={<Navigate to={`/home`} />} />
			<Route path={`/home`} element={<Home/>} />
			<Route path='/shop' element={<Shop/>} />
			<Route path='/projects' element={<AllProjects/>} />
			<Route path='/support' element={<Support/>} />
			<Route path='/contact' element={<Contact/>} />
			<Route path='/shop/:id' element={<ProductDetails/>} />
			<Route path='/shop/download/:id' element={<Download/>} />
			<Route path='/cart' element={<Cart/>} />
			<Route path='/checkout' element={<Checkout />} />
			
		</Routes>
	);
};

export default Routers;