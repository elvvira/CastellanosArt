import { FormContact } from '../../components/formContact/FormContact';
import {
	ContactHeader,
	ContainerContact,
	ContainerContactInfo,
	ImgContact,
	InfoContact,
	TextContact
} from './styles';

const Contact = () => {
	return (
		<ContainerContact>
			<ContactHeader>
				<ImgContact
					src='https://res.cloudinary.com/dy8bhxzfx/image/upload/f_auto,q_auto/v1693050614/Retrato_glaafu.jpg'
					alt=''
				/>
				<InfoContact>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
					Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
				</InfoContact>
			</ContactHeader>
			<ContainerContactInfo>
				<TextContact>
					Querido visitante puedes seguirme en mis redes sociales o contactar
					conmigo a través de un correo:
				</TextContact>
				<FormContact />
			</ContainerContactInfo>
		</ContainerContact>
	);
};
export default Contact;
