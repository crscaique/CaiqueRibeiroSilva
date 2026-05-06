import LinkedIn from "../img/logos/linkedin.svg";
import Email from "../img/logos/email.svg";
import Github from "../img/logos/github.svg";

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/crscaique",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/crs-caique-ribeiro-silva/",
    icon: LinkedIn,
  },
  {
    name: "Email",
    url: "mailto:crs_caique@hotmail.com",
    icon: Email,
  },
];