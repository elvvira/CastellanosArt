import styled from 'styled-components';

const ImgBanner = styled.div`
	width: 100%;
	height: 300px;
	background-image: url('public/assets/banner-mobile.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	margin-bottom: 2rem;
	@media screen and (min-width: 768px) {
		height: 550px;
		background-image: url('public/assets/banner-desktop.png');
	}
`;
export { ImgBanner };
