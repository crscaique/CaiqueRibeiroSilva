import { X } from "lucide-react";

type ImageModalProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative flex items-center justify-center max-h-[85vh] max-w-[85vw] animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="max-h-full max-w-full rounded-lg object-contain" />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 rounded-full bg-white p-2 text-gray-600 shadow-lg transition hover:bg-gray-200 hover:text-gray-900"
          aria-label="Close image view"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}