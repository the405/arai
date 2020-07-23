import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../common/Button';
import { Cow } from './Cow';
import { cowData } from './cowData';

const StyledList = styled.div`
	display: flex;
	flex-direction: column;

	div.cow {
		margin: 0.5em;
	}
`

const useInput = ({ type }) => {
	const [value, setValue] = useState("");
	const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
	return [value, input];
}

const CowList = () => {
	const [editMode, setEditMode] = useState(false);
	const [cows, setCows] = useState(cowData);
	const [cowName, setCowName] = useInput({ type: "text" });
	const [cowColor, setCowColor] = useInput({ type: "text" });

	const toggleForm = () => {
		setEditMode(!editMode);
	};

	const addCow = () => {
		let cowInfo = {
			name: cowName,
			color: cowColor,
			key: cows.length
		}
		setCows(cows.concat(cowInfo));
		toggleForm();
	};

	const renderForm = () => (
		<>
			{setCowName}
   			{setCowColor}
			<Button
				label="Add"
				handleClick={addCow}
				className="button editmode"
			/>
		</>
	);

	const renderList = () => (
		<>
			<StyledList className="cowlist">
				{cows.map(cow => <Cow {...cow} key={cow.key}/>)}
			</StyledList>
			<Button
				label="Add a cow"
				handleClick={toggleForm}
				className="button editmode"
			/>
		</>
	);

	return editMode ? renderForm() : renderList();
};

export { CowList };
