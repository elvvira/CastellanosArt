import {
	ContactIcon,
	ContainerContactIcons,
	ContainerFooter,
	StyledLogo
} from './styles';

const Footer = () => {
	return (
		<ContainerFooter>
			<StyledLogo src='assets/logo-invert.png' alt='' />
			<ContainerContactIcons>
				<ContactIcon src='assets/icon-ig.png' alt='' />{' '}
				<ContactIcon src='assets/icon-fb.png' alt='' />{' '}
				<ContactIcon src='assets/icon-email.png' alt='' />
			</ContainerContactIcons>
		</ContainerFooter>
	);
};
export default Footer;
