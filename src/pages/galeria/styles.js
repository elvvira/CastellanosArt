import styled from 'styled-components';

const ContainerGallery = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 1rem;
	position: relative;
	@media screen and (min-width: 768px) {
		width: 90%;

		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
`;
const ContainerPaint = styled.div`
	width: 300px;
	height: 300px;
`;

const PaintImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
const ContainerModal = styled.div`
	position: fixed;
	background-color: white;
	width: 300px;
	height: 300px;
	top: 100px;
	z-index: 10;
	@media screen and (min-width: 768px) {
		left: 15%;
		width: 700px;
		height: 700px;
		transform: translate(20%);
	}
`;
const ModalImg = styled.img``;
export { ContainerGallery, ContainerPaint, PaintImage, ContainerModal };
