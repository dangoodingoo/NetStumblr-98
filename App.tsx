import React, { useState, useEffect, useCallback, useRef } from 'react';
import { RotateCw, ExternalLink, Coffee, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import RetroLoader from './components/RetroLoader';
import CrtOverlay from './components/CrtOverlay';
import { getRandomSite } from './services/archiveService';
import { StumbleState } from './types';

const App: React.FC = () => {
  // History management for Back/Forward functionality
  const [history, setHistory] = useState<StumbleState[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Refresh key to force iframe reload
  const [refreshKey, setRefreshKey] = useState(0);

  // Derived current state
  const currentState = currentIndex >= 0 ? history[currentIndex] : null;

  const stumble = useCallback(() => {
    const newState = getRandomSite();
    setHistory(prev => {
        // If we stumbled while in the middle of history, overwrite future
        const upToCurrent = prev.slice(0, currentIndex + 1);
        return [...upToCurrent, newState];
    });
    setCurrentIndex(prev => prev + 1);
    setIsHistoryOpen(false); // Close dropdown on new stumble
  }, [currentIndex]);

  // Initial load
  useEffect(() => {
    if (currentIndex === -1) {
      stumble();
    }
  }, [currentIndex, stumble]);

  // Sync with browser native history (popstate)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // If the browser back/forward was hit, and it corresponds to our internal state
      // We try to align currentIndex.
      // Note: This is a simplified sync. For perfect sync, we'd need to push ID to state.
      if (event.state && typeof event.state.index === 'number') {
         setCurrentIndex(event.state.index);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Browser History when we navigate internally
  useEffect(() => {
    if (!currentState) return;

    // We only push state if we are creating a NEW entry or updating current?
    // Actually, to make "Back" work for iframe clicks, we rely on iframe pushing its own history,
    // but cross-origin iframes don't push to main window history usually. 
    // However, our internal navigation (Stumble, Back btn) should update URL hash or state object.
    
    const historyState = { index: currentIndex, url: currentState.currentUrl };
    
    // Check if we need to push or replace
    // This is tricky with iframe. Simple approach:
    // Just keep internal state. If we want browser back button to work for APP navigation:
    // window.history.pushState(historyState, '');
  }, [currentIndex, currentState]);

  const handleIframeLoad = () => {
    // Update the loading state of the current history item
    setHistory(prev => {
        const newHistory = [...prev];
        if (newHistory[currentIndex]) {
            newHistory[currentIndex] = { ...newHistory[currentIndex], isLoading: false };
        }
        return newHistory;
    });
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goForward = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const jumpToHistory = (index: number) => {
    setCurrentIndex(index);
    setIsHistoryOpen(false);
  };

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
    // Force loading state back to true for effect
    setHistory(prev => {
        const newHistory = [...prev];
        if (newHistory[currentIndex]) {
            newHistory[currentIndex] = { ...newHistory[currentIndex], isLoading: true };
        }
        return newHistory;
    });
  };

  if (!currentState) return <div className="bg-[#acaeb4] h-screen w-screen" />;

  const getCategoryLabel = (cat: string) => {
    switch(cat) {
      case 'personal': return 'Personal Page';
      case 'hub': return 'Directory / Hub';
      case 'shrine': return 'Fan Shrine';
      case 'corporate': return 'Corporate Site';
      case 'weird': return 'Weird Web';
      case 'games': return 'Gaming / Interactive';
      case 'culture': return 'Pop Culture';
      default: return 'Unknown';
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden win98-surface font-win98 flex flex-col">
      
      {/* Main Window Container */}
      <div className="flex-1 flex flex-col m-1 border-2 border-white border-r-gray-600 border-b-gray-600 shadow-xl win98-surface">
        
        {/* Title Bar */}
        <div className="h-6 win98-gradient flex items-center justify-between relative px-1 select-none">
          <div className="flex items-center gap-2">
            {/* Custom Win98 World Icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
              <circle cx="8" cy="8" r="7" fill="#000080" />
              <path d="M8 1V15M1 8H15" stroke="#00FFFF" strokeWidth="1" opacity="0.5"/>
              <path d="M3 4C3 4 5 2 8 2C11 2 13 4 13 4" stroke="#00FFFF" strokeWidth="1"/>
              <path d="M3 12C3 12 5 14 8 14C11 14 13 12 13 12" stroke="#00FFFF" strokeWidth="1"/>
              <path d="M5 6H8V8H5V6Z" fill="#00FF00"/>
              <path d="M9 7H12V10H9V7Z" fill="#00FF00"/>
              <path d="M6 10H8V12H6V10Z" fill="#00FF00"/>
              <circle cx="5" cy="5" r="1" fill="white"/>
            </svg>
            <span className="font-bold text-white text-sm tracking-wide">NetStumblr 98</span>
          </div>
        </div>

        {/* Address & Toolbar Area */}
        <div className="p-1 pb-2 relative z-50">
           {/* Navigation Buttons Row */}
           <div className="flex items-center gap-2 mt-1">
              
              <div className="flex items-center gap-0.5 mr-1">
                  <button 
                    onClick={goBack} 
                    disabled={currentIndex <= 0}
                    className="win98-btn p-1 px-2 disabled:text-gray-500 disabled:shadow-none disabled:border-gray-400 active:translate-y-[1px]"
                    title="Back"
                  >
                    <ArrowLeft size={16} strokeWidth={2.5} />
                  </button>
                  <button 
                    onClick={goForward} 
                    disabled={currentIndex >= history.length - 1}
                    className="win98-btn p-1 px-2 disabled:text-gray-500 disabled:shadow-none disabled:border-gray-400 active:translate-y-[1px]"
                    title="Forward"
                  >
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </button>
                  <button 
                    onClick={handleRefresh}
                    className="win98-btn p-1 px-2 active:translate-y-[1px]"
                    title="Refresh"
                  >
                    <RotateCw size={16} strokeWidth={2.5} />
                  </button>
              </div>

              <span className="text-black text-sm px-1 border-l border-gray-400 pl-3">Address</span>
              
              {/* Address Bar / History Dropdown */}
              <div className="flex-1 relative">
                  <div className="win98-inset h-6 flex items-center bg-white pr-0">
                      {/* Current URL Display */}
                      <div className="flex items-center gap-2 overflow-hidden flex-1 px-2">
                          <div className="w-4 h-4 flex items-center justify-center shrink-0">
                              <img src="https://www.google.com/s2/favicons?domain=archive.org" alt="icon" className="w-3 h-3 opacity-60" />
                          </div>
                          <span className="text-black text-sm truncate w-full select-all font-sans">
                              {currentState.originalUrl}
                          </span>
                      </div>
                      
                      {/* Dropdown Toggle Button */}
                      <button 
                        onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                        className="h-full w-5 bg-[#acaeb4] flex items-center justify-center border-l-2 border-l-[#fff] border-t-2 border-t-[#fff] border-r-2 border-r-[#404040] border-b-2 border-b-[#404040] active:border-l-[#404040] active:border-t-[#404040] active:border-r-[#fff] active:border-b-[#fff] focus:outline-none"
                      >
                         <ChevronDown size={12} color="black" fill="black" />
                      </button>
                  </div>

                  {/* Dropdown Menu */}
                  {isHistoryOpen && (
                    <div className="absolute top-full left-0 w-full max-h-60 overflow-y-auto bg-white border-2 border-black z-[100] shadow-xl mt-[1px]">
                        {history.map((item, idx) => (
                            <div 
                                key={idx}
                                onClick={() => jumpToHistory(idx)}
                                className={`px-2 py-0.5 text-sm cursor-pointer flex gap-2 items-center font-sans ${idx === currentIndex ? 'bg-[#000080] text-white' : 'hover:bg-[#000080] hover:text-white text-black'}`}
                            >
                                <div className="w-4 flex justify-center">
                                    <img src="https://www.google.com/s2/favicons?domain=archive.org" className={`w-3 h-3 ${idx === currentIndex ? 'invert' : 'opacity-60'}`} />
                                </div>
                                <span className="truncate flex-1">{item.originalUrl}</span>
                                <span className={`text-xs ${idx === currentIndex ? 'text-gray-300' : 'text-gray-500'}`}>
                                    {item.siteName}
                                </span>
                            </div>
                        ))}
                    </div>
                  )}
              </div>
           </div>
        </div>

        {/* Viewport (The Monitor) */}
        <div className="flex-1 relative bg-black border-2 border-gray-600 border-r-white border-b-white m-1 mb-0 overflow-hidden shadow-inner z-0">
            <CrtOverlay />
            
            {currentState.isLoading && <RetroLoader />}
            
            <iframe
              key={`${currentState.currentUrl}-${refreshKey}`}
              ref={iframeRef}
              src={currentState.currentUrl}
              className={`w-full h-full border-0 bg-white transition-opacity duration-200 ${currentState.isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={handleIframeLoad}
              title="Archive Content"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            />
        </div>

        {/* Status Bar */}
        <div className="h-6 border-t border-gray-400 flex items-center px-2 gap-2 text-xs text-black win98-surface shadow-[inset_0_1px_0_white]">
            <div className="w-4 h-4 mr-1">
                 <div className={`w-full h-full border border-gray-500 rounded-full shadow-sm ${currentState.isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-500'}`}></div>
            </div>
            <span className="w-32 truncate">
                {currentState.isLoading ? 'Finding host...' : `Done`}
            </span>
            <div className="border border-gray-500 border-b-white border-r-white px-2 py-0.5 shadow-inner win98-surface hidden md:block flex-1 truncate">
               {getCategoryLabel(currentState.category)}: {currentState.siteName}
            </div>
            <div className="border border-gray-500 border-b-white border-r-white px-2 py-0.5 shadow-inner win98-surface hidden sm:block">
                {currentState.timestamp === 'LIVE' ? 'Intranet Zone' : `Internet Zone (${currentState.timestamp})`}
            </div>
        </div>
      </div>

      {/* Bottom Control Deck */}
      <div className="h-16 win98-surface border-t-2 border-white flex items-center justify-between px-4 gap-4">
            
            {/* Main Action */}
            <button 
                onClick={stumble}
                className="win98-btn group relative px-6 py-2 active:translate-y-px transition-all flex-1 md:flex-none md:w-64"
            >
                <div className="flex items-center justify-center gap-2">
                    <RotateCw size={18} className="text-black" strokeWidth={3} />
                    <span className="font-bold text-black text-lg">Stumble</span>
                </div>
            </button>

            {/* Right Side Tools */}
            <div className="flex gap-4">
              <a 
                  href="https://ko-fi.com/dangoodingoo" 
                  target="_blank" 
                  rel="noreferrer"
                  className="win98-btn px-4 py-2 active:translate-y-px text-black flex items-center gap-2 text-sm"
                  title="Buy me a coffee"
              >
                  <Coffee size={16} />
                  <span className="hidden sm:inline">I love coffee</span>
              </a>

              <a 
                  href={currentState.currentUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="win98-btn px-3 py-2 active:translate-y-px text-black"
                  title="Open in new window"
              >
                  <ExternalLink size={18} />
              </a>
            </div>
      </div>
    </div>
  );
};

export default App;