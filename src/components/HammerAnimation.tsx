
import { useEffect, useState } from 'react';
import { Hammer } from 'lucide-react';

export const HammerAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`absolute inline-block transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Hammer 
        className="w-6 h-6 text-white animate-[knock_2s_ease-in-out_infinite] origin-bottom"
        style={{
          transform: 'rotate(-25deg)',
          marginLeft: '2px',
          marginTop: '-8px'
        }}
      />
    </div>
  );
};
