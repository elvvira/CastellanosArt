import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
	ContainerForm,
	StyledButton,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledTextArea
} from './styles';

export const FormContact = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_aj1z1i9',
				'template_uixpffh',
				form.current,
				'eEQPBsU9o67a-3hG_'
			)
			.then(
				result => {
					console.log(result.text);
					form.current.reset();
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<StyledForm ref={form} onSubmit={sendEmail}>
			<ContainerForm>
				<StyledLabel>Nombre:</StyledLabel>
				<StyledInput type='text' name='user_name' required />
			</ContainerForm>
			<ContainerForm>
				<StyledLabel>Email:</StyledLabel>
				<StyledInput type='email' name='user_email' required />
			</ContainerForm>
			<ContainerForm>
				<StyledLabel>Mensaje:</StyledLabel>
				<StyledTextArea name='message' required />
			</ContainerForm>
			<StyledButton type='submit' value='Send' />
		</StyledForm>
	);
};
