import React from "react";
import styles from "./LanguageSelector.module.scss";
import i18n from "../../../../i18n/i18n";

const { languageSelector, translate, openMenu } = styles;

const LanguageSelector: React.FC<ILanguageSelector> = ({ open }) => {
	const { changeLanguage, language } = i18n;

	const initialClassName = languageSelector;
	const openedClassName = open ? `${initialClassName} ${openMenu}` : initialClassName;
	const langClassName = language === "en" ? `${openedClassName} ${translate}` : openedClassName;

	return (
		<div
			//   className={`${languageSelector} ${language === "en" ? translate : ""}`}
			className={langClassName}
			data-testid={"header-menu-language-selector"}
		>
			<span
				className={"navBarLangText"}
				onClick={() => changeLanguage("es")}
				data-testid={"header-menu-language-selector-es"}
			>
				ES
			</span>
			<span className={"navBarLangText"}>|</span>
			<span
				className={"navBarLangText"}
				onClick={() => changeLanguage("en")}
				data-testid={"header-menu-language-selector-en"}
			>
				EN
			</span>
		</div>
	);
};

export default LanguageSelector;
