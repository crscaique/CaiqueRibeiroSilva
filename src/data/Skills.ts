import jsLogo from "../img/logos/js.svg";
import reactLogo from "../img/logos/react.svg";
import nextLogo from "../img/logos/next.svg";
import htmlLogo from "../img/logos/html.svg";
import cssLogo from "../img/logos/css.svg";
import tailwindLogo from "../img/logos/tailwind.svg";
import gitLogo from "../img/logos/git.svg";
import csharpLogo from "../img/logos/csharp.svg";
import pythonLogo from "../img/logos/python.svg";
import aiLogo from "../img/logos/ai.svg";
import figmaLogo from "../img/logos/figma.svg";
import vscodeLogo from "../img/logos/vscode.svg";
import githubLogo from "../img/logos/github.svg";
import npmLogo from "../img/logos/npm.svg";
import slackLogo from "../img/logos/slack.svg";
import confluenceLogo from "../img/logos/confluence.svg";
import crmLogo from "../img/logos/crm.svg";

export type Skill = {
  name: string;
  description: string;
  expertise: string;
  logo: string;
};

export const technologies: Skill[] = [
  {
    name: "JavaScript",
    description: "Core language I use to build interactive web experiences.",
    expertise: "Advanced",
    logo: jsLogo,
  },
  {
    name: "React",
    description:
      "Component-based library for building modern front-end interfaces.",
    expertise: "Advanced",
    logo: reactLogo,
  },
  {
    name: "Next.js",
    description:
      "React framework for routing, SSR, and production-grade performance.",
    expertise: "Intermediate",
    logo: nextLogo,
  },
  {
    name: "HTML",
    description: "Semantic structure for accessible and maintainable web pages.",
    expertise: "Advanced",
    logo: htmlLogo,
  },
  {
    name: "CSS",
    description: "Styling language I use for responsive and polished layouts.",
    expertise: "Advanced",
    logo: cssLogo,
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for fast and consistent UI development.",
    expertise: "Advanced",
    logo: tailwindLogo,
  },
  {
    name: "Git",
    description:
      "Version control system for collaborative and safe code changes.",
    expertise: "Advanced",
    logo: gitLogo,
  },
  {
    name: "C#",
    description:
      "Object-oriented language often used for APIs and enterprise apps.",
    expertise: "Intermediate",
    logo: csharpLogo,
  },
  {
    name: "Python",
    description:
      "Versatile language for automation, scripting, and data-related tasks.",
    expertise: "Intermediate",
    logo: pythonLogo,
  },
  {
    name: "AI",
    description: "Applied AI tools and workflows to accelerate product delivery.",
    expertise: "Intermediate",
    logo: aiLogo,
  },
];

export const tools: Skill[] = [
  {
    name: "Figma",
    description:
      "Collaborative design tool for wireframes and high-fidelity prototypes.",
    expertise: "Advanced",
    logo: figmaLogo,
  },
  {
    name: "Visual Studio Code",
    description: "Primary code editor with extensions for productive development.",
    expertise: "Advanced",
    logo: vscodeLogo,
  },
  {
    name: "GitHub",
    description:
      "Platform for repositories, pull requests, and code collaboration.",
    expertise: "Advanced",
    logo: githubLogo,
  },
  {
    name: "NPM",
    description:
      "Package manager for installing and managing JavaScript dependencies.",
    expertise: "Advanced",
    logo: npmLogo,
  },
  {
    name: "Slack",
    description: "Team communication tool used for fast async collaboration.",
    expertise: "Advanced",
    logo: slackLogo,
  },
  {
    name: "Confluence",
    description: "Documentation workspace for project notes and shared knowledge.",
    expertise: "Intermediate",
    logo: confluenceLogo,
  },
  {
    name: "CRM",
    description:
      "Customer relationship management workflows for sales and client tracking.",
    expertise: "Intermediate",
    logo: crmLogo,
  },
];
