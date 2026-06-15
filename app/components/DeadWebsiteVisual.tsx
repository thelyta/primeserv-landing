"use client";

import { useInView } from "../hooks/useInView";

export function DeadWebsiteVisual() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto mt-12">
      <div className="bg-surface border border-border rounded-lg p-6 md:p-8 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted font-mono ml-2">
            analytics-dashboard.svg
          </span>
        </div>

        {/* Chart Area */}
        <div className="relative h-64 md:h-80">
          {/* Grid lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 600 300"
            preserveAspectRatio="none"
          >
            {/* Horizontal grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                y1={60 * i + 30}
                x2="600"
                y2={60 * i + 30}
                stroke="#1E1E2E"
                strokeWidth="1"
              />
            ))}

            {/* Flatline - Your Current Site */}
            <path
              d="M 20 200 L 100 200 L 180 200 L 260 200 L 340 200 L 420 200 L 500 200 L 580 200"
              fill="none"
              stroke="#5A5A72"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="8 4"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "opacity 1s ease-out 0.5s",
              }}
            />

            {/* Ascending line - Sales-Optimised Site */}
            <path
              d="M 20 220 Q 80 210, 140 180 T 260 140 T 380 90 T 500 50 L 580 30"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                strokeDasharray: 1000,
                strokeDashoffset: isInView ? 0 : 1000,
                transition: "stroke-dashoffset 2s ease-out 1s",
                filter: "drop-shadow(0 0 8px rgba(0, 229, 255, 0.4))",
              }}
            />

            {/* Glow point at end of ascending line */}
            <circle
              cx="580"
              cy="30"
              r="6"
              fill="#00E5FF"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "opacity 0.5s ease-out 2.5s",
                filter: "drop-shadow(0 0 12px rgba(0, 229, 255, 0.8))",
              }}
            />
          </svg>

          {/* Labels */}
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "opacity 0.8s ease-out 0.8s",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-muted" style={{ backgroundImage: "repeating-linear-gradient(90deg, #5A5A72 0, #5A5A72 4px, transparent 4px, transparent 8px)" }} />
              <span className="text-xs text-muted font-mono">Your Current Site</span>
            </div>
          </div>

          <div
            className="absolute right-4 top-8"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "opacity 0.8s ease-out 1.5s",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-accent" />
              <span className="text-xs text-accent font-mono">Sales-Optimised Site</span>
            </div>
          </div>
        </div>

        {/* Gold Label */}
        <div
          className="mt-6 flex justify-center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.8s ease-out 2s",
          }}
        >
          <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded text-gold text-xs font-medium tracking-wide">
            This gap is revenue.
          </span>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-muted text-sm mt-4">
        This isn&apos;t a design problem. It&apos;s a strategy problem.
      </p>
    </div>
  );
}
