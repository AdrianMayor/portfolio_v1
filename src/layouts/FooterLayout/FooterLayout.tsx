import IconGithubWhite from "@public/icon/icon-github-white.svg";
import IconGithub from "@public/icon/icon-github.svg";
import IconLinkedinWhite from "@public/icon/icon-linkedin-white.svg";
import IconLinkedin from "@public/icon/icon-linkedin.svg";
import Buttons from "@src/common/Buttons";
import ButtonCV from "@src/common/Buttons/components/ButtonCV";
import ButtonIcon from "@src/common/Buttons/components/ButtonIcon";
import React from "react";
import useFooterLayout from "./hooks/useFooterLayout";
import styles from "./FooterLayout.module.scss";
import { NAMESPACES } from "@src/i18n/namespaces";

const { footer, footer__wrapper, socials, footer__name } = styles;

const FooterLayout: React.FC = () => {
	const { visitLinkedinAlt, visitGithubAlt } = useFooterLayout();

	return (
		<footer className={`gradient-horizontal ${footer} `} data-testid={"footer"}>
			<div className={`column_1 ${footer__wrapper}`}>
				<div data-testid={"footer-name"}>
					<span className={`footerText ${footer__name}`}>Adrian Mayor</span>
					<span className='yearFooter'>| 2023</span>
				</div>
				<div className={socials} data-testid={"footer-socials"}>
					<Buttons goTo='misc/CV.pdf' download>
						<ButtonCV />
					</Buttons>
					<Buttons color='blue' goTo={NAMESPACES.LINKS.LINKEDIN}>
						<ButtonIcon alt={visitLinkedinAlt} icon={IconLinkedin} iconWhite={IconLinkedinWhite} />
					</Buttons>
					<Buttons color='purple' goTo={NAMESPACES.LINKS.GITHUB}>
						<ButtonIcon alt={visitGithubAlt} icon={IconGithub} iconWhite={IconGithubWhite} />
					</Buttons>
				</div>
			</div>
		</footer>
	);
};
export default FooterLayout;
