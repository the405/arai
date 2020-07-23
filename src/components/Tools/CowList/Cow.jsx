import React from 'react';

const Cow = ({ name, color }) => (
	<div className="cow">
		<div className="cow__name">{name}</div>
		<div className="cow__color">{color}</div>
	</div>
);

export { Cow };
