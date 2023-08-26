import { useState } from 'react';
import { GALLERY } from '../../constants/gallery';
import {
	ContainerGallery,
	ContainerModal,
	ContainerModalImg,
	ContainerPaint,
	ImgIconClose,
	ModalImg,
	PaintImage,
	PaintText,
	StyledImageFooter,
	StyledStock
} from './styles';

const Galeria = () => {
	const [showPaint, setShowPaint] = useState(false);
	const [paintInfo, setPaintInfo] = useState('');
	return (
		<ContainerGallery>
			{GALLERY.map(paint => {
				return (
					<ContainerPaint key={paint.id}>
						<PaintImage
							onClick={e => {
								showModal(e, setPaintInfo), setShowPaint(!showPaint);
							}}
							src={paint.img}
							alt=''
						/>
						<StyledImageFooter>
							<PaintText>{paint.text}</PaintText>
							<StyledStock stock={paint.stock}></StyledStock>
						</StyledImageFooter>
					</ContainerPaint>
				);
			})}
			{showPaint && (
				<ContainerModal>
					<ImgIconClose
						onClick={() => setShowPaint(false)}
						src='assets/icon-close-black.png'
						alt=''
					/>
					<ContainerModalImg>
						<ModalImg src={paintInfo} alt='' />
					</ContainerModalImg>
				</ContainerModal>
			)}
		</ContainerGallery>
	);
};
const showModal = (e, setPaintInfo) => {
	setPaintInfo(e.target.src);
};
export default Galeria;
