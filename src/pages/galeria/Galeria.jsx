import { useState } from 'react';
import { GALLERY } from '../../constants/gallery';
import {
	ContainerGallery,
	ContainerModal,
	ContainerModalImg,
	ContainerPaint,
	ModalImg,
	PaintImage,
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
							<p>{paint.text}</p>
							<StyledStock stock={paint.stock}></StyledStock>
						</StyledImageFooter>
					</ContainerPaint>
				);
			})}
			{showPaint && (
				<ContainerModal>
					<img
						onClick={() => setShowPaint(false)}
						src='assets/icon-close-black.png'
						alt=''
					/>
					<ContainerModalImg>
						<ModalImg src={paintInfo} alt='' />
					</ContainerModalImg>
					<p>texto</p>
				</ContainerModal>
			)}
		</ContainerGallery>
	);
};
const showModal = (e, setPaintInfo) => {
	setPaintInfo(e.target.src);
};
export default Galeria;
