"use client";

import { useWindowSize } from "@src/hooks/useWindowsSize";
import IconGithubWhite from "../../../public/icon/icon-github-white.svg";
import IconGithub from "../../../public/icon/icon-github.svg";
import IconLinkedinWhite from "../../../public/icon/icon-linkedin-white.svg";
import IconLinkedin from "../../../public/icon/icon-linkedin.svg";
import Buttons from "../../../src/common/Buttons";
import ButtonCV from "../../../src/common/Buttons/components/ButtonCV";
import ButtonIcon from "../../../src/common/Buttons/components/ButtonIcon";
import SkillCloud from "../../../src/common/SkillCloud";
import { NAMESPACES } from "../../../src/i18n/namespaces";
import styles from "./AboutMeLayout.module.scss";
import useAboutMeLayout from "./hooks/useAboutMeLayout";

const { aboutMe, aboutMe__wrapper, aboutMe__range, aboutMe__actions, aboutMe__info, hidden } = styles;

const AboutMeLayout = () => {
	const { frontSpecialistLabel, visitLinkedinAlt, visitGithubAlt } = useAboutMeLayout();
	const windowSize = useWindowSize();

	return (
		<section className={aboutMe} id={"aboutMe"}>
			<div
				className={`${aboutMe__wrapper} ${
					windowSize.width && windowSize.width > 1024 ? "column_2" : "column_1"
				}`}
			>
				<div>
					<h1 className='h1TitleText'>Adrian Mayor</h1>
					<h2 className={`h2DetailText ${aboutMe__range} text-gradient`}>Fullstack Developer</h2>
					<div className={aboutMe__info}>
						<span className='text__higher'>{frontSpecialistLabel}</span>
					</div>
					<div className={aboutMe__actions}>
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
				<SkillCloud />
			</div>
		</section>
	);
};

export default AboutMeLayout;
