
export const FootprintAnimation = () => {
  return (
    <div className="relative flex justify-center items-center mb-16 overflow-hidden w-96 h-16 mx-auto">
      {/* Left foot 1 - higher position */}
      <div className="absolute animate-[footstep_4s_ease-in-out_infinite]" style={{ left: '80px', top: '10px' }}>
        <img 
          src="/uploads/leftfoot.png" 
          alt="Left foot" 
          className="w-9 h-9 object-contain"
          style={{ transform: 'rotate(360deg)' }}
        />
      </div>
      
      {/* Right foot 1 - lower position, more forward */}
      <div className="absolute animate-[footstep_4s_ease-in-out_1s_infinite]" style={{ left: '140px', top: '30px' }}>
        <img 
          src="/uploads/rightfoot.png" 
          alt="Right foot" 
          className="w-9 h-9 object-contain"
          style={{ transform: 'rotate(360deg)' }}
        />
      </div>
      
      {/* Left foot 2 - higher position, further forward */}
      <div className="absolute animate-[footstep_4s_ease-in-out_2s_infinite]" style={{ left: '200px', top: '10px' }}>
        <img 
          src="/uploads/leftfoot.png" 
          alt="Left foot" 
          className="w-9 h-9 object-contain"
          style={{ transform: 'rotate(360deg)' }}
        />
      </div>
      
      {/* Right foot 2 - lower position, most forward */}
      <div className="absolute animate-[footstep_4s_ease-in-out_2.5s_infinite]" style={{ left: '260px', top: '30px' }}>
        <img 
          src="/uploads/rightfoot.png" 
          alt="Right foot" 
          className="w-9 h-9 object-contain"
          style={{ transform: 'rotate(360deg)' }}
        />
      </div>
    </div>
  );
};
