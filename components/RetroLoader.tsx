import React from 'react';

const RetroLoader: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-[60] bg-black/20 backdrop-blur-[1px]">
      {/* Windows 98 Dialog Box */}
      <div className="w-96 win98-surface border-2 border-white border-r-black border-b-black p-1 shadow-2xl">
        {/* Title Bar */}
        <div className="bg-[#000080] px-2 py-1 flex justify-between items-center mb-3 cursor-default">
          <span className="text-white font-bold text-sm tracking-wide font-sans">NetStumblr Explorer</span>
          <button className="w-4 h-4 win98-surface border border-white border-r-gray-600 border-b-gray-600 flex items-center justify-center text-[10px] leading-none active:border-gray-600 active:border-r-white active:border-b-white focus:outline-none">
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-4 pb-4 font-sans text-sm text-black cursor-wait">
          <p className="mb-4">Searching the Web for random artifacts...</p>

          {/* Animation Container */}
          <div className="flex items-center justify-between w-full h-20 relative overflow-hidden px-4 mb-4">
            
            {/* 1. The Globe (Source) */}
            <div className="z-10 relative">
               <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
                  {/* Stand */}
                  <path d="M12 26H20V28H22V30H10V28H12V26Z" fill="#808080"/>
                  <path d="M15 22H17V26H15V22Z" fill="#808080"/>
                  {/* Globe Shadow */}
                  <circle cx="17" cy="15" r="11" fill="black" fillOpacity="0.3"/>
                  {/* Globe Circle */}
                  <circle cx="16" cy="14" r="10" fill="#000080"/>
                  {/* Water */}
                  <circle cx="16" cy="14" r="9" fill="#0080FF"/>
                  {/* Landmasses (Pixel Art Style) */}
                  <path d="M12 8H15V9H17V11H19V14H16V16H13V14H11V10H12V8Z" fill="#00FF00"/>
                  <path d="M20 14H23V16H25V19H22V17H20V14Z" fill="#00FF00"/>
                  <path d="M10 16H13V18H11V20H9V17H10V16Z" fill="#00FF00"/>
                  {/* Grid/Highlight */}
                  <path d="M16 5V23M7 14H25" stroke="white" strokeOpacity="0.3" strokeWidth="1"/>
                  <circle cx="12" cy="10" r="1" fill="white"/>
               </svg>
            </div>

            {/* 2. Flying Papers Animation */}
            <div className="absolute left-16 right-16 h-full top-0 pointer-events-none">
               {[0, 1, 2].map((i) => (
                 <div 
                    key={i}
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-8 bg-white border border-black shadow-sm flex flex-col gap-1 p-1 animate-[fly_1.5s_steps(8)_infinite]"
                    style={{ animationDelay: `${i * 0.5}s` }}
                 >
                    <div className="w-full h-0.5 bg-blue-600"></div>
                    <div className="w-2/3 h-0.5 bg-gray-400"></div>
                    <div className="w-full h-0.5 bg-gray-400"></div>
                    <div className="w-3/4 h-0.5 bg-gray-400"></div>
                 </div>
               ))}
            </div>

            {/* 3. The Folder (Destination) */}
            <div className="z-10 relative pt-2">
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
                    {/* Back Tab */}
                    <path d="M2 6H12L14 8H30V24H2V6Z" fill="#DAA520" stroke="black" strokeWidth="1"/>
                    {/* Papers inside (static) */}
                    <rect x="5" y="5" width="22" height="18" fill="white" stroke="gray"/>
                    {/* Front Flap */}
                    <path d="M2 10H30V26H2V10Z" fill="#FFD700" stroke="black" strokeWidth="1"/>
                    {/* Pattern on Front */}
                    <rect x="4" y="12" width="24" height="12" fillOpacity="0.1" fill="white"/>
                </svg>
            </div>
          </div>

          <div className="flex justify-between text-xs mb-1">
             <span>Estimated time left:</span>
             <span>Unknown</span>
          </div>
          <div className="flex justify-between text-xs mb-4">
             <span>Transfer rate:</span>
             <span>56.6 Kbps</span>
          </div>

          {/* Progress Bar */}
          <div className="border border-gray-600 border-r-white border-b-white bg-white h-5 relative p-0.5 mb-4">
            <div className="h-full bg-[#000080] flex gap-0.5 w-full animate-[width_2.5s_steps(20)_infinite] origin-left overflow-hidden">
                {/* Windows 95/98 style block progress bar */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="h-full w-3 bg-[#000080] shrink-0 border-r border-white/20"></div>
                ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <button className="px-8 py-1 win98-btn focus:outline-dotted outline-1 outline-black">
              Cancel
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fly {
            0% { transform: translateX(0) scale(0.5); opacity: 0; }
            20% { opacity: 1; transform: translateX(20px) scale(0.8); }
            80% { opacity: 1; transform: translateX(140px) scale(0.8); }
            100% { transform: translateX(160px) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default RetroLoader;