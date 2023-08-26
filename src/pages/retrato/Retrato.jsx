import { useState } from 'react';
import { PORTRAITS } from '../../constants/gallery';
import {
	ContainerModal,
	ContainerModalImg,
	ContainerPortrait,
	ContainerPortraits,
	ImgIconClose,
	ModalImg,
	PortraitImage,
	PortraitText,
	StyledPortraitFooter
} from './styles';

const Retrato = () => {
	const [showPortrait, setShowPortrait] = useState(false);
	const [portraitInfo, setPortraitInfo] = useState('');
	return (
		<ContainerPortraits>
			{PORTRAITS.map(portrait => {
				return (
					<ContainerPortrait key={portrait.id}>
						<PortraitImage
							onClick={e => {
								showModal(e, setPortraitInfo), setShowPortrait(!showPortrait);
							}}
							src={portrait.img}
							alt=''
						/>
						<StyledPortraitFooter>
							<PortraitText>{portrait.text}</PortraitText>
						</StyledPortraitFooter>
					</ContainerPortrait>
				);
			})}
			{showPortrait && (
				<ContainerModal>
					<ImgIconClose
						onClick={() => setShowPortrait(false)}
						src='assets/icon-close-black.png'
						alt=''
					/>
					<ContainerModalImg>
						<ModalImg src={portraitInfo} alt='' />
					</ContainerModalImg>
				</ContainerModal>
			)}
		</ContainerPortraits>
	);
};

const showModal = (e, setPortraitInfo) => {
	setPortraitInfo(e.target.src);
};
export default Retrato;
