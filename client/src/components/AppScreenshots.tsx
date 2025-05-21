import { APP_SCREENSHOTS } from "@/lib/constants";
import { useRef, useEffect, useState } from "react";

export default function AppScreenshots() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const scrollToItem = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const itemWidth = container.querySelector('.screenshot-item')?.clientWidth || 0;
    const padding = 12; // space-x-3 = 12px
    const scrollPos = index * (itemWidth + padding);
    
    container.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });
    
    setActiveIndex(index);
  };
  
  const scrollNext = () => {
    const nextIndex = Math.min(activeIndex + 1, APP_SCREENSHOTS.length - 1);
    scrollToItem(nextIndex);
  };
  
  const scrollPrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToItem(prevIndex);
  };
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    
    const mouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
    };
    
    const mouseLeave = () => {
      isDown = false;
      container.style.cursor = 'grab';
    };
    
    const mouseUp = () => {
      isDown = false;
      container.style.cursor = 'grab';
    };
    
    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Speed of scrolling
      container.scrollLeft = scrollLeft - walk;
      
      // Update active index based on scroll position
      const scrollPos = container.scrollLeft;
      const itemWidth = container.querySelector('.screenshot-item')?.clientWidth || 0;
      const padding = 12; // space-x-3 = 12px
      const newIndex = Math.round(scrollPos / (itemWidth + padding));
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < APP_SCREENSHOTS.length) {
        setActiveIndex(newIndex);
      }
    };
    
    // Handle scroll events to update active index
    const handleScroll = () => {
      const scrollPos = container.scrollLeft;
      const itemWidth = container.querySelector('.screenshot-item')?.clientWidth || 0;
      const padding = 12; // space-x-3 = 12px
      const newIndex = Math.round(scrollPos / (itemWidth + padding));
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < APP_SCREENSHOTS.length) {
        setActiveIndex(newIndex);
      }
    };
    
    container.addEventListener('mousedown', mouseDown);
    container.addEventListener('mouseleave', mouseLeave);
    container.addEventListener('mouseup', mouseUp);
    container.addEventListener('mousemove', mouseMove);
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('mousedown', mouseDown);
      container.removeEventListener('mouseleave', mouseLeave);
      container.removeEventListener('mouseup', mouseUp);
      container.removeEventListener('mousemove', mouseMove);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);
  
  // These icons better represent different screens you might see in a mobile game
  const screenshotIcons = [
    "pets",             // 메인 화면/펫
    "explore",          // 탐험/지도
    "location_on",      // 위치 화면
    "collections",      // 컬렉션
    "auto_awesome",     // 진화
    "card_giftcard"     // 보상
  ];
  
  // Screenshot colors for each item - more vibrant 
  const screenshotColors = [
    "from-teal-100 to-teal-200",    
    "from-blue-100 to-blue-200",
    "from-green-100 to-green-200",
    "from-purple-100 to-purple-200",
    "from-amber-100 to-amber-200",
    "from-pink-100 to-pink-200"
  ];
  
  return (
    <div className="pt-2 pb-4 bg-white">
      <div className="relative">
        <button 
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto screenshot-scroll cursor-grab px-8 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-3 pb-4 pt-1 w-max">
            {APP_SCREENSHOTS.map((screenshot, index) => (
              <div 
                key={index} 
                className="screenshot-item flex-shrink-0 w-40 h-auto rounded-xl overflow-hidden shadow-sm bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
              >
                {/* Improved placeholders for screenshots with gradients and icons */}
                <div className={`w-full aspect-[9/16] flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br ${screenshotColors[index] || "from-gray-100 to-gray-200"}`}>
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                    <span className="material-icons text-xl text-[#00c853]">
                      {screenshotIcons[index] || "pets"}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-gray-800">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={scrollNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      {/* Screenshot indicator dots */}
      <div className="flex justify-center mt-2">
        {APP_SCREENSHOTS.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === activeIndex 
                ? "bg-[#00c853]" 
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
