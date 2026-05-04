import { PageArrow } from "./PageArrow";
import {
  //scrollToNextSection,
  scrollToPreviousSection,
} from "../utils/sectionScroll";

export function FindMe(){

    const handleScrollToPreviousSection = () => {
    scrollToPreviousSection({
      currentSectionId: "findme",
    });
  };
  // const handleScrollToNextSection = () => {
  //   scrollToNextSection({
  //     currentSectionId: "findme",
  //   });
  // };

    return (
<section id="FindMe">
      <div
        id="container"
        className="relative flex h-screen w-full flex-col items-center overflow-hidden bg-neutral-100 shadow-xl px-6 py-8 md:px-10 md:py-10"
      >
      <div
      className="mb-2">
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
        <div className="flex w-full max-w-6xl flex-1 flex-col items-center gap-6 lg:my-auto lg:flex-none lg:-translate-y-8 lg:rounded-2xl lg:px-6 lg:pt-6">
          <div className="text-center lg:w-full">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projects
            </h2>
            {/* <p className="mx-auto mt-2 max-w-2xl text-base leading-7 text-gray-600 italic sm:text-lg">
              Get to know my story and experiences
            </p> */}
          </div>
        </div>
      </div>
    </section>
    )
}