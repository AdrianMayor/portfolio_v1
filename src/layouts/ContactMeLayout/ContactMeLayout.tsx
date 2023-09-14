import IconSend from "../../../public/icon/icon-send.svg";
import IconSendWhite from "../../../public/icon/icon-send-white.svg";
import Buttons from "../../common/Buttons";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./ContactMeLayout.module.scss";
import { useWindowSize } from "@src/hooks/useWindowsSize";
import ButtonIcon from "@src/common/Buttons/components/ButtonIcon";

const { contactMe, contactMe__form, contactMe__form__wrapper, gradient, actions, sendButton } = styles;

const ContactMeLayout = () => {
	const { t } = useTranslation();

	const contactLabel = t("Contact");

	const windowSize = useWindowSize();
	return (
		<section className={contactMe} id='contactMe'>
			<div className={windowSize.width && windowSize.width > 1024 ? "column_3" : "column_1"}>
				<h2 className={"h2TitleText"} data-testid='projects-title'>
					{contactLabel}
				</h2>
				<form className={contactMe__form}>
					<div className={contactMe__form__wrapper}>
						<span className='inputLabelText'>Full Name</span>
						<div className={gradient}>
							<input type='text' className='text' />
						</div>
					</div>
					<div className={contactMe__form__wrapper}>
						<span className='inputLabelText'>E-mail</span>
						<div className={gradient}>
							<input type='text' className='text' />
						</div>
					</div>
					<div className={contactMe__form__wrapper}>
						<span className='inputLabelText'>Message</span>
						<div className={gradient}>
							<textarea
								name=''
								id=''
								rows={windowSize.width && windowSize.width > 1424 ? 10 : 5}
								className='text'
							></textarea>
						</div>
					</div>
					<Buttons goTo='mailto:adrianmayorsantana@gmail.com'>
						{/* <span className='bold'>Send</span> */}
						<ButtonIcon alt='Send your email' icon={IconSend} iconWhite={IconSendWhite} />

						{/* <Image src={IconSend} alt='Send your email' className={sendButton} /> */}
					</Buttons>
				</form>
			</div>
		</section>
	);
};

export default ContactMeLayout;
