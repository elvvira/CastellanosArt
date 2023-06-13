import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Galeria from '../pages/galeria/Galeria';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />}></Route>
				<Route path='/Galeria' element={<Galeria />} />
			</Route>
		</Routes>
	);
};
export default Router;
