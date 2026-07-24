"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryImage } from "@/types";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const current = images[currentIndex];

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-label={`Lightbox: ${current.alt}`}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-12 h-12 text-white/60 hover:text-white transition-colors duration-200"
          aria-label="Đóng lightbox"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 font-heading text-xs font-semibold tracking-widest text-white/40">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Prev button */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-10 flex items-center justify-center w-12 h-12 text-white/60 hover:text-white transition-colors duration-200"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </motion.div>

        {/* Next button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-10 flex items-center justify-center w-12 h-12 text-white/60 hover:text-white transition-colors duration-200"
          aria-label="Ảnh tiếp theo"
        >
          <ChevronRight className="h-7 w-7" />
        </button>

        {/* Caption */}
        {current.caption && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="font-heading text-xs font-semibold tracking-widest text-white/50 uppercase">
              {current.caption}
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
