import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />}></Route>
				{/* <Route path='/Register' element={<Register />} /> */}
			</Route>
		</Routes>
	);
};
export default Router;
