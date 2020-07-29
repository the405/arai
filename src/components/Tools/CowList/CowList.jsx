import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import cowData from './cowData';

const CowList = () => {
	const [editMode, setEditMode] = useState(false);
	const [cowList, setCowList] = useState(cowData);
	const [inputData, setInputData] = useState({
		name: "",
		color: "",
		id: 0
	});

	const toggleForm = () => setEditMode(editMode => !editMode);

	const addCow = (event) => {
		event.preventDefault();
		setCowList(cowList.concat(inputData));
		toggleForm();
	};

	const handleDataChange = (event) => {
		setInputData({
			...inputData,
			[event.target.name]: event.target.value,
			id: cowList.length
		});
	};

	const renderForm = () => <Form handleDataChange={handleDataChange} submit={addCow} inputData={inputData} />;
	const renderList = () => (
		<>
			<List list={cowList} />
			<button className="button" onClick={toggleForm}>Add a cow</button>
		</>
	);

	return editMode ? renderForm() : renderList();
};

export { CowList };
