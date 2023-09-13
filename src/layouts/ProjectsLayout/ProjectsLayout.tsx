import IconGithub from "../../../public/icon/icon-github.svg";
import IconGoTo from "../../../public/icon/icon-goto.svg";
import { PROJECTS_MOCK } from "../../constants/projects-mock";
import { NAMESPACES } from "../../i18n/namespaces";
import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectsLayout.module.scss";
import { useInView } from "react-intersection-observer";

const { projects, projects__showcase, card, card__header, card__header__techStack, card__body, card__body__links } =
	styles;

const ProjectsLayout = () => {
	const { t } = useTranslation();

	const visitGithubAlt = t(NAMESPACES.PROJECTS.VISIT_GITHUB_ALT);
	const visitPageAlt = t(NAMESPACES.PROJECTS.VISIT_PROJECT_ALT);
	const projectsLabel = t(NAMESPACES.PROJECTS.TITLE);

	return (
		<section className={projects} id='projects'>
			<div className='column_1'>
				<h2 className={"h2TitleText"} data-testid='projects-title'>
					{projectsLabel}
				</h2>
				<div className={projects__showcase}>
					{PROJECTS_MOCK.map((project) => (
						<div className={card} key={`${project.title}`}>
							<div className={card__header}>
								<span className='text__white'>{project.date}</span>
								<div className={card__header__techStack}>
									{project.techStack.map((techStack) => (
										<Image src={techStack.icon} alt={techStack.alt} key={techStack.alt} />
									))}
								</div>
							</div>
							<div className={card__body}>
								<span className='text__white__bigger'>{project.title}</span>
								<div className={card__body__links}>
									<Link href={project.githubLink}>
										<Image src={IconGithub} alt={visitGithubAlt} />
									</Link>
									<Link href={project.pageLink}>
										<Image src={IconGoTo} alt={visitPageAlt} />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsLayout;
