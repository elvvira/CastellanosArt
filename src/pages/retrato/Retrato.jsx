import { PORTRAITS } from '../../constants/gallery';
import {
	ContainerPortrait,
	ContainerPortraits,
	PortraitImage,
	StyledPortraitFooter
} from './styles';

const Retrato = () => {
	return (
		<ContainerPortraits>
			{PORTRAITS.map(portrait => {
				return (
					<ContainerPortrait key={portrait.id}>
						<PortraitImage src={portrait.img} alt='' />
						<StyledPortraitFooter>
							<p>{portrait.text}</p>
						</StyledPortraitFooter>
					</ContainerPortrait>
				);
			})}
		</ContainerPortraits>
	);
};
export default Retrato;
