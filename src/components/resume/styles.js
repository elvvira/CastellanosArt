import styled from 'styled-components';

const ContainerResume = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	margin-bottom: 0rem;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		margin-bottom: 5rem;
	}
`;
const ResumeTitleContainer = styled.div`
	width: 100%;
	height: 60px;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid black;
	padding: 1rem;
	@media screen and (min-width: 768px) {
		width: 600px;
	}
`;

const Dropdown = styled.div`
	background-color: #e5e5e5;
	padding: 1rem;
`;
export { ContainerResume, ResumeTitleContainer, Dropdown };
