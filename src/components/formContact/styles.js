import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
	text-align: start;
	gap: 2rem;
`;
const ContainerForm = styled.div`
	width: 100%;
	display: flex;
`;
const StyledLabel = styled.label`
	display: block;
	width: 20%;
`;
const StyledInput = styled.input`
	width: 80%;
	border: 1px solid black;
	border-radius: 0.2rem;
`;
const StyledTextArea = styled.textarea`
	width: 80%;

	height: 100px;
	border: 1px solid black;
	border-radius: 0.2rem;
`;
const StyledButton = styled.input`
	width: 80%;
	height: 40px;
	background-color: black;
	color: white;
	font-weight: bold;
	border: transparent;
	border-radius: 0.2rem;
	&:hover {
		background-color: gray;
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
