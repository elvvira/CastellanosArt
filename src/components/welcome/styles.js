import styled from 'styled-components';
const ContainerWelcome = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	@media screen and (min-width: 768px) {
		margin-bottom: 4rem;
		flex-direction: row-reverse;
		width: 85%;
		margin-right: auto;
		margin-left: auto;
		align-items: flex-end;
	}
`;
const ContaineText = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const StudioImage = styled.img`
	width: 100vw;
	height: 300px;
	background-color: gray;
	@media screen and (min-width: 768px) {
		width: 100%;
		height: 400px;
	}
`;
const WelcomeTitle = styled.h2`
	width: 70%;
	font-size: 2.5rem;
	line-height: 3rem;
	@media screen and (min-width: 768px) {
		font-size: 4rem;
		line-height: 3.5rem;
	}
`;
const StyledButtonTaller = styled.button`
	@media screen and (min-width: 768px) {
		&:hover {
			background-color: black;
			color: white;
		}
	}
`;
export {
	StudioImage,
	ContainerWelcome,
	WelcomeTitle,
	ContaineText,
	StyledButtonTaller
};
