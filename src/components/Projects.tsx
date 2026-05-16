import { useState } from "react";
import { PageArrow } from "./PageArrow";
import {
  scrollToNextSection,
  scrollToPreviousSection,
} from "../utils/sectionScroll";
import { projects } from "../data/Projects";
import { ProjectModal } from "../data/ProjectModal";

export function Projects(){
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

    const handleNextProject = () => {
      if (selectedProjectIndex !== null) {
        setSelectedProjectIndex((prevIndex) => (prevIndex! + 1) % projects.length);
      }
    };
  
    const handlePreviousProject = () => {
      if (selectedProjectIndex !== null) {
        setSelectedProjectIndex((prevIndex) => (prevIndex! - 1 + projects.length) % projects.length);
      }
    };

    const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

    const handleScrollToPreviousSection = () => {
    scrollToPreviousSection({
      currentSectionId: "projects",
    });
  };
  const handleScrollToNextSection = () => {
    scrollToNextSection({
      currentSectionId: "projects",
    });
  };

    return (
<section id="projects">
      <div
        id="container"
        className="relative flex w-full flex-col items-center overflow-hidden bg-neutral-100 px-6 py-16 shadow-xl md:px-10 md:py-10 lg:min-h-screen lg:bg-slate-950"
      ><div className="hidden lg:block">
        <PageArrow
          direction="up"
          placement="top"
          onArrowClick={handleScrollToPreviousSection}
          ariaLabel="Scroll to previous section"
          keepFullWidthLine={false}
          lineClassName="none"
          neverHidden={false}
        />
      </div>
        <div className="flex w-full max-w-6xl flex-1 flex-col items-center gap-6 lg:my-auto lg:flex-none lg:pt-6 lg:-translate-y-8 lg:rounded-2xl lg:px-6">
          <div className="mb-8 text-center lg:w-full">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-white sm:text-4xl">
              Projects
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-gray-600 lg:text-gray-400 italic sm:text-lg">
              A selection of projects I've worked on.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedProjectIndex(index)}
              >
                <img
                  src={project.screenshots[0] || "https://placehold.co/600x400/1e293b/ffffff?text=Project"}
                  alt={`Screenshot of ${project.name}`}
                  className="h-40 w-full object-cover md:h-56"
                />
                {/* Title Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-bold text-white">{project.name}</h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
                  <p className="select-none text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Click to expand
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProjectIndex(null)}
            onNext={handleNextProject}
            onPrevious={handlePreviousProject}
          />
        )}
        <div className="hidden w-full lg:block">
          <PageArrow
            direction="down"
            placement="bottom"
            onArrowClick={handleScrollToNextSection}
            ariaLabel="Scroll to next section"
            lineClassName="bg-slate-500"
            keepFullWidthLine={true}
            neverHidden={true}
          />
        </div>
      </div>
    </section>
    )
}