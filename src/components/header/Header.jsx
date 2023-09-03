import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../menu/Menu';
import { ContainerHeader, StyledIconMenu, StyledLogo } from './styles';

const Header = () => {
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div>
			<ContainerHeader>
				<StyledLogo
					onClick={() => {
						navigate('/');
						setShowMenu(false);
					}}
					src={showMenu ? 'assets/logo-invert.png' : 'assets/logo.png'}
					alt=''
				/>
				<StyledIconMenu
					onClick={() => setShowMenu(!showMenu)}
					src={showMenu ? 'assets/icon-close.svg' : 'assets/icon-menu.svg'}
					alt='icon-menu'
				/>
			</ContainerHeader>
			<Menu showMenu={showMenu} setShowMenu={setShowMenu} />
		</div>
	);
};

export default Header;
