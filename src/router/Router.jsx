import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Contact from '../pages/contact/Contact';
import Galeria from '../pages/galeria/Galeria';
import Home from '../pages/home/Home';
import Prensa from '../pages/prensa/Prensa';
import Retrato from '../pages/retrato/Retrato';
import Taller from '../pages/taller/Taller';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />}></Route>
				<Route path='/Galeria' element={<Galeria />} />
				<Route path='/Retrato' element={<Retrato />} />
				<Route path='/Prensa' element={<Prensa />} />
				<Route path='/Taller' element={<Taller />} />
				<Route path='/Contact' element={<Contact />} />
			</Route>
		</Routes>
	);
};
export default Router;
