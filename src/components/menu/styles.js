import styled from 'styled-components';

const ContainerMenu = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: black;
	top: 0;
	padding: 2rem;
	color: white;
`;
const StyledIconClose = styled.img`
	filter: invert(1);
	width: 20px;
`;
export { ContainerMenu, StyledIconClose };
