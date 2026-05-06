import { useEffect, useRef, useState, type WheelEvent } from "react";
import { aboutSections } from "../data/About";

export function AboutMenu() {
  const contentRailRef = useRef<HTMLDivElement | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<
    (typeof aboutSections)[number]["id"]
  >("technologies-tools");
  const [arrowStyle, setArrowStyle] = useState<{ top?: string }>({});
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  // State for the new mobile accordion
  const [openAccordionId, setOpenAccordionId] = useState<string | null>("technologies-tools");
  // State for accordion pagination
  const [activePages, setActivePages] = useState<Record<string, number>>({});
  const [spotlightStyle, setSpotlightStyle] = useState({});

  const activeSection =
    aboutSections.find((section) => section.id === activeSectionId) ??
    aboutSections[0];

  useEffect(() => {
    contentRailRef.current?.scrollTo({ left: 0, behavior: "smooth" });

    // Set arrow position to the active item
    if (menuContainerRef.current) {
      // Find the button corresponding to the active section
      const activeItem = menuContainerRef.current.querySelector<HTMLElement>(`[data-section-id="${activeSectionId}"]`);
      if (activeItem) {
        handleMenuClick(activeItem);
      }
    }
  }, [activeSectionId]);

  const handleLargeWheelScroll = (event: WheelEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024 && Math.abs(event.deltaY) > 0) {
      event.preventDefault();
      event.currentTarget.scrollLeft += event.deltaY;
    }
  };

  const handleMenuClick = (element: HTMLElement) => {
    if (menuContainerRef.current) {
      const topPosition = element.offsetTop + element.offsetHeight / 2;
      setArrowStyle({ top: `${topPosition}px` });
    }
  };

  const handleMenuMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (menuContainerRef.current) {
      const rect = menuContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setSpotlightStyle({
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), transparent 150px)`,
      });
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row lg:gap-8">
      {/* --- NEW Mobile Vertical Cards --- */}
      <div className="w-full self-start lg:hidden">
        <div className="flex w-full flex-col divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white/50 shadow-sm">
          {aboutSections.map((section) => {
            const isOpen = openAccordionId === section.id;
            const pages = [section.description, ...section.details];
            const currentPageIndex = activePages[section.id] ?? 0;
            const currentPageContent = pages[currentPageIndex];

            return (
              <div key={section.id}>
                <button
                  type="button"
                  onClick={() => {
                    setOpenAccordionId(isOpen ? null : section.id);
                    setActivePages((prev) => ({ ...prev, [section.id]: 0 }));
                  }}
                  className="flex w-full items-center justify-between p-4 text-left font-mono text-base font-semibold"
                >
                  <span>{section.label}</span>
                  <span
                    className={`transform text-2xl font-light text-lime-600 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="min-h-0">
                    <div className="flex h-80 w-full flex-col">
                      {/* Pagination Controls */}
                      <div className="flex justify-center gap-3 px-4 pt-4">
                        {pages.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() =>
                              setActivePages((prev) => ({
                                ...prev,
                                [section.id]: index,
                              }))
                            }
                            aria-label={`Go to page ${index + 1}`}
                            className={`h-3 w-3 rounded-full transition-colors ${
                              currentPageIndex === index
                                ? "bg-lime-600"
                                : "bg-lime-200 hover:bg-lime-400"
                            }`}
                          />
                        ))}
                      </div>
                      <article className="flex-1 space-y-3 overflow-y-auto p-5">
                        <h3 className="text-lg font-bold text-gray-800">
                          {currentPageIndex === 1 ? "Working Environment" : section.title}
                        </h3>
                        <p className="overscroll-contain pr-1 text-base text-gray-700">
                          {currentPageContent.replace(/\n\n/g, "\n")}
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- Existing Desktop Menu (unchanged) --- */}
      <div
        ref={menuContainerRef}
        onMouseMove={handleMenuMouseMove}
        onMouseLeave={() => setSpotlightStyle({})}
        className="relative hidden h-[22rem] w-56 items-center justify-center overflow-hidden text-center text-lg tracking-wide backdrop-blur-md lg:h-[26rem] lg:border-r-2 lg:border-black lg:pr-4 lg:flex"
      >
        <div className="pointer-events-none absolute inset-0" style={spotlightStyle} />
        <ul className="flex w-full flex-col gap-y-8 font-mono">
          {aboutSections.map((section) => {
            const isActive = section.id === activeSectionId;

            return (
              <li
                key={section.id}
                className="p-3 transition-all duration-200 hover:bg-white/60"
              >
                <button
                  type="button"
                  data-section-id={section.id}
                  onClick={(e) => {
                    setActiveSectionId(section.id);
                    handleMenuClick(e.currentTarget);
                  }}
                  className={`cursor-pointer ${isActive ? "font-bold text-gray-900" : "text-gray-800"}`}
                >
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
        {/* Indicator Arrow */}
        <div
          className="pointer-events-none absolute left-full -translate-y-1/2 transform transition-all duration-300"
          style={arrowStyle}
        >
          {activeSectionId && (
            <div
              className="arrow-right-lime animate-fade-in-scale"
              style={{ borderLeftColor: "black" }}
            ></div>
          )}
        </div>
      </div>

      {/* --- Content Area (hidden on mobile) --- */}
      <div
        id="content"
        className="group relative h-[22rem] w-full max-w-full lg:h-[26rem] lg:w-[52rem]"
      >
        {/* This content rail is only for desktop */}
        <div
          ref={contentRailRef}
          onWheel={handleLargeWheelScroll}
          className="hidden h-full w-full flex-col lg:flex lg:rounded-lg lg:border lg:border-white lg:bg-neutral-100 lg:p-4 lg:shadow-xl"
        >
          {(() => {
            const pages = [activeSection.description, ...activeSection.details];
            const currentPageIndex = activePages[activeSection.id] ?? 0;
            const currentPageContent = pages[currentPageIndex];

            return (
              <>
                <article className="flex-1 grid-cols-1 content-start rounded-lg p-5">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {currentPageIndex === 1 ? "Working Environment" : activeSection.title}
                  </h3>
                  <p className="mt-4 h-[calc(100%-2rem)] overflow-y-auto overscroll-contain pr-1 text-gray-600">
                    {currentPageContent}
                  </p>
                </article>
                {/* Pagination Controls */}
                <div className="flex justify-center gap-3 p-4">
                  {pages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        setActivePages((prev) => ({
                          ...prev,
                          [activeSection.id]: index,
                        }))
                      }
                      aria-label={`Go to page ${index + 1}`}
                      className={`h-3 w-3 rounded-full transition-colors ${
                        currentPageIndex === index ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
