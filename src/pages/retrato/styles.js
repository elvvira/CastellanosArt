import styled from 'styled-components';
import {
	ContainerGallery,
	ContainerPaint,
	PaintImage
} from '../galeria/styles';

const ContainerPortraits = styled(ContainerGallery)`
	width: 85%;
`;
const ContainerPortrait = styled(ContainerPaint)`
	width: 300px;
`;

const PortraitImage = styled(PaintImage)`
	width: 100%;
`;
export { ContainerPortraits, ContainerPortrait, PortraitImage };
