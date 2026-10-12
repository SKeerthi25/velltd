import React, { useState, useRef, useCallback, useEffect } from 'react';

const FALLBACK_BEFORE = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85";
const FALLBACK_AFTER = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER (Sharmila Vel Ltd)",
  title,
  subtitle,
  className = ""
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentAfter, setCurrentAfter] = useState(afterImage || FALLBACK_AFTER);
  const [currentBefore, setCurrentBefore] = useState(beforeImage || FALLBACK_BEFORE);
  const containerRef = useRef(null);

  // Sync props if they change
  useEffect(() => {
    if (afterImage) setCurrentAfter(afterImage);
  }, [afterImage]);

  useEffect(() => {
    if (beforeImage) setCurrentBefore(beforeImage);
  }, [beforeImage]);

  // Keep before image strictly matched to the container width to eliminate any distortion/blurriness
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(containerRef.current);
    window.addEventListener('resize', updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {title && (
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-navy-900 text-base">{title}</h4>
            {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
          </div>
          <span className="text-xs font-semibold text-brand-orange bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
            Slide to compare
          </span>
        </div>
      )}

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-slate-200/90 shadow-card bg-slate-900"
      >
        {/* AFTER Image (Full background) */}
        <img
          src={currentAfter}
          alt={`After: ${title || 'Completed work'}`}
          onError={() => setCurrentAfter(FALLBACK_AFTER)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ imageRendering: 'auto' }}
        />

        {/* AFTER Badge */}
        <div className="absolute top-4 right-4 z-10 bg-navy-900/90 text-white font-extrabold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md shadow-md border border-white/20">
          {afterLabel}
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={currentBefore}
            alt={`Before: ${title || 'Original condition'}`}
            onError={() => setCurrentBefore(FALLBACK_BEFORE)}
            className="absolute inset-0 h-full object-cover max-w-none"
            style={{ 
              width: containerWidth > 0 ? `${containerWidth}px` : '100%',
              imageRendering: 'auto'
            }}
          />
          {/* BEFORE Badge */}
          <div className="absolute top-4 left-4 z-10 bg-slate-900/90 text-amber-300 font-extrabold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md shadow-md border border-white/20">
            {beforeLabel}
          </div>
        </div>

        {/* Divider Line & Interactive Handle */}
        <div
          className="absolute top-0 bottom-0 z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

          {/* Draggable Circle Knob */}
          <div
            onMouseDown={handleMouseDown}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-navy-900 shadow-2xl flex items-center justify-center border-2 border-brand-orange hover:scale-110 active:scale-95 transition-transform"
          >
            <div className="flex items-center gap-0.5 text-brand-orange">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
