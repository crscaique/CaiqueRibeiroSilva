import { useState } from "react";
import { TechnologiesToolsMenu } from "./TechnologiesToolsMenu";
import { PageArrow } from "./PageArrow";
import {
  scrollToNextSection,
  scrollToPreviousSection,
} from "../utils/sectionScroll";
import type { Skill } from "../data/Skills";

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

  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <section id="technologies-tools">
      <div
        id="container"
        className="relative flex min-h-screen w-full flex-col items-center bg-neutral-100 px-6 py-8 md:px-10 md:py-10"
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
        </div>
        <div className="flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-6 lg:flex-none lg:rounded-2xl lg:px-6 lg:pt-6">
          <TechnologiesToolsMenu onSkillClick={setActiveSkill} />
          <div className="z-10 mx-auto mt-8 w-full max-w-4xl rounded-lg bg-transparent p-4">
            {activeSkill ? (
              <div className="flex animate-fade-in-scale flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img
                  src={activeSkill.logo}
                  alt={`${activeSkill.name} logo`}
                  className="h-28 w-28 flex-shrink-0 object-contain"
                />
                <div className="text-center sm:text-left">
                  <h3
                    id="skill-name"
                    className="text-2xl font-bold text-slate-900"
                  >
                    {activeSkill.name}
                  </h3>
                  <p className="mt-2 text-lg text-slate-600">
                    {activeSkill.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-500">
                    Expertise:{" "}
                    <span className="font-bold text-lime-600">
                      {activeSkill.expertise}
                    </span>
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