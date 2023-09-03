import {
	ContainerNews,
	NewsContent,
	NewsImg,
	NewsText,
	NewsTitle
} from './styles';

const News = () => {
	return (
		<ContainerNews>
			<NewsTitle>Lo último</NewsTitle>
			<NewsContent>
				<NewsImg
					src='https://res.cloudinary.com/dy8bhxzfx/image/upload/f_auto,q_auto/v1693766798/1four-seasons_ioss6n.jpg'
					alt=''
				/>
				<NewsText>
					El sentido de estos últimos cuatro cuadros es su visión en conjunto. "
					Las cuatro estaciones". Es una reflexión sobre el paso del tiempo. A
					una bonita y fresca mañana de primavera, le sucede una cálida y
					ensoñada noche de verano, después una, quizás algo triste, mañana de
					otoño, y finalmente una tremenda, inquietante y triste noche de
					invierno.
				</NewsText>
			</NewsContent>
		</ContainerNews>
	);
};
export default News;
