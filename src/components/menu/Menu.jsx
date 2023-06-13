import { NavLink } from 'react-router-dom';
import { ContainerMenu, StyledUl } from './styles';

const Menu = ({ showMenu, setShowMenu }) => {
	return (
		<ContainerMenu showMenu={showMenu}>
			<nav>
				<StyledUl>
					<li>
						<NavLink onClick={() => setShowMenu(false)} to='/'>
							INICIO
						</NavLink>
					</li>
					<li>
						<NavLink onClick={() => setShowMenu(false)} to='/Galeria'>
							GALERIA
						</NavLink>
					</li>
					<li>
						<NavLink to='/Retrato'>RETRATO</NavLink>
					</li>
					<li>
						<NavLink to='/'>PRENSA Y TEXTOS</NavLink>
					</li>
					<li>
						<NavLink to='/'>MI TALLER</NavLink>
					</li>
					<li>
						<NavLink to='/'>CONTACTO</NavLink>
					</li>
				</StyledUl>
			</nav>
		</ContainerMenu>
	);
};
export default Menu;
