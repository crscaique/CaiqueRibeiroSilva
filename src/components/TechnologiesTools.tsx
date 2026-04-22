import { TechnologiesToolsMenu } from "./TechnologiesToolsMenu";
import { PageArrow } from "./PageArrow";
import { scrollToPreviousSection } from "../utils/sectionScroll";

export function TechnologiesTools() {
  const handleScrollToPreviousSection = () => {
    scrollToPreviousSection({
      currentSectionId: "technologies-tools",
    });
  };

  return (
    <section id="technologies-tools">
           
      <div
        id="container"
        className="relative flex min-h-screen w-full flex-col items-center bg-neutral-100 p-8 pt-24 md:p-16"
      >
<PageArrow
          direction="up"
          placement="top"
          onArrowClick={handleScrollToPreviousSection}
          ariaLabel="Scroll to previous section"
          keepFullWidthLine={false}
          lineClassName="bg-slate-500"
          neverHidden={true}
        />
        <div className="flex w-full max-w-6xl flex-1 flex-col items-center gap-10">
                            
          <TechnologiesToolsMenu />
        </div>

        <PageArrow
          direction="down"
          placement="bottom"
          onArrowClick={handleScrollToPreviousSection}
          ariaLabel="Scroll to next section"
          keepFullWidthLine={true}
          lineClassName="bg-slate-500"
          neverHidden={true}
        />
      </div>
    </section>
  );
}