import { useState } from 'react';
import Menu from '../menu/Menu';
import { ContainerHeader, StyledIconMenu } from './styles';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div>
			<ContainerHeader>
				<img src='assets/logo.png' alt='' />
				<StyledIconMenu
					onClick={() => setShowMenu(!showMenu)}
					src='assets/icon-menu.svg'
					alt='icon-menu'
				/>
			</ContainerHeader>
			{showMenu && <Menu setShowMenu={setShowMenu} />}
		</div>
	);
};

export default Header;
