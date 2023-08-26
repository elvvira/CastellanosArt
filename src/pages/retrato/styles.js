import styled from 'styled-components';

const ContainerPortraits = styled.div`
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
const ContainerPortrait = styled.div`
	width: 100%;
	height: 300px;
	margin-bottom: 2rem;
	position: relative;
	@media screen and (min-width: 768px) {
		width: 300px;
	}
`;

const PortraitImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
const PortraitText = styled.p`
	font-size: 0.8rem;
	color: gray;
	font-style: italic;
`;
const StyledPortraitFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
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
export {
	ContainerPortraits,
	ContainerPortrait,
	PortraitText,
	PortraitImage,
	StyledPortraitFooter,
	ContainerModal,
	ContainerModalImg,
	ModalImg,
	ImgIconClose
};
