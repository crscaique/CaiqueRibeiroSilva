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
  bounce?: boolean
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
  hideAfterMs = 5000,
  neverHidden,
  bounce = false
}: PageArrowProps) {
  const hideTimerRef = useRef<number | null>(null);
  const [showArrow, setShowArrow] = useState(true);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (bounce) {
      setAnimationClass("animate-bounce-5");

      // The animation runs for 5 seconds (1s * 5 iterations).
      // We set a timer to remove the class after it finishes
      // so the animation can be re-triggered if needed.
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [bounce]);

  const scheduleHideArrow = () => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    if (neverHidden) {
      if (!showArrow) {
        setShowArrow(true);
      }
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
    if (!showArrow) {
      setShowArrow(true);
    }
    scheduleHideArrow();
  };

  const edgeClass =
    placement === "bottom"
      ? "absolute inset-x-0 bottom-0 z-40 pb-4"
      : placement === "top"
        ? "absolute inset-x-0 top-0 z-40 pt-2"
        : placement === "left"
          ? "absolute inset-y-0 left-0 z-40 pl-4"
          : "absolute inset-y-0 right-0 z-40 pr-4";

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
            className={`cursor-pointer rounded-full border border-slate-300 bg-white/90 px-3 py-2 text-2xl leading-none text-slate-700 shadow-md transition hover:bg-white ${showArrow ? (placement === "top" ? "opacity-25" : "opacity-100") : "pointer-events-none opacity-0"} ${animationClass} ${buttonClassName}`}
          >
            {arrow}
          </button>
        </div>
        <div className={lineClass}></div>
      </div>
    </div>
  );
}