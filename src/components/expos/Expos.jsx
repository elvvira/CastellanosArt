import { ContainerExpos, ContaineText, ExposImage, ExposTitle } from './styles';

const Expos = () => {
	return (
		<ContainerExpos>
			<ContaineText>
				<ExposTitle>Exposiciones</ExposTitle>
				<p>
					Actualmente estoy exponiendo en Londres, Japón, Brasil y Suiza. Mi
					obra está presente en las mejores colecciones de todo el Mundo. Aquí,
					en esta página web, podrá echar un vistazo a gran parte de las
					pinturas y dibujos que he realizado hasta el momento.
				</p>
			</ContaineText>

			<ExposImage src='assets/expos.jpg' alt='' />
		</ContainerExpos>
	);
};
export default Expos;
