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
				'YOUR_SERVICE_ID',
				'YOUR_TEMPLATE_ID',
				form.current,
				'YOUR_PUBLIC_KEY'
			)
			.then(
				result => {
					console.log(result.text);
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
				<StyledInput type='text' name='user_name' />
			</ContainerForm>
			<ContainerForm>
				<StyledLabel>Email:</StyledLabel>
				<StyledInput type='email' name='user_email' />
			</ContainerForm>
			<ContainerForm>
				<StyledLabel>Mensaje:</StyledLabel>
				<StyledTextArea name='message' />
			</ContainerForm>
			<StyledButton type='submit' value='Send' />
		</StyledForm>
	);
};
