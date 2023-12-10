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
			<NewsTitle>News</NewsTitle>
			<NewsContent>
				<NewsImg src='dist/assets/news/Andres Castellanos.jpg' alt='' />
				<NewsText>
					Thrilled to be part of the Plus One Gallery Christmas Show held from
					December 14th, 2023 to January 22nd, 2024!
				</NewsText>
			</NewsContent>
			<NewsTitle>Lo último</NewsTitle>
			<NewsContent>
				<NewsImg src='assets/news/1four-seasons_ioss6n.jpg' alt='' />
				<NewsText>
					El sentido de estos últimos cuatro cuadros es su visión en conjunto. "
					Las cuatro estaciones". Es una reflexión sobre el paso del tiempo. A
					una bonita y fresca mañana de primavera, le sucede una cálida y
					ensoñada noche de verano, después una, quizás algo triste, mañana de
					otoño, y finalmente una tremenda, inquietante y triste noche de
					invierno.
				</NewsText>
			</NewsContent>
			<NewsContent>
				<NewsImg src='dist/assets/news/Decano-Jose-Luis-Alvarez.jpg' alt='' />
				<NewsText>
					Retrato decano Jose Luis Álvarez-Sala Walther. 92x65cm
				</NewsText>
			</NewsContent>
		</ContainerNews>
	);
};
export default News;
