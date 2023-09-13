"use client";

import { MENU_OPTIONS } from "@src/constants";
import { useRef, useState } from "react";

const useHomeView = () => {
	const aboutMeRef = useRef<HTMLElement | null>(null);
	const projectsRef = useRef<HTMLElement | null>(null);
	const contactRef = useRef<HTMLElement | null>(null);
	const activeIdRef = useRef<number | null>(MENU_OPTIONS.ABOUT_ME.id);
	const [open, setOpen] = useState(false); // Can be a context to avoid prop drilling

	return { activeIdRef, aboutMeRef, projectsRef, contactRef, open, setOpen };
};

export default useHomeView;
