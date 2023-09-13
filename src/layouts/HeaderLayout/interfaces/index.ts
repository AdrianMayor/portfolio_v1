import { TFunction } from "i18next";
import { Dispatch, SetStateAction } from "react";

interface IHeaderLayoutProps {
	active: string | undefined;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

interface IUseHeaderLayout {
	codingFlavourLogoAlt: string;
	openMenuAlt: string;
	closeMenuAlt: string;
	language: string;
	changeLang: (newLang: any) => void;
	t: TFunction<"translation", undefined>;
}

export type { IHeaderLayoutProps, IUseHeaderLayout };
