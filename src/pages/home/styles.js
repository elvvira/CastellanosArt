import styled from 'styled-components';
const ContainerHome = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;
const ImgBanner = styled.div`
	width: 100%;
	height: 300px;
	background-image: url('assets/banner-mobile.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	/* margin-top: 2rem; */
	@media screen and (min-width: 768px) {
		height: 550px;
		background-image: url('assets/banner-desktop.png');
	}
`;
const ContainerTitular = styled.div`
	width: 50%;
	position: relative;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 1rem;
	@media screen and (min-width: 768px) {
		width: 45%;
		margin-bottom: 3rem;
	}
	@media screen and (min-width: 1040px) {
		width: 30%;
	}
`;
const IconMarks = styled.img`
	position: relative;
	top: 20px;
	left: -10px;
	z-index: -10;
	width: 60px;
	@media screen and (min-width: 768px) {
		width: 90px;
		top: 40px;
	}
`;
const Titular = styled.p`
	font-family: 'Alegreya Sans';
	font-weight: bold;
	font-size: 1.5rem;
	text-align: center;
	@media screen and (min-width: 768px) {
		font-size: 2.5rem;
	}
	@media screen and (min-width: 1040px) {
		font-size: 3rem;
	}
`;
export { ContainerHome, ImgBanner, ContainerTitular, Titular, IconMarks };
