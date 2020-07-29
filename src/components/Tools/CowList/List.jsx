import React from 'react';
import styled from 'styled-components';
import Cow from './Cow';

const StyledList = styled.div`
	display: flex;
	flex-direction: column;
`

const List = ({ cowList, toggleForm }) => (
	<StyledList>
		{cowList.map(cow => <Cow {...cow} key={cow.id} />)}
		<button className="button" onClick={toggleForm}>Add a cow</button>
	</StyledList>
)

export default List;
