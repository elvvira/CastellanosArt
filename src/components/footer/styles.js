import styled from 'styled-components';

const ContainerFooter = styled.div`
	width: 100vw;
	height: 200px;
	background-color: #4e4e4e;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	margin-top: 6rem;
	gap: 2rem;
	position: relative;
	bottom: 0;
	@media screen and (min-width: 768px) {
		margin-top: 10rem;
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
	:hover {
		opacity: 0.2;
	}
`;
export { ContainerFooter, StyledLogo, ContainerContactIcons, ContactIcon };
