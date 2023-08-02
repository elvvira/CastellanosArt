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
						<StyledLink onClick={() => setShowMenu(false)} to='/galeria'>
							GALERIA
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setShowMenu(false)} to='/retrato'>
							RETRATO
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setShowMenu(false)} to='/prensa'>
							PRENSA Y TEXTOS
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setShowMenu(false)} to='/taller'>
							MI TALLER
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setShowMenu(false)} to='/contact'>
							CONTACTO
						</StyledLink>
					</li>
				</StyledUl>
			</nav>
		</ContainerMenu>
	);
};
export default Menu;
