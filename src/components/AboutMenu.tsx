import { useEffect, useRef, useState, type WheelEvent } from "react";
import { aboutSections } from "../data/About";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Keep for now, but will be removed if no carousels
import { ImageModal } from "../data/ImageModal";

export function AboutMenu() {
  const contentRailRef = useRef<HTMLDivElement | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<
    (typeof aboutSections)[number]["id"]
  >("who-I-am");
  const [arrowStyle, setArrowStyle] = useState<{ top?: string }>({});
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  // State for mobile accordion
  const [openAccordionId, setOpenAccordionId] = useState<string | null>("who-I-am");
  // State for text and image pagination (now synchronized)
  const [activePages, setActivePages] = useState<Record<string, number>>({});
  // State for image carousel pagination (specifically for education)
  const [imageIndexes, setImageIndexes] = useState<Record<string, number>>({});
  const [spotlightStyle, setSpotlightStyle] = useState({});
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const activeSection =
    aboutSections.find((section) => section.id === activeSectionId) ??
    aboutSections[0];

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

  useEffect(() => {
    contentRailRef.current?.scrollTo({ left: 0, behavior: "smooth" });

    // Set arrow position to the active item
    if (menuContainerRef.current) {
      // Find the button corresponding to the active section
      const activeItem = menuContainerRef.current.querySelector<HTMLElement>(`[data-section-id="${activeSectionId}"]`);
      if (activeItem) {
        handleMenuClick(activeItem);
      }
      // Reset image index when active section changes
      setImageIndexes((prev) => ({ ...prev, [activeSectionId]: 0 }));
    }
  }, [activeSectionId]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row lg:gap-8">
      {/* --- NEW Mobile Vertical Cards --- */}
      <div className="w-full self-start lg:hidden">
        <div className="flex w-full flex-col divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white/50 shadow-sm">
          {aboutSections.map((section) => {
            const isOpen = openAccordionId === section.id;
            const isEducation = section.id === 'education';
            const isWhoIAm = section.id === 'who-I-am';
            const currentPageIndex = activePages[section.id] ?? 0;
            const currentPage = section.pages[currentPageIndex];
            const currentCarouselIndex = imageIndexes[section.id] ?? 0;
            const carouselItems = currentPage.carouselContent;
            const activeCarouselItem = carouselItems?.[currentCarouselIndex];

            const pageContent = [
              currentPage.description,
              ...(currentPage.details ?? []),
            ].join('\\n\\n');

            const carouselContent = activeCarouselItem
              ? [activeCarouselItem.description, ...activeCarouselItem.details].join('\\n\\n')
              : '';

            return (
              <div key={section.id}>
                <button
                  type="button"
                  onClick={() => {
                    const newOpenId = isOpen ? null : section.id;
                    // Reset text and image pagination when opening/closing or changing section
                    setActivePages((prev) => ({ ...prev, [section.id]: 0 }));
                    setImageIndexes((prev) => ({ ...prev, [section.id]: 0 }));
                    setOpenAccordionId(newOpenId);
                  }}
                  className="flex w-full items-center justify-between p-4 text-left font-mono text-base font-semibold"
                >
                  <span>{section.label}</span>
                  <span
                    className={`transform text-2xl font-light text-lime-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="flex w-full flex-col">
                      {/* Main Text Pagination Controls */} <div className="flex justify-center gap-3 px-4 pt-2"> {section.pages.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setActivePages((prev) => ({ ...prev, [section.id]: index }))}
                            aria-label={`Go to page ${index + 1}`}
                            className={`h-3 w-3 rounded-full transition-colors ${
                              currentPageIndex === index
                                ? "bg-lime-600"
                                : "bg-lime-200 hover:bg-lime-400"
                            }`}
                          />
                        ))}
                      </div>
                      <article className={`flex flex-1 overflow-y-auto p-4 pt-2 ${
                        isWhoIAm ? 'flex-col gap-4' : 'flex-row space-x-4'
                      }`}>
                        {isEducation && currentPage.image && (
                          <div className="w-1/3 flex-shrink-0 float-left mr-4 mb-2">
                            <img
                              src={currentPage.image}
                              alt={`${currentPage.title} image`}
                              className="rounded-md h-28 w-28 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                              onClick={() => setSelectedImage({ src: currentPage.image!, alt: `${currentPage.title} image` })}
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          {/* Conditional Title and Content for Education */}
                          {activeCarouselItem ? (
                            <h3 className="text-lg font-bold text-gray-800">
                              {activeCarouselItem.title}
                            </h3>
                          ) : (
                            <h3 className="text-lg font-bold text-gray-800">
                              {currentPage.title}
                            </h3>
                          )}
                          <p className={`overscroll-contain pr-1 text-base text-gray-700 whitespace-pre-wrap ${
                            isEducation && currentPageIndex === 1 ? 'list-disc ml-5' : '' // Apply bullet points for languages
                          }`}>
                            {activeCarouselItem ? carouselContent : pageContent}
                          </p>
                        </div>
                        {!isEducation && currentPage.image && (
                          <div className={`${isWhoIAm ? 'w-full' : 'w-1/3 flex-shrink-0'}`}>
                            <img
                              src={currentPage.image}
                              alt={`${currentPage.title} image`}
                              className={`rounded-md ${
                                isWhoIAm ? 'w-full h-auto object-contain' : 'h-24 w-24 object-cover'
                              } ${
                                !isWhoIAm && "cursor-pointer transition-transform duration-300 hover:scale-105"
                              }`}
                              onClick={!isWhoIAm ? () => setSelectedImage({ src: currentPage.image!, alt: `${currentPage.title} image` }) : undefined}
                            />
                          </div>
                        )}
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- Existing Desktop Menu --- */}
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
                    // Reset text and image pagination when active section changes
                    setActivePages((prev) => ({ ...prev, [section.id]: 0 }));
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
        className="group relative w-full max-w-full lg:w-[52rem]"
      >
        {/* This content rail is only for desktop */}
        <div
          ref={contentRailRef}
          onWheel={handleLargeWheelScroll}
          className="hidden h-full w-full flex-col lg:flex lg:rounded-lg lg:border lg:border-neutral-100 lg:bg-white lg:p-4 lg:shadow-xl"
        >
          {(() => {
            const currentPageIndex = activePages[activeSection.id] ?? 0;
            const isWhoIAm = activeSection.id === 'who-I-am';
            const currentPage = activeSection.pages[currentPageIndex];
            const currentCarouselIndex = imageIndexes[activeSection.id] ?? 0;
            const carouselItems = currentPage.carouselContent;
            const activeCarouselItem = carouselItems?.[currentCarouselIndex];

            return (
              <div className="flex h-full flex-col">
                {/* Main Content Grid */}
                <div className="grid flex-1 grid-cols-3 gap-6 overflow-hidden p-1">
                  {/* Column 1: Image/Carousel */}
                  <div className="col-span-1 flex flex-col">
                    {carouselItems && activeCarouselItem ? (
                      // Carousel View
                      <div className="relative h-full w-full">
                        <img
                          src={activeCarouselItem.image}
                          alt={activeCarouselItem.title}
                          className={`h-full w-full rounded-md object-cover ${
                            !isWhoIAm && "cursor-pointer transition-transform duration-300 hover:scale-105"
                          }`}
                          onClick={
                            !isWhoIAm ? () => setSelectedImage({ src: activeCarouselItem.image, alt: activeCarouselItem.title }) : undefined
                          }
                        />
                        {carouselItems.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                setImageIndexes((prev) => {
                                  const current = prev[activeSection.id] ?? 0;
                                  const newIndex = (current - 1 + carouselItems.length) % carouselItems.length;
                                  return { ...prev, [activeSection.id]: newIndex };
                                })
                              }
                              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white hover:bg-black/75"
                              aria-label="Previous item"
                            >
                              <ChevronLeft size={24} />
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setImageIndexes((prev) => {
                                  const current = prev[activeSection.id] ?? 0;
                                  const newIndex = (current + 1) % carouselItems.length;
                                  return { ...prev, [activeSection.id]: newIndex };
                                })
                              }
                              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white hover:bg-black/75"
                              aria-label="Next item"
                            >
                              <ChevronRight size={24} />
                            </button>
                          </>
                        )}
                      </div>
                    ) : currentPage.image ? (
                      // Single Image View
                      <div className="relative h-full w-full">
                        <img
                          src={currentPage.image}
                          alt={currentPage.title}
                          className={`h-full w-full rounded-md object-cover ${
                            !isWhoIAm && "cursor-pointer transition-transform duration-300 hover:scale-105"
                          }`}
                          onClick={
                            !isWhoIAm ? () => setSelectedImage({ src: currentPage.image!, alt: currentPage.title }) : undefined
                          }
                        />
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-md bg-gray-200">
                        <p className="text-gray-500">No image for this page</p>
                      </div>
                    )}
                  </div>

                  {/* Column 2 & 3: Text Content */}
                  <div className="col-span-2 flex flex-col">
                    <article className="flex-1 overflow-y-auto pr-2">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {activeCarouselItem ? activeCarouselItem.title : currentPage.title}
                      </h3>
                      <p className="mt-4 whitespace-pre-wrap text-gray-600">
                        {activeCarouselItem
                          ? [activeCarouselItem.description, ...activeCarouselItem.details].join('\\n\\n')
                          : [currentPage.description, ...(currentPage.details ?? [])].join('\\n\\n')}
                      </p>
                    </article>
                  </div>
                </div>

                {/* Pagination Controls Row */}
                <div className="grid grid-cols-3 gap-6 p-1 pt-3">
                  {/* Image Pagination */}
                  <div className="col-span-1 flex justify-center gap-3">
                    {carouselItems && carouselItems.length > 1 && carouselItems.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setImageIndexes((prev) => ({ ...prev, [activeSection.id]: index }))}
                        aria-label={`Go to item ${index + 1}`}
                        className={`h-3 w-3 rounded-full transition-colors ${
                          currentCarouselIndex === index ? "bg-blue-800" : "bg-blue-300 hover:bg-blue-400"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Page Pagination */}
                  <div className="col-span-2 flex justify-center gap-3">
                    {activeSection.pages.length > 1 && activeSection.pages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActivePages((prev) => ({ ...prev, [activeSection.id]: index }))}
                        aria-label={`Go to page ${index + 1}`}
                        className={`h-3 w-3 rounded-full transition-colors ${
                          currentPageIndex === index ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
      {/* Modal must be at the top level of the component to ensure it's not trapped in a lower stacking context */}
      {selectedImage &&
        <ImageModal
          src={selectedImage.src} alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />}
    </div>
  );
}
