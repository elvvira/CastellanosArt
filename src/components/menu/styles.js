import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ContainerMenu = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: #4e4e4e;
	top: 0;
	color: white;
	padding-top: 10rem;
	display: flex;
	justify-content: center;
	display: ${({ showMenu }) => (showMenu ? 'block' : 'none')};
	z-index: 1;
	/* overflow: hidden; */
	@media screen and (min-width: 768px) {
		display: block;
		height: 50px;
		position: relative;
		background-color: transparent;
		color: black;
		padding-top: 0rem;
	}
`;
const StyledUl = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		font-size: 0.8rem;
		gap: 2rem;
	}
	@media screen and (min-width: 1040px) {
		font-size: 1rem;
	}
`;

const StyledLink = styled(NavLink)`
	color: gray;
	&:hover {
		color: black;
	}
	&.active {
		color: white;
		@media screen and (min-width: 1040px) {
			font-weight: bold;
			color: black;
		}
	}
`;
export { ContainerMenu, StyledUl, StyledLink };
