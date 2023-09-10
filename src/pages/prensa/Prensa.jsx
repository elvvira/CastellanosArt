import { PRENSA } from '../../constants/gallery';
import {
	Article,
	ArticleImg,
	ArticleText,
	ContainerPrensa,
	GalleryPrensa,
	HeaderPrensa,
	HeaderText,
	ImgHeader
} from './styles';

const Prensa = () => {
	return (
		<ContainerPrensa>
			<HeaderPrensa>
				<ImgHeader src='assets/prensa/DSC07522_qd4apw.jpg' alt='' />
				<HeaderText>
					Licenciado y Doctor en Bellas Artes por la Universidad Complutense de
					Madrid. Son ya más de 35 años en el mundo de la pintura, trabajando
					con las mejores Galerias . Premiado en los Concursos más importantes,
					y con presencia constante en revistas, diarios y libros de divulgación
					tanto en España como Internacional. Afortunado de poder llevar a cabo
					toda esta labor. Empleando siempre los mejores materiales y la técnica
					más depurada, trabajando tanto con la técnica de los antiguos
					maestros, como empleando los últimos avances en aerografía, con lo que
					certifico la perdurabilidad de mi obra.
				</HeaderText>
			</HeaderPrensa>

			<GalleryPrensa>
				{PRENSA.map(article => {
					return (
						<Article key={article.id}>
							<ArticleImg src={article.img} alt='' />
							<ArticleText>{article.text}</ArticleText>
						</Article>
					);
				})}
			</GalleryPrensa>
		</ContainerPrensa>
	);
};
export default Prensa;
