import React from 'react';
import styled from 'styled-components';
import Cow from './Cow';

const StyledList = styled.div`
	display: flex;
	flex-direction: column;
`

const List = ({ list }) => (
	<StyledList>
		{list.map(item => <Cow {...item} key={item.id} />)}
	</StyledList>
)

export default List;
