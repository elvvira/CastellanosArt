import styled from 'styled-components';

const ContainerPortraits = styled.div`
	/* width: 85%;

	height: 100vh;
	@media screen and (min-width: 768px) {
		margin-bottom: 9rem;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	} */
	width: 85%;
	height: 100vh;

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
	width: 300px;
	height: 300px;
	margin-bottom: 2rem;
	position: relative;
`;

const PortraitImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
export { ContainerPortraits, ContainerPortrait, PortraitImage };
