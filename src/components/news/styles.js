import styled from 'styled-components';

const ContainerNews = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 1rem;

	@media screen and (min-width: 768px) {
		margin-bottom: 10rem;
	}
`;
const NewsContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		align-items: flex-end;
		padding-bottom: 4rem;
	}
`;
const NewsTitle = styled.h2`
	font-size: 2.5rem;
	@media screen and (min-width: 768px) {
		font-size: 4rem;
	}
`;
const NewsImg = styled.img`
	/* width: 100%; */
	/* background-color: gray; */
	object-fit: contain;
	object-position: top;
	@media screen and (min-width: 768px) {
		/* width: 70%; */
		height: 550px;
		font-size: 1.2rem;
	}
`;
const NewsText = styled.p`
	font-family: 'Alegreya Sans';
	font-size: 1rem;

	width: 100%;
	@media screen and (min-width: 768px) {
		font-size: 1.2rem;
		/* width: 80%; */
		width: 400px;
	}
`;
export { ContainerNews, NewsTitle, NewsImg, NewsText, NewsContent };
