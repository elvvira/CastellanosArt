import styled from 'styled-components';

const ContainerTaller = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	@media screen and (min-width: 768px) {
		width: 90%;
		grid-template-columns: 1fr 1fr 2fr;
		grid-template-rows: 1fr 1fr;
		gap: 1rem;
	}
`;
const TallerImg = styled.img`
	width: 100%;
	height: 300px;
	object-fit: cover;
`;
export { ContainerTaller, TallerImg };
