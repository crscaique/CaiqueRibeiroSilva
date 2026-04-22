type ScrollDirection = "next" | "previous";

type ScrollOptions = {
  currentSectionId: string;
  preferredTargetId?: string;
  previousSectionId?: string;
  fallbackByViewport?: boolean;
};

function scrollToElement(element: HTMLElement) {
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getAdjacentSection(
  currentSectionId: string,
  direction: ScrollDirection,
): HTMLElement | null {
  const currentSection = document.getElementById(currentSectionId);

  if (!currentSection) {
    return null;
  }

  const sibling =
    direction === "next"
      ? currentSection.nextElementSibling
      : currentSection.previousElementSibling;

  return sibling as HTMLElement | null;
}

export function scrollToNextSection({
  currentSectionId,
  preferredTargetId,
  fallbackByViewport = true,
}: ScrollOptions) {
  if (preferredTargetId) {
    const preferredTarget = document.getElementById(preferredTargetId);
    if (preferredTarget) {
      scrollToElement(preferredTarget);
      return;
    }
  }

  const nextSection = getAdjacentSection(currentSectionId, "next");
  if (nextSection) {
    scrollToElement(nextSection);
    return;
  }

  if (fallbackByViewport) {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }
}

export function scrollToPreviousSection({
  currentSectionId,
  preferredTargetId,
  previousSectionId,
  fallbackByViewport = true,
}: ScrollOptions) {
  if (preferredTargetId) {
    const preferredTarget = document.getElementById(preferredTargetId);
    if (preferredTarget) {
      scrollToElement(preferredTarget);
      return;
    }
  }

  if (previousSectionId) {
    const explicitPrevious = document.getElementById(previousSectionId);
    if (explicitPrevious) {
      scrollToElement(explicitPrevious);
      return;
    }
  }

  const previousSection = getAdjacentSection(currentSectionId, "previous");
  if (previousSection) {
    scrollToElement(previousSection);
    return;
  }

  if (fallbackByViewport) {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  }
}
