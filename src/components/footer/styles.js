import styled from 'styled-components';

const ContainerFooter = styled.div`
	width: 100vw;
	height: 200px;
	background-color: #4e4e4e;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
	}
`;
const StyledLogo = styled.img`
	width: 200px;
`;
export { ContainerFooter, StyledLogo };
