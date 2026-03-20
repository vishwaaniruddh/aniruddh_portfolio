"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Keep loader visible for at least 3 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030014]">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo/Spinner */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-cyan-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Aniruddh Vishwakarma
          </h2>
          <p className="text-gray-400 text-sm animate-pulse">Loading portfolio...</p>
        </div>
      </div>
    </div>
  );
}
