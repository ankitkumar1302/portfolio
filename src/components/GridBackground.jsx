import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-secondary pointer-events-none" />
      <svg className="w-full h-full" style={{ background: 'transparent' }}>
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
};

export default GridBackground; 