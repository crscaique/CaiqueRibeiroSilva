import { AboutMenu } from "./AboutMenu";
import { PageArrow } from "./PageArrow";
import {
  scrollToNextSection,
  scrollToPreviousSection,
} from "../utils/sectionScroll";

export function About() {
  const handleScrollToNextSection = () => {
    scrollToNextSection({
      currentSectionId: "About",
    });
  };

  const handleScrollToPreviousSection = () => {
    scrollToPreviousSection({
      currentSectionId: "About",
      previousSectionId: "Homepage",
    });
  };

  return (
    <section id="About">
      <div
        id="container" // On smaller screens, allow the container to grow with content
        className="relative flex w-full flex-col items-center bg-gradient-to-b from-neutral-50 to-neutral-200 shadow-xl lg:h-screen lg:min-h-[44rem] lg:justify-center lg:overflow-hidden"
      >
        <div className="hidden lg:block">
        <PageArrow
          direction="up"
          placement="top"
          onArrowClick={handleScrollToPreviousSection}
          ariaLabel="Scroll to previous section"
          keepFullWidthLine={false}
          lineClassName="none"
          neverHidden={false}
          bounce={true}
        />
      </div>
        <div className="flex w-full max-w-6xl flex-col items-center gap-6 px-6 pb-0 pt-12 md:px-10 md:pt-10 lg:flex-1 lg:my-auto lg:flex-none lg:overflow-y-visible lg:pb-0 lg:pt-2 lg:-translate-y-8 lg:rounded-2xl lg:p-6">
          <div className="w-full text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-gray-600 italic sm:text-lg">
              Get to know my story and experiences
            </p>
          </div>
          <AboutMenu />
        </div>
        <div className="hidden w-full lg:block">
          <PageArrow
            direction="down"
            placement="bottom"
            onArrowClick={handleScrollToNextSection}
            ariaLabel="Scroll to next section"
            keepFullWidthLine={true}
            lineClassName={"bg-black"}
            neverHidden={true}
          />
        </div>
      </div>
    </section>
  );
}
