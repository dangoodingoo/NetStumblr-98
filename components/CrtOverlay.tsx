import React from 'react';

const CrtOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[100] overflow-hidden h-full w-full select-none">
      
      {/* Layer 1: Coarse RGB Phosphor Dots
          Simulates a lower dot-pitch monitor (rougher look) */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.1] mix-blend-multiply"
        style={{
          backgroundImage: 'linear-gradient(90deg, #ff0000 1.33px, #00ff00 2.66px, #0000ff 4px)',
          backgroundSize: '4px 100%'
        }}
      />

      {/* Layer 2: Prominent Scanlines 
          Thicker, more visible lines repeating every 3 pixels (simulating low res mode) */}
      <div 
        className="absolute inset-0 z-20 opacity-[0.08]"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5))',
          backgroundSize: '100% 3px'
        }}
      />
      
      {/* Layer 3: Tube Curvature / Vignette 
          Darkens corners to simulate the glass tube depth */}
      <div className="absolute inset-0 z-30 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]"></div>

      {/* Layer 4: 60Hz Hum/Flicker Animation (Very subtle) */}
      <div className="absolute inset-0 z-40 bg-white opacity-[0.015] animate-[flicker_0.1s_infinite] pointer-events-none"></div>

      <style>{`
        @keyframes flicker {
          0% { opacity: 0.015; }
          50% { opacity: 0.03; }
          100% { opacity: 0.015; }
        }
      `}</style>
    </div>
  );
};

export default CrtOverlay;