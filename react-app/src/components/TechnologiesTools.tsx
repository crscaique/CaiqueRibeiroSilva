import { TechnologiesToolsMenu } from "./TechnologiesToolsMenu";
import { PageArrow } from "./PageArrow";

export function TechnologiesTools() {
  const scrollToPreviousSection = () => {
    const currentSection = document.getElementById("technologies-tools");
    const previousSection =
      currentSection?.previousElementSibling as HTMLElement | null;

    if (previousSection) {
      previousSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  };

  return (
    <section id="technologies-tools">
      <div
        id="container"
        className="relative flex min-h-screen w-full flex-col items-center bg-neutral-100 p-8 pt-24 md:p-16"
      >
        <div className="flex w-full max-w-6xl flex-1 flex-col items-center gap-10">
          <TechnologiesToolsMenu />
        </div>

        <PageArrow
          direction="up"
          placement="bottom"
          onArrowClick={scrollToPreviousSection}
          ariaLabel="Scroll to previous section"
          maxWidthClass="max-w-none"
          sidePaddingClass="px-0"
          arrowWrapperClassName="bg-white/70 p-1.5 shadow-sm"
        />
      </div>
    </section>
  );
}
