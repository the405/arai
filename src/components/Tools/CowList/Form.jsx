import React from 'react';
import styled from 'styled-components';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`

const Form = ({ inputData, submit, handleChange }) => (
	<StyledForm onSubmit={submit}>
		<Input className="input" value={inputData.name} handleChange={handleChange} name="name" type="text" placeholder="Name" />
		<Input className="input" value={inputData.color} handleChange={handleChange} name="color" type="text" placeholder="Color" />
		<Button label="Submit" className="button" disabled={false} handleClick={submit} />
	</StyledForm>
)

export default Form;
