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
					src='https://3.bp.blogspot.com/-Fveq_st6cYI/WFgZT6I3JmI/AAAAAAAC07A/-hTY_v0sWkkgCiZ_AlL4BaNnKgl6s3zcQCLcB/s280/Andr%25C3%25A9s%2BCastellanos-photo03.jpg'
					alt=''
				/>
				<InfoContact>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
					Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
					molestie consequat, vel illum dolore eu feugiat nulla facilisis at
					vero eros et accumsan et iusto odio dignissim qui blandit praesent
					luptatum zzril delenit augue duis dolore te feugamcorper suscipit
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
