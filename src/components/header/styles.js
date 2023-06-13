import styled from 'styled-components';

// @media screen and (min-width: 768px) {
// }
// @media screen and (min-width: 1040px) {

// }
const ContainerHeader = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media screen and (min-width: 768px) {
		justify-content: center;
	}
`;
const StyledLogo = styled.img`
	z-index: 100;
	width: 190px;
`;
const StyledIconMenu = styled.img`
	display: block;
	width: 20px;
	z-index: 100;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export { ContainerHeader, StyledIconMenu, StyledLogo };
