import React from 'react';

const PRESETS = {
  'hero-corner': {
    cols: 4,
    rows: 4,
    pattern: [
      { index: 5, color: 'bg-brand-medium/60' },
      { index: 6, color: 'bg-brand-accent-alt/40' },
      { index: 7, color: 'bg-brand-accent' },
      { index: 9, color: 'bg-brand-medium/80' },
      { index: 10, color: 'bg-brand-accent' },
      { index: 11, color: 'bg-white/90' },
      { index: 14, color: 'bg-brand-accent' },
      { index: 15, color: 'bg-white' },
    ]
  },
  'about-corner': {
    cols: 3,
    rows: 3,
    pattern: [
      { index: 3, color: 'bg-brand-medium' },
      { index: 6, color: 'bg-brand-accent' },
      { index: 7, color: 'bg-brand-accent-alt' },
      { index: 8, color: 'bg-brand-medium' },
    ]
  },
  'video-corner-tl': {
    cols: 3,
    rows: 3,
    pattern: [
      { index: 0, color: 'bg-brand-medium' },
      { index: 1, color: 'bg-brand-medium/50' },
      { index: 3, color: 'bg-brand-medium/30' },
    ]
  },
  'video-corner-br': {
    cols: 3,
    rows: 3,
    pattern: [
      { index: 5, color: 'bg-brand-accent-alt' },
      { index: 7, color: 'bg-brand-medium' },
      { index: 8, color: 'bg-brand-accent' },
    ]
  },
  'testimonial-corner': {
    cols: 4,
    rows: 4,
    pattern: [
      { index: 2, color: 'bg-brand-accent' },
      { index: 3, color: 'bg-brand-accent-alt' },
      { index: 7, color: 'bg-brand-medium' },
      { index: 12, color: 'bg-brand-accent' },
      { index: 13, color: 'bg-white' },
    ]
  },
  'services-corner': {
    cols: 3,
    rows: 3,
    pattern: [
      { index: 6, color: 'bg-brand-accent' },
      { index: 7, color: 'bg-brand-accent-alt' },
    ]
  },
  'cta-corner': {
    cols: 4,
    rows: 4,
    pattern: [
      { index: 10, color: 'bg-brand-accent-alt' },
      { index: 11, color: 'bg-brand-accent' },
      { index: 14, color: 'bg-brand-accent' },
      { index: 15, color: 'bg-brand-accent-alt' },
    ]
  }
};

const MosaicGrid = ({ 
  preset, 
  width = 'w-32', 
  height = 'h-32', 
  customCols, 
  customRows, 
  customPattern, 
  className = '' 
}) => {
  // Use preset if valid, otherwise fallback
  const config = PRESETS[preset] || {
    cols: customCols || 4,
    rows: customRows || 4,
    pattern: customPattern || []
  };

  const cols = customCols || config.cols;
  const rows = customRows || config.rows;
  const pattern = customPattern || config.pattern;

  const totalCells = cols * rows;
  const cells = Array.from({ length: totalCells });
  
  const patternMap = {};
  pattern.forEach(p => {
    patternMap[p.index] = p.color;
  });

  return (
    <div 
      className={`grid gap-1 shrink-0 ${className}`} 
      style={{ 
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        width,
        height
      }}
    >
      {cells.map((_, i) => {
        const bgClass = patternMap[i] || 'bg-transparent';
        return (
          <div 
            key={i} 
            className={`rounded-sm transition-all duration-500 hover:scale-[1.08] ${bgClass}`} 
            style={{ transitionDelay: `${(i % cols) * 40}ms` }}
          />
        );
      })}
    </div>
  );
};

export default MosaicGrid;
