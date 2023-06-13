import { ContainerResume, ResumeTitleContainer } from './styles';

const Resume = () => {
	return (
		<ContainerResume>
			<ResumeTitleContainer>
				<p>Historial Académico</p>
				<img src='assets/icon-down.png' alt='' />
			</ResumeTitleContainer>
			<ResumeTitleContainer>
				<p>Premios y Exposiciones</p>
				<img src='assets/icon-down.png' alt='' />
			</ResumeTitleContainer>
		</ContainerResume>
	);
};
export default Resume;
