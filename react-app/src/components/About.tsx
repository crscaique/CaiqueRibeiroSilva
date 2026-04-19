import { AboutMenu } from "./AboutMenu";
import { PageArrow } from "./PageArrow";

export function About() {
  const scrollToNextSection = () => {
    const currentSection = document.getElementById("Education");
    const nextSection =
      currentSection?.nextElementSibling as HTMLElement | null;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section id="Education">
      <div
        id="container"
        className="relative flex min-h-screen w-full flex-col items-center bg-neutral-100 p-8 pt-24 md:p-16"
      >
        <div className="flex w-full max-w-6xl flex-1 flex-col items-center gap-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nice to see you here
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-gray-600 italic">
              Get to know my story and experiences
            </p>
          </div>
          <AboutMenu />
        </div>

        <PageArrow
          direction="down"
          placement="bottom"
          onArrowClick={scrollToNextSection}
          ariaLabel="Scroll to next section"
          maxWidthClass="max-w-none"
          sidePaddingClass="px-0"
          arrowWrapperClassName="bg-white/70 p-1.5 shadow-sm"
        />
      </div>
    </section>
  );
}
