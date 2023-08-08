import styled from 'styled-components';
const ContainerContact = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;
const ContactHeader = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 2rem;
`;
const ImgContact = styled.img`
	width: 400px;
	height: 400px;
	object-fit: cover;
	background-color: black;
`;
const InfoContact = styled.p`
	width: 60%;
`;
const ContainerContactInfo = styled.div`
	text-align: right;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 1rem;
	margin-right: auto;
	margin-left: auto;
`;
const TextContact = styled.p`
	width: 80%;
`;
export {
	ContainerContact,
	ContactHeader,
	ContainerContactInfo,
	ImgContact,
	InfoContact,
	TextContact
};
