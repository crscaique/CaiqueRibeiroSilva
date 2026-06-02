import { useState, useEffect } from "react";
import linkedInProfile from "../img/linkedid.webp";
import { PageArrow } from "./PageArrow";
import { scrollToNextSection } from "../utils/sectionScroll";

export function Homepage() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleScrollToNextSection = () => {
    scrollToNextSection({
      currentSectionId: "Homepage",
      preferredTargetId: "About",
    });
  };

  return (
    <section id="Homepage">
      <div
        id="container"
        className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col overflow-hidden bg-white lg:bg-slate-950"
      >
        <div className="z-10 flex w-full flex-1 items-center justify-center">
          <div className="md:backdrop-blur-0 flex w-full max-w-5xl flex-col items-center justify-center px-4 py-8 text-center sm:px-8 sm:py-10 md:bg-transparent md:px-12 md:py-12 lg:max-w-6xl lg:border-0 lg:px-16 lg:py-16">
            <img
              src={linkedInProfile}
              alt="Caique R. Silva profile picture"
              className="mb-5 size-40 rounded-full object-cover ring-4 ring-slate-500 transition-all duration-500 md:grayscale hover:grayscale-0 lg:size-50"
            />
            <h1 className="px-2 text-3xl leading-tight font-bold text-black sm:text-4xl md:text-5xl lg:text-neutral-50">
              Caique R. Silva
            </h1>

            <h2 className="mt-4 max-w-2xl px-2 font-mono text-sm text-black sm:text-base md:text-xl lg:text-neutral-50">
              I.T. Professional | Software Engineer
            </h2>
          </div>
        </div>

        <div className="relative z-[60]">
          <PageArrow
            direction="down"
            placement="bottom"
            onArrowClick={handleScrollToNextSection}
            ariaLabel="Scroll to next section"
            keepFullWidthLine={true}
            lineClassName={isLargeScreen ? "h-0.5 bg-slate-500" : "bg-slate-500"}
            neverHidden={true}
          />
        </div>
      </div>
    </section>
  );
}
