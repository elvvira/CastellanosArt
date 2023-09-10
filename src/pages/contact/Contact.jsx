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
				<ImgContact src='assets/contact/pintor2_jsqssi.jpg' alt='' />
				<InfoContact>
					¡Hola y bienvenido a mi página! Me alegra saber que estás interesado
					en contactar conmigo.
					<br />
					Si tienes alguna pregunta sobre mis obras de arte, estilos de pintura,
					encargos personalizados o cualquier otro asunto relacionado con mi
					trabajo, no dudes en ponerte en contacto.
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
