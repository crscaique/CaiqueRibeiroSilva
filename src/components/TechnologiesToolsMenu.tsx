import { useState } from "react";

export function TechnologiesToolsMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const technologies = [
    {
      name: "JavaScript",
      description: "Core language I use to build interactive web experiences.",
      expertise: "Advanced",
    },
    {
      name: "React",
      description:
        "Component-based library for building modern front-end interfaces.",
      expertise: "Advanced",
    },
    {
      name: "Next",
      description:
        "React framework for routing, SSR, and production-grade performance.",
      expertise: "Intermediate",
    },
    {
      name: "HTML",
      description:
        "Semantic structure for accessible and maintainable web pages.",
      expertise: "Advanced",
    },
    {
      name: "CSS",
      description:
        "Styling language I use for responsive and polished layouts.",
      expertise: "Advanced",
    },
    {
      name: "Tailwind",
      description:
        "Utility-first CSS framework for fast and consistent UI development.",
      expertise: "Advanced",
    },
    {
      name: "Git",
      description:
        "Version control system for collaborative and safe code changes.",
      expertise: "Advanced",
    },
    {
      name: "C#",
      description:
        "Object-oriented language often used for APIs and enterprise apps.",
      expertise: "Intermediate",
    },
    {
      name: "Python",
      description:
        "Versatile language for automation, scripting, and data-related tasks.",
      expertise: "Intermediate",
    },
    {
      name: "AI",
      description:
        "Applied AI tools and workflows to accelerate product delivery.",
      expertise: "Intermediate",
    },
  ];

  const tools = [
    {
      name: "Figma",
      description:
        "Collaborative design tool for wireframes and high-fidelity prototypes.",
      expertise: "Advanced",
    },
    {
      name: "Visual Studio Code",
      description:
        "Primary code editor with extensions for productive development.",
      expertise: "Advanced",
    },
    {
      name: "GitHub",
      description:
        "Platform for repositories, pull requests, and code collaboration.",
      expertise: "Advanced",
    },
    {
      name: "NPM",
      description:
        "Package manager for installing and managing JavaScript dependencies.",
      expertise: "Advanced",
    },
    {
      name: "Slack",
      description: "Team communication tool used for fast async collaboration.",
      expertise: "Advanced",
    },
    {
      name: "Confluence",
      description:
        "Documentation workspace for project notes and shared knowledge.",
      expertise: "Intermediate",
    },
    {
      name: "CRM",
      description:
        "Customer relationship management workflows for sales and client tracking.",
      expertise: "Intermediate",
    },
  ];

  const renderItem = (
    item: { name: string; description: string; expertise: string },
    type: "tech" | "tool",
  ) => {
    const itemKey = `${type}-${item.name}`;
    const isActive = activeItem === itemKey;

    return (
      <li key={itemKey} className="group relative">
        <button
          type="button"
          className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-200"
          onClick={() => setActiveItem(isActive ? null : itemKey)}
          aria-expanded={isActive}
        >
          {item.name}
        </button>

        <div className="pointer-events-none absolute top-full left-0 z-20 mt-2 hidden w-64 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-lg lg:group-hover:block">
          <p className="text-sm font-semibold text-slate-900">{item.name}</p>
          <p className="mt-1 text-xs text-slate-600">{item.description}</p>
          <p className="mt-2 text-xs text-slate-500">
            Expertise: {item.expertise}
          </p>
        </div>

        {isActive && (
          <div className="mt-2 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm lg:hidden">
            <p className="text-sm font-semibold text-slate-900">{item.name}</p>
            <p className="mt-1 text-xs text-slate-600">{item.description}</p>
            <p className="mt-2 text-xs text-slate-500">
              Expertise: {item.expertise}
            </p>
          </div>
        )}
      </li>
    );
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Technologies</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => renderItem(technology, "tech"))}
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Tools</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tools.map((tool) => renderItem(tool, "tool"))}
          </ul>
        </article>
      </div>
    </section>
  );
}
