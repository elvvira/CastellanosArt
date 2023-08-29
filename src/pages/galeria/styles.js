import styled from 'styled-components';

const ContainerGallery = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	position: relative;
	@media screen and (min-width: 768px) {
		width: 90%;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
`;
const ContainerPaint = styled.div`
	width: 100%;
	height: 300px;
	margin-bottom: 2rem;
	position: relative;
	@media screen and (min-width: 768px) {
		width: 300px;
	}
	/* ::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: gray;
		bottom: -10px;
	} */
`;

const PaintImage = styled.img`
	width: 100%;
	height: 100%;

	object-fit: contain;
`;
const PaintText = styled.p`
	font-size: 0.8rem;
	color: gray;
	font-style: italic;
`;
const ContainerModal = styled.div`
	/* width: 300px;
	height: 300px;
	top: 100px;
	z-index: 10; */

	@media screen and (min-width: 768px) {
		z-index: 10;

		position: fixed;
		background-color: white;
		border: 1px solid black;
		top: 90px;
		left: 15%;
		width: 700px;
		height: 650px;
		transform: translate(20%);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		padding: 1.8rem;
	}
`;

const ContainerModalImg = styled.div`
	width: 630px;
	height: 550px;
`;
const ModalImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
const ImgIconClose = styled.img`
	width: 18px;
`;
const StyledImageFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;
const StyledStock = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 100%;
	background-color: ${({ stock }) => (stock ? 'transparent' : 'red')};
`;
export {
	ContainerGallery,
	ContainerPaint,
	PaintText,
	PaintImage,
	ContainerModal,
	ContainerModalImg,
	ModalImg,
	StyledStock,
	StyledImageFooter,
	ImgIconClose
};
