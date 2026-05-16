export type Project = {
  name: string;
  description: string;
  screenshots: string[];
  url: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    name: "Scholar Spark",
    description:
      "Contributed to an LLM-powered web application for academic research. My work focused on building a scalable and user-friendly front-end interface and developing a comprehensive Design System with reusable components.",
    screenshots: [
      "https://placehold.co/1280x720/1e293b/ffffff?text=Scholar+Spark+UI",
    ],
    url: "https://www.scholarspark.ai/",
    technologies: ["Next.js", "React", "TypeScript", "Storybook", "Tamagui"],
  },
  {
    name: "Memories Pilot",
    description:
      "A clean and intuitive application designed to help users capture, organize, and revisit their most cherished memories. The focus is on a seamless and enjoyable user experience.",
    screenshots: [
      "https://placehold.co/1280x720/1e293b/ffffff?text=Memories+Pilot+App",
    ],
    url: "https://memoriespilot.lovable.app/",
    technologies: ["React", "TypeScript", "Web App"],
  },
  {
    name: "Cloud Platforms Evaluation Paper",
    description:
      "An in-depth academic research paper evaluating and comparing the features, performance, and cost-effectiveness of major cloud platforms like AWS, Azure, and Google Cloud.",
    screenshots: [
      "https://placehold.co/1280x720/1e293b/ffffff?text=Cloud+Evaluation+Paper",
    ],
    url: "https://github.com/crscaique/Cloud-Platforms---Evaluation-Paper",
    technologies: ["Academic Research", "AWS", "Azure", "GCP"],
  },
  {
    name: "User Experience (UX) Analysis",
    description:
      "A project focused on applying user experience (UX) principles. It involved user research, analysis, and the creation of design mockups to enhance application usability and accessibility.",
    screenshots: ["https://placehold.co/1280x720/1e293b/ffffff?text=UX+Analysis"],
    url: "https://github.com/crscaique/user-experience",
    technologies: ["Figma", "User Research", "Prototyping"],
  },
  {
    name: "Tamaki-Makaurau Project",
    description:
      "A web project centered around Tamaki-Makaurau (Auckland), designed to explore local data or provide valuable information about the region through an interactive interface.",
    screenshots: ["https://placehold.co/1280x720/1e293b/ffffff?text=Auckland+Project"],
    url: "https://github.com/crscaique/Tamaki-Makaurau",
    technologies: ["React", "TypeScript", "Web Development"],
  },
];
