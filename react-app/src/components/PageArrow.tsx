import { useEffect, useRef, useState } from "react";

type PageArrowProps = {
  direction: "up" | "down";
  placement: "top" | "bottom";
  onArrowClick: () => void;
  ariaLabel: string;
  maxWidthClass?: string;
  sidePaddingClass?: string;
  lineClassName?: string;
  buttonClassName?: string;
  arrowWrapperClassName?: string;
  hideAfterMs?: number;
};

export function PageArrow({
  direction,
  placement,
  onArrowClick,
  ariaLabel,
  maxWidthClass = "max-w-6xl",
  sidePaddingClass = "px-2",
  lineClassName = "bg-neutral-100",
  buttonClassName = "",
  arrowWrapperClassName = "",
  hideAfterMs = 5000,
}: PageArrowProps) {
  const hideTimerRef = useRef<number | null>(null);
  const [showArrow, setShowArrow] = useState(true);

  const scheduleHideArrow = () => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
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
  }, [hideAfterMs]);

  const revealArrow = () => {
    setShowArrow(true);
    scheduleHideArrow();
  };

  const edgeClass =
    placement === "bottom"
      ? "absolute inset-x-0 bottom-0 pb-4"
      : "absolute inset-x-0 top-0 pt-4";

  const arrow = direction === "down" ? "↓" : "↑";

  return (
    <div
      className={edgeClass}
      onMouseEnter={revealArrow}
      onTouchStart={revealArrow}
      onClick={revealArrow}
    >
      <div
        className={`mx-auto flex w-full ${maxWidthClass} items-center gap-4 ${sidePaddingClass}`}
      >
        <div className={`h-px flex-1 ${lineClassName}`}></div>
        <div className={`rounded-full ${arrowWrapperClassName}`}>
          <button
            type="button"
            onClick={onArrowClick}
            aria-label={ariaLabel}
            className={`rounded-full border border-slate-300 bg-white/90 px-3 py-2 text-2xl leading-none text-slate-700 shadow-md transition hover:bg-white ${showArrow ? "opacity-100" : "pointer-events-none opacity-0"} ${buttonClassName}`}
          >
            {arrow}
          </button>
        </div>
        <div className={`h-px flex-1 ${lineClassName}`}></div>
      </div>
    </div>
  );
}
