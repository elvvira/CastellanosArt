import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
	text-align: start;
	gap: 2rem;
	@media screen and (min-width: 768px) {
	}
`;
const ContainerForm = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;
const StyledLabel = styled.label`
	display: block;
	width: 20%;
	margin-bottom: 0.3rem;
	font-family: 'Alegreya Sans', sans-serif;
	@media screen and (min-width: 768px) {
		margin-bottom: 0rem;
	}
`;
const StyledInput = styled.input`
	width: 100%;
	height: 30px;
	border: 1px solid black;
	border-radius: 0.2rem;
	font-family: 'Alegreya Sans', sans-serif;
	@media screen and (min-width: 768px) {
		width: 80%;
	}
`;
const StyledTextArea = styled.textarea`
	width: 100%;
	height: 100px;
	border: 1px solid black;
	border-radius: 0.2rem;
	@media screen and (min-width: 768px) {
		width: 80%;
	}
`;
const StyledButton = styled.input`
	width: 100%;
	height: 40px;
	background-color: black;
	color: white;
	font-weight: bold;
	border: transparent;
	border-radius: 0.2rem;
	&:hover {
		background-color: gray;
	}
	@media screen and (min-width: 768px) {
		width: 80%;
	}
`;
export {
	StyledForm,
	ContainerForm,
	StyledInput,
	StyledLabel,
	StyledTextArea,
	StyledButton
};
