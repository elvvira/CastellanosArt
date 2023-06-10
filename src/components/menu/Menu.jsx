import { NavLink } from 'react-router-dom';
import { ContainerMenu, StyledIconClose } from './styles';

const Menu = setShowMenu => {
	return (
		<ContainerMenu>
			<StyledIconClose
				onClick={() => setShowMenu(false)}
				src='assets/icon-close.svg'
				alt=''
			/>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
				</ul>
			</nav>
		</ContainerMenu>
	);
};
export default Menu;
