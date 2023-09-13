import AboutMeLayout from "@layouts/AboutMeLayout";
import ProjectsLayout from "@layouts/ProjectsLayout";
import ContactMeLayout from "@layouts/ContactMeLayout";
import SnapComponent from "@components/SnapComponent";
import IMainContentProps from "./interface";

const MainContentLayout = ({ setActive }: IMainContentProps) => {
	return (
		<main>
			<SnapComponent setActive={setActive}>
				<AboutMeLayout></AboutMeLayout>
			</SnapComponent>

			<SnapComponent setActive={setActive}>
				<ProjectsLayout></ProjectsLayout>
			</SnapComponent>

			<SnapComponent setActive={setActive}>
				<ContactMeLayout></ContactMeLayout>
			</SnapComponent>
		</main>
	);
};

export default MainContentLayout;
