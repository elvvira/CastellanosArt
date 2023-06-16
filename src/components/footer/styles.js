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
	position: relative;
	top: 170px;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 0 10% 0 10%;
	}
`;
const StyledLogo = styled.img`
	width: 200px;
`;
const ContainerContactIcons = styled.div`
	display: flex;
	gap: 1rem;
`;
const ContactIcon = styled.img`
	object-fit: contain;
	width: 40px;
	height: 40px;
	padding: 0.5rem;
	@media screen and (min-width: 768px) {
		/* width: 50px;
		height: 50px; */
	}
`;
export { ContainerFooter, StyledLogo, ContainerContactIcons, ContactIcon };
