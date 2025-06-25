"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

export interface PositionContextProps {
	positions: {
		aboutUs?: DOMRect;
		product?: DOMRect;
		sustainability?: DOMRect;
		media?: DOMRect;
	};
	setPosition: (
		key: keyof PositionContextProps["positions"],
		position: DOMRect
	) => void;
}

const PositionContext = createContext<PositionContextProps | undefined>(
	undefined
);

export const usePositionContext = () => {
	const context = useContext(PositionContext);
	if (!context) {
		throw new Error(
			"usePositionContext must be used within a PositionProvider"
		);
	}
	return context;
};

interface PositionProviderProps {
	children: ReactNode;
}

export const PositionProvider: React.FC<PositionProviderProps> = ({
	children,
}) => {
	const [positions, setPositions] = useState<PositionContextProps["positions"]>(
		{}
	);

	const setPosition = (
		key: keyof PositionContextProps["positions"],
		position: DOMRect
	) => {
		setPositions((prevPositions) => ({
			...prevPositions,
			[key]: position,
		}));
	};

	return (
		<PositionContext.Provider value={{ positions, setPosition }}>
			{children}
		</PositionContext.Provider>
	);
};
