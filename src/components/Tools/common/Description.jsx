import React from "react";
import './Description.scss'

const Description = ({ title, colorMe, desc, resources }) => {
	const listLinks = () => {
		const linkArray = resources.links.map(link => {
			return (
				<li className="link" key={link.key}>
					<a href={link.linkUrl}
						className="color-me"
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.linkText}
					</a>
				</li>
			);
		});
		return linkArray;
	}

	return (
		<div className="description">
			<h2 className="title">{title + ' '}<span className="color-me">{colorMe}</span></h2>
			<p className="paragraph">{desc}</p>
			<p className="paragraph paragraph--nomargin">{resources.title}</p>
			<ul className="list list--nomargin">{resources && listLinks()}</ul>
		</div>
	)
}

export { Description }
