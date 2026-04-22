import { useEffect, useRef, useState } from "react";

type PageArrowProps = {
  direction: "up" | "down" | "left" | "right";
  placement: "top" | "bottom" | "left" | "right";
  onArrowClick: () => void;
  ariaLabel: string;
  keepFullWidthLine?: boolean;
  maxWidthClass?: string;
  sidePaddingClass?: string;
  lineClassName?: string;
  buttonClassName?: string;
  arrowWrapperClassName?: string;
  hideAfterMs?: number;
  cursor?: string;
  neverHidden?: boolean;
};
export function PageArrow({
  direction,
  placement,
  onArrowClick,
  ariaLabel,
  keepFullWidthLine = false,
  maxWidthClass = "max-w-6xl",
  sidePaddingClass = "px-2",
  lineClassName = "bg-neutral-100",
  buttonClassName = "",
  arrowWrapperClassName = "",
  hideAfterMs = 10000,
  neverHidden
}: PageArrowProps) {
  const hideTimerRef = useRef<number | null>(null);
  const [showArrow, setShowArrow] = useState(true);

  const scheduleHideArrow = () => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    if (neverHidden) {
      setShowArrow(true);
      return;
    }

    hideTimerRef.current = window.setTimeout(() => {
      setShowArrow(false);
    }, hideAfterMs);
  };

  useEffect(() => {
    scheduleHideArrow();

    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, [hideAfterMs, neverHidden]);

  const revealArrow = () => {
    setShowArrow(true);
    scheduleHideArrow();
  };

  const edgeClass =
    placement === "bottom"
      ? "absolute inset-x-0 bottom-0 z-20 pb-4"
      : placement === "top"
        ? "absolute inset-x-0 top-0 z-20 pt-4"
        : placement === "left"
          ? "absolute inset-y-0 left-0 z-20 pl-4"
          : "absolute inset-y-0 right-0 z-20 pr-4";

  const arrow =
    direction === "down"
      ? "↓"
      : direction === "up"
        ? "↑"
        : direction === "left"
          ? "←"
          : "→";

  const lineClass =
    placement === "left" || placement === "right"
      ? `w-px h-full ${lineClassName}`
      : `h-px flex-1 ${lineClassName}`;

  const containerDirectionClass =
    placement === "left" || placement === "right"
      ? "mx-auto flex h-full flex-col items-center gap-4"
      : keepFullWidthLine
        ? "mx-auto flex w-full max-w-none items-center gap-4 px-0"
        : `mx-auto flex w-full ${maxWidthClass} items-center gap-4 ${sidePaddingClass}`;

  return (
    <div
      className={edgeClass}
      onMouseEnter={revealArrow}
      onTouchStart={revealArrow}
      onClick={revealArrow}
    >
      <div className={containerDirectionClass}>
        <div className={lineClass}></div>
        <div className={`rounded-full ${arrowWrapperClassName}`}>
          <button
            type="button"
            onClick={onArrowClick}
            aria-label={ariaLabel}
            className={`cursor-pointer rounded-full border border-slate-300 bg-white/90 px-3 py-2 text-2xl leading-none text-slate-700 shadow-md transition hover:bg-white ${showArrow ? (placement === "top" ? "opacity-25" : "opacity-100") : "pointer-events-none opacity-0"} ${buttonClassName}`}
          >
            {arrow}
          </button>
        </div>
        <div className={lineClass}></div>
      </div>
    </div>
  );
}