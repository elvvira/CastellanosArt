import styled from 'styled-components';
const ContainerExpos = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	@media screen and (min-width: 768px) {
		width: 85%;
		flex-direction: row;
		margin-right: auto;
		margin-left: auto;
		align-items: flex-end;
	}
`;
const ContaineText = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const ExposImage = styled.img`
	width: 100vw;
	height: 300px;
	background-color: gray;
	object-fit: cover;
	@media screen and (min-width: 768px) {
		width: 100%;
		height: 400px;
	}
`;
const ExposTitle = styled.h2`
	width: 70%;
	font-size: 2.5rem;
	line-height: 3rem;
	@media screen and (min-width: 768px) {
		font-size: 4rem;
		line-height: 3.5rem;
	}
`;
export { ExposImage, ContainerExpos, ExposTitle, ContaineText };
