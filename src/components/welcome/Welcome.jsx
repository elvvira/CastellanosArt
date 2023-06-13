import {
	ContainerWelcome,
	ContaineText,
	StudioImage,
	WelcomeTitle
} from './styles';

const Welcome = () => {
	return (
		<ContainerWelcome>
			<ContaineText>
				<WelcomeTitle>Bienvenido a mi taller</WelcomeTitle>
				<p>
					Llevo muchos años dedicado al arte y a su enseñanza, a su historia y a
					su evolución hasta la actualidad. Inspirado por la obra de los
					artistas clásicos comencé a desarrollar mi propia carrera creativa.
				</p>
				<button>MI TALLER</button>
			</ContaineText>

			<StudioImage src='assets/studio.png' alt='' />
		</ContainerWelcome>
	);
};
export default Welcome;
