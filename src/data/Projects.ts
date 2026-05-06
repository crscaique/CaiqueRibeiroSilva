export type Project = {
  name: string;
  description: string;
  screenshots: string[];
  url: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    name: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio built with React, TypeScript, and Tailwind CSS to showcase my skills and projects. Features a modern, single-page layout with smooth scrolling and interactive sections.",
    screenshots: [
      "https://placehold.co/1280x720/1e293b/ffffff?text=Portfolio+Homepage",
      "https://placehold.co/1280x720/1e293b/ffffff?text=Projects+Section",
      "https://placehold.co/1280x720/1e293b/ffffff?text=Mobile+View",
    ],
    url: "https://github.com/caiqueribeiros/cai-responsive",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    name: "Project Management Tool",
    description:
      "A conceptual project management application designed to help teams organize tasks, track progress, and collaborate effectively. Features a drag-and-drop Kanban board and real-time updates.",
    screenshots: [
      "https://placehold.co/1280x720/1e293b/ffffff?text=Kanban+Board",
      "https://placehold.co/1280x720/1e293b/ffffff?text=Task+Details",
      "https://placehold.co/1280x720/1e293b/ffffff?text=Dashboard",
    ],
    url: "https://github.com/caiqueribeiros/example-project-tool",
    technologies: ["React", "Node.js", "Socket.IO", "PostgreSQL"],
  },
];
