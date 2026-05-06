import { useState } from "react";
import { PageArrow } from "./PageArrow";
import {
  scrollToNextSection,
  scrollToPreviousSection,
} from "../utils/sectionScroll";

// Import logos
import reactLogo from "../img/logos/react.svg";
import typescriptLogo from "../img/logos/typescript.svg";
import javascriptLogo from "../img/logos/javascript.svg";
import tailwindLogo from "../img/logos/tailwind.svg";
import gitLogo from "../img/logos/git.svg";

import { technologies, tools, type Skill as DesktopSkill } from "../data/Skills";

const techData: TechContent = {
  technologies: [
    { name: "React", icon: reactLogo, experienceType: "Work Experience" },
    { name: "TypeScript", icon: typescriptLogo, experienceType: "Work Experience" },
    { name: "JavaScript", icon: javascriptLogo, experienceType: "Work Experience" },
  ],
  tools: [
    { name: "Tailwind CSS", icon: tailwindLogo, experienceType: "Work Experience" },
    { name: "Git", icon: gitLogo, experienceType: "Academic Experience" },
  ],
};

interface MobileSkill {
  name: string;
  icon: string;
  experienceType: "Work Experience" | "Academic Experience";
}

interface TechContent {
  technologies: MobileSkill[];
  tools: MobileSkill[];
}

export function TechnologiesTools() {
  const handleScrollToPreviousSection = () => {
    scrollToPreviousSection({
      currentSectionId: "technologies-tools",
    });
  };
  const handleScrollToNextSection = () => {
    scrollToNextSection({
      currentSectionId: "technologies-tools",
    });
  };

  const [openSubsections, setOpenSubsections] = useState({
    technologies: true,
    tools: true,
  });

  const [activeSkill, setActiveSkill] = useState<DesktopSkill | null>(null);

  return (
    <section id="technologies-tools">
      <div
        id="container"
        className="relative flex min-h-screen w-full flex-col items-center bg-neutral-100 px-6 py-8 md:px-10 md:py-10 lg:justify-center"
      >
        <div className="mb-2">
          <PageArrow
          direction="up"
          placement="top"
          onArrowClick={handleScrollToPreviousSection}
          ariaLabel="Scroll to previous section"
          keepFullWidthLine={false}
          lineClassName="none"
          />
        </div>
        <div className="text-center lg:w-full">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Tech Toolkit
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            A selection of my go-to technologies and tools.
          </p>
        </div>

        {/* --- Mobile & Medium View --- */}
        <div className="w-full max-w-4xl flex-1 py-8 lg:hidden">
          <TechToolsView content={techData} openSubsections={openSubsections} setOpenSubsections={setOpenSubsections} />
        </div>

        {/* --- Large Screen View --- */}
        <div className="hidden w-full max-w-6xl flex-1 flex-col items-center justify-center gap-6 lg:flex lg:flex-none">
          <TechnologiesToolsMenu onSkillClick={setActiveSkill} />
          {/* Details Display */}
          <div className="z-10 mx-auto mt-8 w-full max-w-4xl rounded-lg bg-transparent p-4">
            {activeSkill ? (
              <div className="flex animate-fade-in-scale flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img
                  src={activeSkill.logo}
                  alt={`${activeSkill.name} logo`}
                  className="h-28 w-28 flex-shrink-0 object-contain"
                />
                <div className="text-center sm:text-left">
                  <h3 id="skill-name" className="text-2xl font-bold text-slate-900">
                    {activeSkill.name}
                  </h3>
                  <p className="mt-2 text-lg text-slate-600">{activeSkill.description}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-500">
                    Expertise: <span className="font-bold text-lime-600">{activeSkill.expertise}</span>
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-center text-base leading-7 text-gray-600 sm:text-lg">
                I believe in using the right tool for the job, focusing on tools that promote clean code, maintainability, and a great developer experience. Click on any of the items above to see more details.
              </p>
            )}
          </div>
        </div>

        <PageArrow
          direction="down"
          placement="bottom"
          onArrowClick={handleScrollToNextSection}
          ariaLabel="Scroll to next section"
          keepFullWidthLine={true}
          lineClassName="bg-slate-500"
          neverHidden={true}
        />
      </div>
    </section>
  );
}

// --- Sub-Components ---

function TechToolsView({ content, openSubsections, setOpenSubsections }: { content: TechContent; openSubsections: { technologies: boolean; tools: boolean; }; setOpenSubsections: React.Dispatch<React.SetStateAction<{ technologies: boolean; tools: boolean; }>>; }) {
  const toggleSubsection = (key: "technologies" | "tools") => {
    setOpenSubsections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="h-full w-full space-y-4">
      <CollapsibleSection
        title="Technologies"
        isOpen={openSubsections.technologies}
        onToggle={() => toggleSubsection("technologies")}
      >
        {content.technologies.map((tech) => (
          <TechnologyTag key={tech.name} {...tech} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        title="Tools"
        isOpen={openSubsections.tools}
        onToggle={() => toggleSubsection("tools")}
      >
        {content.tools.map((tool) => (
          <TechnologyTag key={tool.name} {...tool} />
        ))}
      </CollapsibleSection>
    </div>
  );
}

type TechnologiesToolsMenuProps = {
  onSkillClick: (skill: DesktopSkill) => void;
};

function TechnologiesToolsMenu({ onSkillClick }: TechnologiesToolsMenuProps) {
  const renderSkillList = (items: DesktopSkill[]) => {
    return (
      <ul className="mt-4 flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <li key={item.name}>
            <button
              type="button"
              className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              onClick={() => onSkillClick(item)}
              aria-label={`View details for ${item.name}`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="relative w-full">
      <section className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-lg transition-all duration-300 grayscale hover:grayscale-0">
            <h3 className="text-xl font-semibold text-slate-900">Technologies</h3>
            {renderSkillList(technologies)}
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-lg transition-all duration-300 grayscale hover:grayscale-0">
            <h3 className="text-xl font-semibold text-slate-900">Tools</h3>
            {renderSkillList(tools)}
          </article>
        </div>
      </section>
    </div>
  );
}

function CollapsibleSection({ title, isOpen, onToggle, children }: { title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode; }) {
  return (
    <div className="rounded-md border border-gray-200/80 bg-black/5 p-3">
      <button onClick={onToggle} className="flex w-full items-center justify-between font-mono text-sm font-semibold">
        {title}
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>
      {isOpen && <div className="mt-4 flex flex-wrap gap-3">{children}</div>}
    </div>
  );
}

function TechnologyTag({ name, icon, experienceType }: MobileSkill) {
  const isWork = experienceType === "Work Experience";
  return (
    <div className="flex animate-fade-in-scale items-center gap-2 rounded-full bg-white p-2 pr-3 text-sm shadow-sm ring-1 ring-gray-200">
      <img src={icon} alt={`${name} logo`} className="size-5" />
      <span className="font-mono font-medium text-gray-800">
        <span className="text-lime-600">#</span>{name}
      </span>
      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${isWork ? "bg-sky-100 text-sky-800" : "bg-purple-100 text-purple-800"}`}>
        {experienceType}
      </span>
    </div>
  );
}