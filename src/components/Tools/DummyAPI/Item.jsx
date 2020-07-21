import React from "react";
import './Item.scss';

const Item = ({ id, title, body, handleChange, completed }) => {
	const completedStyle = {
		textDecoration: "line-through",
		color: "#cdcdcd"
	}

	return (
		<li className="todo">
			<div className="todo__title">
				<input
					name={'todo'+id}
					type="checkbox"
					checked={completed}
					onChange={() => handleChange(id)}
					id={'todo'+id}
				/>
				<label htmlFor={'todo'+id} style={completed ? completedStyle : null}>{title}</label>
			</div>
			<p className="todo__description" style={{display: body ? "block" : "none"}}>{body}</p>
		</li>
	);
}

export default Item;
