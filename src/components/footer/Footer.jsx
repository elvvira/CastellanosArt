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
				<a href='https://www.instagram.com/castellanos.art/'>
					<ContactIcon src='assets/icon-ig.png' alt='' />{' '}
				</a>
				<a href='https://www.facebook.com/andres.castellanos.399'>
					<ContactIcon src='assets/icon-fb.png' alt='' />{' '}
				</a>
				<a href='mailto:ancastell3@gmail.com'>
					<ContactIcon src='assets/icon-email.png' alt='' />
				</a>
			</ContainerContactIcons>
		</ContainerFooter>
	);
};
export default Footer;
