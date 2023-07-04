import { useNavigate } from 'react-router-dom';
import {
	ContainerWelcome,
	ContaineText,
	StudioImage,
	StyledButtonTaller,
	WelcomeTitle
} from './styles';

const Welcome = () => {
	const navigate = useNavigate();

	return (
		<ContainerWelcome>
			<ContaineText>
				<WelcomeTitle>Bienvenido a mi taller</WelcomeTitle>
				<p>
					Llevo muchos años dedicado al arte y a su enseñanza, a su historia y a
					su evolución hasta la actualidad. Inspirado por la obra de los
					artistas clásicos comencé a desarrollar mi propia carrera creativa.
				</p>
				<StyledButtonTaller
					onClick={() => {
						navigate('/Taller');
					}}
				>
					MI TALLER
				</StyledButtonTaller>
			</ContaineText>

			<StudioImage src='assets/studio.png' alt='' />
		</ContainerWelcome>
	);
};
export default Welcome;
