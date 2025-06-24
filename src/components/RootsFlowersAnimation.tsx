
import { useEffect, useState } from 'react';

export const RootsFlowersAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible -z-20">
      {/* Root-like vines - only extending upward from the word */}
      <svg 
        className={`absolute w-full h-full transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        viewBox="0 0 300 120"
        style={{ left: '-100%', top: '-40%', width: '300%', height: '180%' }}
      >
        {/* Left side roots extending upward from the word */}
        <path
          d="M 150 60 Q 130 45 110 35 Q 90 25 75 35"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          className="animate-[draw_2s_ease-in-out_1s_forwards]"
          strokeDasharray="120"
          strokeDashoffset="120"
        />
        <path
          d="M 143 52 Q 123 40 103 35 Q 83 30 75 40"
          stroke="#059669"
          strokeWidth="1.5"
          fill="none"
          className="animate-[draw_2s_ease-in-out_1.5s_forwards]"
          strokeDasharray="100"
          strokeDashoffset="100"
        />
        
        {/* Right side roots extending upward from the word */}
        <path
          d="M 150 60 Q 170 45 190 35 Q 210 25 225 35"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          className="animate-[draw_2s_ease-in-out_1.2s_forwards]"
          strokeDasharray="120"
          strokeDashoffset="120"
        />
        <path
          d="M 157 52 Q 177 40 197 35 Q 217 30 225 40"
          stroke="#059669"
          strokeWidth="1.5"
          fill="none"
          className="animate-[draw_2s_ease-in-out_1.7s_forwards]"
          strokeDasharray="100"
          strokeDashoffset="100"
        />
      </svg>

      {/* Flowers positioned around the perimeter of the word */}
      <div className={`absolute inset-0 transition-all duration-1000 delay-[3000ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        {/* Side flowers with roots */}
        <div className="absolute -left-8 top-1 text-pink-500 text-2xl animate-pulse">🌸</div>
        <div className="absolute -right-8 top-1 text-pink-500 text-2xl animate-pulse delay-200">🌸</div>
        
        {/* Top flowers with roots */}
        <div className="absolute left-1/4 -top-3 text-pink-500 text-lg animate-pulse delay-700">🌸</div>
        
        {/* Bottom flowers - standalone without roots */}
        <div className="absolute left-1/4 -bottom-3 text-pink-500 text-lg animate-pulse delay-900">🌸</div>
        <div className="absolute left-2/3 -bottom-3 text-pink-500 text-sm animate-pulse delay-1000">🌸</div>
        <div className="absolute right-1/4 -bottom-3 text-pink-500 text-sm animate-pulse delay-1100">🌸</div>
      </div>
    </div>
  );
};
