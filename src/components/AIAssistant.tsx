import { Bot } from "lucide-react";

export function AIAssistant() {
  return (
    <div className="group fixed bottom-13 right-8 z-[99] flex items-center">
      {/* Tooltip */}
      <div className="absolute right-full mr-4 scale-0 whitespace-nowrap rounded-md bg-slate-800 px-3 py-1 text-sm font-semibold text-white shadow-lg transition-all duration-200 group-hover:scale-100">
        Talk to me
        <div className="absolute top-1/2 right-[-3px] h-2 w-2 -translate-y-1/2 rotate-45 bg-slate-800"></div>
      </div>

      {/* Button */}
      <button
        type="button"
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-700 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-lime-500"
        aria-label="Talk to AI Assistant"
      >
        <Bot size={32} />
      </button>
    </div>
  );
}