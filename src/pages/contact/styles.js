import styled from 'styled-components';
const ContainerContact = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	@media screen and (min-width: 768px) {
		width: 50%;
	}
`;
const ContactHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		align-items: flex-end;
	}
`;
const ImgContact = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	background-color: black;
	@media screen and (min-width: 768px) {
		width: 400px;
		height: 300px;
		border-radius: 4rem;
	}
`;
const InfoContact = styled.p`
	width: 100%;
	@media screen and (min-width: 768px) {
		width: 60%;
	}
`;
const ContainerContactInfo = styled.div`
	text-align: left;
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	margin-right: auto;
	margin-left: auto;
	@media screen and (min-width: 768px) {
		width: 100%;
		align-items: flex-end;
		text-align: right;
	}
`;
const TextContact = styled.p`
	width: 100%;
	font-style: italic;
	color: gray;
	font-family: 'Alegreya Sans', sans-serif;

	@media screen and (min-width: 768px) {
		width: 80%;
	}
`;
export {
	ContainerContact,
	ContactHeader,
	ContainerContactInfo,
	ImgContact,
	InfoContact,
	TextContact
};
