import { StaticImageData } from "next/image";

interface ITechStack {
  icon: StaticImageData;
  alt: string;
}

interface IBackground extends ITechStack {}

interface IProject {
  date: string;
  techStack: ITechStack[];
  title: string;
  githubLink: string;
  pageLink: string;
  background: IBackground;
}

export type { IProject };
