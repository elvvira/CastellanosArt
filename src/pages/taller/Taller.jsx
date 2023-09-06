import { TALLER } from '../../constants/gallery';
import { ContainerTaller, TallerImg } from './styles';

const Taller = () => {
	return (
		<ContainerTaller>
			{TALLER.map(item => {
				return (
					<div key={item.id}>
						<TallerImg src={item.img} alt='' />
					</div>
				);
			})}
		</ContainerTaller>
	);
};
export default Taller;
