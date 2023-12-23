import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingComponent from '../components/Loading/LoadingComponent';
import RefundPolicy from '../pages/Policy/RefundPolicy';
import DeliveryPolicy from '../pages/Policy/DeliveryPolicy';
import TCPolicy from '../pages/Policy/TcPolicy';

const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Download = lazy(() => import("../pages/Download"));
const AllProjects = lazy(() => import("../pages/AllProjects"));
const Contact = lazy(() => import("../pages/Contact"));
const Support = lazy(() => import("../pages/Support"));

const Routers = () => {
	return (
		<Routes>

			{/* <Route exact path='/' element={<Navigate to={`/home`} />} /> */}

			<Route exact path='/' element={
				<Suspense fallback={<LoadingComponent />}>
					<Home />
				</Suspense>
			} />

			<Route path='/shop' element={
				<Suspense fallback={<LoadingComponent />}>
					<Shop />
				</Suspense>
			} />

			<Route path='/projects' element={
				<Suspense fallback={<LoadingComponent />}>
					<AllProjects />
				</Suspense>
			} />

			<Route path='/support' element={
				<Suspense fallback={<LoadingComponent />}>
					<Support />
				</Suspense>
			} />

			<Route path='/contact' element={
				<Suspense fallback={<LoadingComponent />}>
					<Contact />
				</Suspense>
			} />

			<Route path='/shop/:id' element={
				<Suspense fallback={<LoadingComponent />}>
					<ProductDetails />
				</Suspense>
			} />

			<Route path='/refundpolicy' element={
				<Suspense fallback={<LoadingComponent />}>
					<RefundPolicy />
				</Suspense>
			} />

			<Route path='/deliverypolicy' element={
				<Suspense fallback={<LoadingComponent />}>
					<DeliveryPolicy />
				</Suspense>
			} />

			<Route path='/terms-conditions' element={
				<Suspense fallback={<LoadingComponent />}>
					<TCPolicy />
				</Suspense>
			} />

			{/* // */}
			<Route path='/shop/download/:id' element={<Download />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/checkout' element={<Checkout />} />

		</Routes>
	);
};

export default Routers;