"use client";
import React from "react";
import "../../public/recStyle.css";

interface Props {
	width: number;
	height: number;
}

const Loading: React.FC<Props> = ({ width, height }) => {
	return (
		<div className="container">
			<div className="sk-folding-cube">
				<div className="sk-cube1 sk-cube"></div>
				<div className="sk-cube2 sk-cube"></div>
				<div className="sk-cube4 sk-cube"></div>
				<div className="sk-cube3 sk-cube"></div>
			</div>
		</div>
	);
};

export default Loading;
