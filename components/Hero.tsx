import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden h-[600px] flex items-center justify-center">
      {/* Background Videos with Overlay */}
      <div className="absolute inset-0 flex">
        <video
          className="w-1/2 h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="videos/v1.mp4" type="video/mp4" />
        </video>
        <video
          className="w-1/2 h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="videos/v2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Title Group - Width fits content so underline matches title width */}
        <div className="w-fit flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-xl text-center">
              Multimodal-LAE-XLMIMO
            </h1>
            
            {/* White separator line - Matches title width */}
            <div className="h-[2px] bg-white w-full my-8 opacity-90 shadow-sm"></div>
        </div>

        {/* Introduction text - Wider layout (max-w-6xl) */}
        <p className="w-full max-w-6xl text-xl sm:text-2xl text-slate-100 font-light leading-relaxed drop-shadow-md text-center">
          A comprehensive open-source dataset for multimodal sensing-aided XL-MIMO wireless communications in low-altitude scenarios.
        </p>
      </div>
    </div>
  );
};

export default Hero;