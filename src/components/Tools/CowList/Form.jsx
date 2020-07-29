import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	justify-content: space-between;
	border: 1px solid blue;
	border-radius: 10px;
	margin-bottom: 1em;
	padding: 1em;
`

const Form = ({ inputData, addCow, handleDataChange }) => (
	<StyledForm onSubmit={addCow}>
		<input value={inputData.name} onChange={handleDataChange} name="name" type="text" />
		<input value={inputData.color} onChange={handleDataChange} name="color" type="text" />
		<button className="button" type="submit">Save</button>
	</StyledForm>
)

export default Form;
