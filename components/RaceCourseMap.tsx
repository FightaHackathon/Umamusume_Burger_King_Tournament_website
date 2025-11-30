import React, { useState } from 'react';
import MapBk from './MapBk';

const RaceCourseMap: React.FC = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const handleAreaHover = (event: React.MouseEvent<SVGElement>) => {
    const target = event.target as SVGElement;
    const group = target.closest('g');
    if (group) {
      const title = group.querySelector('title');
      if (title) {
        setHoveredArea(title.textContent);
      }
    }
  };

  const handleAreaLeave = () => {
    setHoveredArea(null);
  };

  return (
    <div className="relative">
      <MapBk onMouseEnter={handleAreaHover} onMouseLeave={handleAreaLeave} />
      {hoveredArea && (
        <div className="absolute top-0 left-0 z-10 px-2 py-1 text-white bg-black rounded bg-opacity-50">
          {hoveredArea}
        </div>
      )}
    </div>
  );
};

export default RaceCourseMap;
