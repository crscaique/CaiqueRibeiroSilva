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
        id="container"
        className="relative flex h-screen w-full flex-col items-center bg-neutral-100 shadow-xl lg:min-h-[44rem] lg:justify-center lg:overflow-hidden"
      >
      <div
      className="mb-2 lg:mb-0">
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
        <div className="flex w-full max-w-6xl flex-1 flex-col items-center gap-6 overflow-y-auto px-6 pb-16 pt-2 md:px-10 md:py-10 lg:my-auto lg:flex-none lg:overflow-y-visible lg:pb-8 lg:-translate-y-8 lg:rounded-2xl lg:p-6">
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
    </section>
  );
}
