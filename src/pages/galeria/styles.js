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
	margin-bottom: 2rem;
	position: relative;
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
const ContainerModal = styled.div`
	position: fixed;
	background-color: white;
	border: 2px solid black;
	width: 300px;
	height: 300px;
	top: 100px;
	z-index: 10;
	@media screen and (min-width: 768px) {
		top: 90px;
		left: 15%;
		width: 700px;
		height: 700px;
		transform: translate(20%);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		padding: 1.7rem;
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
const StyledImageFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;
const StyledStock = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 100%;
	background-color: ${({ stock }) => (stock ? 'green' : 'red')};
`;
export {
	ContainerGallery,
	ContainerPaint,
	PaintImage,
	ContainerModal,
	ContainerModalImg,
	ModalImg,
	StyledStock,
	StyledImageFooter
};
