import IconHTML from "../../public/icon/icon-html.svg";
import IconJavascript from "../../public/icon/icon-javascript.svg";
import IconNextJS from "../../public/icon/icon-nextjs.svg";
import ImgPlaceholder from "../../public/img/img-placeholder.png";

const ITEM_MOCK = {
	date: "09-2023",
	githubLink: "https://github.com/DanielSanchezBetancor",
	techStack: [
		{
			icon: IconJavascript,
			alt: "project.iconJavascriptAlt",
		},
		{
			icon: IconNextJS,
			alt: "project.iconNextJsAlt",
		},
		{
			icon: IconHTML,
			alt: "project.iconHtmlAlt",
		},
	],
	background: {
		icon: ImgPlaceholder,
		alt: "project.me",
	},
	pageLink: "https://coding-flavour.com",
	title: "New project",
};

const PROJECTS_MOCK = Array.from(Array(9).keys()).map(() => ITEM_MOCK);

export { PROJECTS_MOCK };
