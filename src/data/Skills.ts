import reactLogo from "../img/logos/react.svg";
import typescriptLogo from "../img/logos/typescript.svg";
import javascriptLogo from "../img/logos/javascript.svg";
import tailwindLogo from "../img/logos/tailwind.svg";
import gitLogo from "../img/logos/git.svg";

export interface Skill {
  name: string;
  logo: string;
  description: string;
  expertise: string;
}

export const technologies: Skill[] = [
  {
    name: "React",
    logo: reactLogo,
    description: "A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.",
    expertise: "Advanced",
  },
  {
    name: "TypeScript",
    logo: typescriptLogo,
    description: "A typed superset of JavaScript that compiles to plain JavaScript, improving code quality and maintainability.",
    expertise: "Intermediate",
  },
  {
    name: "JavaScript",
    logo: javascriptLogo,
    description: "The core language of the web, used to create dynamic and interactive user experiences.",
    expertise: "Advanced",
  },
];

export const tools: Skill[] = [
  {
    name: "Tailwind CSS",
    logo: tailwindLogo,
    description: "A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML.",
    expertise: "Advanced",
  },
  {
    name: "Git",
    logo: gitLogo,
    description: "A distributed version control system for tracking changes in source code during software development.",
    expertise: "Intermediate",
  },
];