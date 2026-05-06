import { useState } from "react";
import type { Project } from "../data/Projects";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? project.screenshots.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentImageIndex === project.screenshots.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-4xl animate-fade-in-scale rounded-lg bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 rounded-full bg-white p-2 text-gray-600 shadow-lg transition hover:bg-gray-200 hover:text-gray-900"
          aria-label="Close project details"
        >
          <X size={24} />
        </button>

        <div className="relative h-96 w-full">
          <img
            src={project.screenshots[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1} of ${project.name}`}
            className="h-full w-full rounded-md object-cover"
          />
          {project.screenshots.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/75"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/75"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
          <p className="mt-2 text-gray-600">{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-lime-600 font-semibold hover:underline">
            View on GitHub &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}