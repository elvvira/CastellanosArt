import { ContainerMenu, StyledLink, StyledUl } from './styles';

const Menu = ({ showMenu, setShowMenu }) => {
	return (
		<ContainerMenu showMenu={showMenu}>
			<nav>
				<StyledUl>
					<li>
						<StyledLink onClick={() => setShowMenu(false)} to='/'>
							INICIO
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setShowMenu(false)} to='/Galeria'>
							GALERIA
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setShowMenu(false)} to='/Retrato'>
							RETRATO
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setShowMenu(false)} to='/Prensa'>
							PRENSA Y TEXTOS
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setShowMenu(false)} to='/Taller'>
							MI TALLER
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setShowMenu(false)} to='/Contact'>
							CONTACTO
						</StyledLink>
					</li>
				</StyledUl>
			</nav>
		</ContainerMenu>
	);
};
export default Menu;
