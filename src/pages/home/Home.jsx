import Expos from '../../components/expos/Expos';
import News from '../../components/news/News';
import Resume from '../../components/resume/Resume';
import Welcome from '../../components/welcome/Welcome';
import {
	ContainerHome,
	ContainerTitular,
	IconMarks,
	ImgBanner,
	Titular
} from './styles';

const Home = () => {
	return (
		<ContainerHome>
			<ImgBanner />
			<ContainerTitular>
				<IconMarks src='assets/comillas.png' alt='' />
				<Titular>I always relapse in the painting </Titular>
			</ContainerTitular>
			<News />
			<Welcome />
			<Expos />
			<Resume />
		</ContainerHome>
	);
};
export default Home;
