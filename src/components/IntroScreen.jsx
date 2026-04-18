import { useEffect, useRef, useState } from 'react';

const embedCode = `<div style="width: 1440px; height: 900px" data-us-project="yMRr6ri2mB09ytxltXzl"></div>
<script type="text/javascript">!function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.9/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();</script>`;

export default function IntroScreen() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.hasChildNodes()) {
      const fragment = document.createRange().createContextualFragment(embedCode);
      containerRef.current.appendChild(fragment);

      // Detect when Unicorn Studio actually mounts its elements
      const targetNode = containerRef.current;
      const observer = new MutationObserver((mutations) => {
        // Checking if the injected container element has populated children (canvas, etc)
        const projectDiv = targetNode.querySelector('[data-us-project]');
        if (projectDiv && projectDiv.children.length > 0) {
          // Add a tiny delay to ensure the canvas is actively rendering before we drop the loader
          setTimeout(() => setIsLoaded(true), 500);
          observer.disconnect();
        }
      });

      observer.observe(targetNode, { childList: true, subtree: true });
    }
  }, []);

  return (
    <div className="relative w-full h-[100dvh] bg-[#efe6d5] overflow-hidden">
      {/* Premium Skeleton Loader */}
      <div
        className={`absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ease-out pointer-events-none ${isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <div className="w-[300px] h-[300px] bg-white/30 rounded-full blur-[80px] animate-pulse"></div>
      </div>

      {/* Container for the exact Unicorn Studio Embed */}
      <div
        ref={containerRef}
        className={`absolute inset-0 flex items-center justify-center scale-75 md:scale-100 origin-center pointer-events-auto transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
      ></div>

      {/* Floating Scroll Bridge Indicator (Visible on initial Landing view) */}
      <div className={`absolute bottom-8 right-6 md:bottom-12 md:right-12 flex items-center justify-center animate-[bounce_3s_infinite] z-40 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:bg-white/25 transition-all duration-300 cursor-pointer group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6b4c3b] animate-pulse"></span>
          <span className="text-[10px] uppercase font-extrabold tracking-[0.25em] text-[#6b4c3b]">Scroll</span>
          <svg className="w-3.5 h-3.5 text-[#6b4c3b] group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
