import { Download } from "lucide-react";
import { PageArrow } from "./PageArrow";
import { scrollToPreviousSection } from "../utils/sectionScroll";
import { socialLinks } from "../data/FindMeData";

export function FindMe() {
  const handleScrollToPreviousSection = () => {
    scrollToPreviousSection({
      currentSectionId: "find-me",
    });
  };

  return (
    <section id="find-me">
      <div
        id="container"
        className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 shadow-xl md:px-10 md:py-10 lg:min-h-screen"
      >
        {/* Transversal Line */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-[150%] origin-center -rotate-45 transform bg-slate-700"></div>
        </div>

        <div className="absolute top-0 left-0 right-0 mb-2">
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

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find Me
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Let's connect and build something amazing together.
          </p>
          <div className="mt-12 flex items-center justify-center gap-8">
            {socialLinks.map((link) => (
              <div key={link.name} className="group relative flex flex-col items-center">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white p-2 transition-transform duration-300 hover:scale-110"
                  aria-label={`Visit my ${link.name} profile`}
                >
                  <img src={link.icon} alt={link.name} className="h-12 w-12 rounded-full" />
                </a>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 whitespace-nowrap rounded-md bg-slate-800 px-3 py-1 text-sm font-semibold text-white shadow-lg transition-all duration-200 group-hover:scale-100">
                  {link.name}
                  <div className="absolute left-1/2 -bottom-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-800"></div>
                </div>
              </div>
            ))}
          </div>
          <a href="/caique-ribeiro-silva-cv.pdf" download className="mt-10 inline-flex items-center gap-2 rounded-md bg-lime-500 px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500">
            <Download className="h-5 w-5" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}