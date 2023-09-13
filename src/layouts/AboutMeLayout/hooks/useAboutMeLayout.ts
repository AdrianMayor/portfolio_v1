import { NAMESPACES } from "../../../i18n/namespaces";
import { useTranslation } from "react-i18next";

const useAboutMeLayout = () => {
	const { t } = useTranslation();

	const frontSpecialistLabel = t(NAMESPACES.ABOUT_ME.ABOUT_ME);
	const visitLinkedinAlt = t(NAMESPACES.FOOTER.VISIT_LINKEDIN_ALT);
	const visitGithubAlt = t(NAMESPACES.FOOTER.VISIT_GITHUB_ALT);

	return { frontSpecialistLabel, visitLinkedinAlt, visitGithubAlt };
};

export default useAboutMeLayout;
