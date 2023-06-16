import { useState } from 'react';
import { GALLERY } from '../../constants/gallery';
import {
	ContainerGallery,
	ContainerModal,
	ContainerPaint,
	PaintImage
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
						{/* <p>{paint.text}</p> */}
					</ContainerPaint>
				);
			})}
			{showPaint && (
				<ContainerModal>
					<div onClick={() => setShowPaint(false)}>x</div>
					<PaintImage src={paintInfo} alt='' />
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
