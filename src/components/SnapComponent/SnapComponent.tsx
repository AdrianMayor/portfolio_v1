"use client";

import { useInView } from "react-intersection-observer";
import ISnapComponent from "./interface";
import styles from "./SnapComponent.module.scss";
import { useEffect, useRef } from "react";

const SnapComponent = ({ children, setActive }: ISnapComponent) => {
	const { snapContainer, appear } = styles;
	const [ref, inView, entry] = useInView();

	// console.log(entry);
	useEffect(() => {
		if (inView) {
			const section = entry?.target.children[0].id;
			setActive(section);
			console.log(section);
		}
	}, [inView]);

	return (
		<div ref={ref} className={`${snapContainer} ${inView && appear}`}>
			{children}
		</div>
	);
};

export default SnapComponent;
