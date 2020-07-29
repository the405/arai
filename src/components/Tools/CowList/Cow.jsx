import React from 'react';
import styled from 'styled-components';

const StyledCow = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid blue;
	border-radius: 10px;
	margin-bottom: 1em;
	padding: 1em;
`

const Cow = ({ id, name, color }) => (
	<StyledCow className="cow">
		<div className="cow__name">{id+1}. {name}</div>
		<div className="cow__color">{color}</div>
	</StyledCow>
)

export default Cow;
