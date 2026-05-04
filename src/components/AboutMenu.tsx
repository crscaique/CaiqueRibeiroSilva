import { useEffect, useRef, useState, type WheelEvent } from "react";

const aboutSections = [
  {
    id: "who-I-am",
    label: "Who I am",
    title: "Who I am",
    description:
      "I am a developer focused on building clean, responsive, and user-friendly interfaces with attention to detail and performance.",
    details: [
      "I enjoy transforming ideas into polished interfaces that feel fast and intuitive.",
      "My work style is iterative: ship, gather feedback, and improve with clear priorities.",
      "I focus on consistency, clean component structure, and maintainable UI patterns.",
    ],
  },
  {
    id: "education",
    label: "Education",
    title: "Education",
    description:
      "My education includes hands-on learning, continuous practice, and adapting to modern frontend tools and best practices.",
    details: [
      "I combine foundational theory with practical implementation in real projects.",
      "I keep learning through documentation, experimentation, and code reviews.",
      "Continuous learning helps me stay aligned with modern frontend standards.",
    ],
  },
  {
    id: "work-experience",
    label: "Work Experience",
    title: "Work Experience",
    description:
      "I have worked on responsive components and interfaces, balancing structure, styling, and usability across different screen sizes.",
    details: [
      "I have built reusable components for interfaces used across multiple pages.",
      "I collaborate to align design intent with engineering constraints and timelines.",
      "I prioritize performance, accessibility, and responsive behavior across devices.",
    ],
  },
  {
    id: "skills",
    label: "Skills",
    title: "Skills",
    description:
      "My core skills include React, TypeScript, Tailwind CSS, component design, and responsive UI implementation.",
    details: [
      "I am comfortable building typed React components with predictable state flows.",
      "I use Tailwind utility composition to keep design systems cohesive.",
      "I structure code for readability, scalability, and easier future refactoring.",
    ],
  },
] as const;

export function AboutMenu() {
  const contentRailRef = useRef<HTMLDivElement | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<
    (typeof aboutSections)[number]["id"]
  >(aboutSections[0].id);
  const [isBouncing, setIsBouncing] = useState(true);

  const activeSection =
    aboutSections.find((section) => section.id === activeSectionId) ??
    aboutSections[0];

  useEffect(() => {
    contentRailRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [activeSectionId]);

  useEffect(() => {
      // Start bouncing after a delay
    const bounceTimer = window.setTimeout(() => setIsBouncing(true), 5000);
 
    const stopBouncing = () => {
      // Only update state if it's currently true to avoid unnecessary re-renders
      setIsBouncing((prevIsBouncing) => {
        if (prevIsBouncing) {
          clearTimeout(bounceTimer);
          return false;
        }
        return prevIsBouncing;
      });
    };
    window.addEventListener("scroll", stopBouncing);
    return () => window.removeEventListener("scroll", stopBouncing);
  }, []);

  const scrollRailRight = () => {
    const rail = contentRailRef.current;
    if (!rail) return;

    rail.scrollBy({ left: rail.clientWidth, behavior: "smooth" });
  };

  const scrollRailLeft = () => {
    const rail = contentRailRef.current;
    if (!rail) return;

    rail.scrollBy({ left: -rail.clientWidth, behavior: "smooth" });
  };

  const handleLargeWheelScroll = (event: WheelEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024 && Math.abs(event.deltaY) > 0) {
      event.preventDefault();
      event.currentTarget.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row lg:gap-8">
      <div className="w-full lg:hidden">
        <ul className="grid w-full grid-cols-2 gap-1 font-mono text-sm sm:grid-cols-4 sm:gap-2 sm:text-xs">
          {aboutSections.map((section) => {
            const isActive = section.id === activeSectionId;

            return (
              <li
                key={section.id}
                className="px-2 py-1 text-center transition-all duration-200 hover:bg-white/60"
              >
                <button
                  type="button"
                  onClick={() => setActiveSectionId(section.id)}
                  className={`cursor-pointer whitespace-nowrap ${isActive ? "font-bold text-gray-900" : "text-gray-600"}`}
                >
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hidden h-[22rem] w-56 items-center justify-center text-center text-lg tracking-wide backdrop-blur-md lg:h-[26rem] lg:border-r-2 lg:border-black lg:pr-4 lg:flex">
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
                  onClick={() => setActiveSectionId(section.id)}
                  className={`cursor-pointer ${isActive ? "font-bold text-gray-900" : "text-gray-800"}`}
                >
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        id="content"
        className="relative h-[22rem] w-full max-w-full lg:h-[26rem] lg:w-[52rem]"
      >
        <button
          type="button"
          onClick={scrollRailLeft}
          aria-label="Scroll left for more information"
          className={`absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full border border-black bg-black px-3 py-2 text-xl font-semibold text-white shadow-md transition hover:bg-slate-900 ${isBouncing ? "animate-bounce-x-left" : ""}`}
        >
          ←
        </button>
        <button
          type="button"
          onClick={scrollRailRight}
          aria-label="Scroll right for more information"
          className={`absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full border border-black bg-black px-3 py-2 text-xl font-semibold text-white shadow-md transition hover:bg-slate-900 ${isBouncing ? "animate-bounce-x-right" : ""}`}
        >
          →
        </button>

        <div
          ref={contentRailRef}
          onWheel={handleLargeWheelScroll}
          onMouseEnter={() => setIsBouncing(false)}
          onTouchStart={() => setIsBouncing(false)}
          className="h-full w-full overflow-x-auto overflow-y-hidden rounded-lg border-4 border-white/50 p-4 shadow-xl lg:border-0 lg:shadow-none"
        >
          <div className="flex h-full w-full snap-x snap-mandatory gap-0">
            {[activeSection.description, ...activeSection.details].map(
              (text, index) => (
                <article
                  key={`${activeSection.id}-${index}`}
                  className="grid h-full w-full shrink-0 snap-start grid-cols-1 content-start rounded-lg p-5"
                >
                  <h3 className="text-2xl font-bold text-gray-800">
                    {activeSection.title}
                  </h3>
                  <p className="mt-4 overflow-y-auto overscroll-contain pr-1 text-gray-600">
                    {text}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
