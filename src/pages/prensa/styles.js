import styled from 'styled-components';

const ContainerPrensa = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	@media screen and (min-width: 768px) {
		width: 90%;
	}
`;

const HeaderPrensa = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		align-items: flex-end;
	}
`;
const ImgHeader = styled.img`
	width: 100%;
	height: 300px;
	background-color: black;
	object-fit: cover;
	@media screen and (min-width: 768px) {
		width: 60%;
		height: 400px;
	}
`;
const HeaderText = styled.div`
	width: 100%;
	font-size: 0.8rem;
	text-align: justify;
	@media screen and (min-width: 768px) {
		width: 40%;
	}
`;

const GalleryPrensa = styled.div`
	width: 100%;
	display: flex;
	gap: 1rem;
	flex-direction: column;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
const Article = styled.div``;

const ArticleImg = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	@media screen and (min-width: 768px) {
		width: 410px;
		height: 350px;
	}
`;
const ArticleText = styled.p`
	color: gray;
`;
export {
	ContainerPrensa,
	HeaderPrensa,
	ImgHeader,
	HeaderText,
	GalleryPrensa,
	Article,
	ArticleImg,
	ArticleText
};
