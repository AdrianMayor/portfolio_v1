import React from "react";
import styles from "./SkillCloud.module.scss";
import Image from "next/image";
import IconJavascript from "../../../public/icon/icon-javascript.svg";

const { skill_cloud, column, column_bigger, skill } = styles;

const SkillCloud = () => {
	return (
		<div className={skill_cloud}>
			<div className={column}>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
			</div>
			<div className={column_bigger}>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
			</div>
			<div className={column_bigger}>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
			</div>
			<div className={column}>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
				<div className={skill}>
					<Image src={IconJavascript} alt='Icon Javascript' />
					<span className='tagText'>JavaScript</span>
				</div>
			</div>
		</div>
	);
};

export default SkillCloud;
