"use client";

import React, { useCallback, useRef, useState } from "react";
import useHomeView from "./hooks/useHomeView";
import styles from "./HomeView.module.scss";

import HeaderLayout from "@layouts/HeaderLayout";
import MainContentLayout from "@layouts/MainContentLayout";
import FooterLayout from "@layouts/FooterLayout";
import { MENU_OPTIONS } from "@src/constants";

const { homeViewContainer } = styles;

const HomeView: React.FC = () => {
	const { open, setOpen } = useHomeView();

	const [active, setActive] = useState<string | undefined>();

	return (
		<div className={homeViewContainer}>
			<HeaderLayout open={open} setOpen={setOpen} active={active} />
			<MainContentLayout setActive={setActive} />
			<FooterLayout />
		</div>
	);
};

export default HomeView;
