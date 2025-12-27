'use client';
import { useState, useEffect } from 'react';

export default function LiveCounter() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Shooting Date: Dec 12, 2025
    const startDate = new Date('2025-12-12T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate;
      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, '0');

  return (
    // Height increased, Gradient added, Shadow added
    <div className="w-full bg-gradient-to-r from-[#8a0000] via-primary to-[#8a0000] text-white py-4 shadow-[0_4px_20px_rgba(217,4,41,0.5)] z-[60] relative border-b-2 border-white/10">
      
      <div className="container-custom flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8">
        
        {/* Label with Blinking Dot */}
        <div className="flex items-center gap-3 mb-1 md:mb-0">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/90">
            অন্যায় ও বিচারহীনতার সময়কাল
          </span>
        </div>
        
        {/* The Big Numbers */}
        <div className="flex items-center gap-4 md:gap-6 font-mono font-black text-2xl md:text-3xl tracking-tight text-white drop-shadow-md">
          
          <div className="flex flex-col items-center">
            <span className="leading-none">{formatNum(time.days)}</span>
            <span className="text-[10px] font-sans font-medium opacity-60 uppercase tracking-widest -mt-1">দিন</span>
          </div>
          
          <span className="text-white/40 pb-3">:</span>
          
          <div className="flex flex-col items-center">
            <span className="leading-none">{formatNum(time.hours)}</span>
            <span className="text-[10px] font-sans font-medium opacity-60 uppercase tracking-widest -mt-1">ঘণ্টা</span>
          </div>
          
          <span className="text-white/40 pb-3">:</span>
          
          <div className="flex flex-col items-center">
            <span className="leading-none">{formatNum(time.minutes)}</span>
            <span className="text-[10px] font-sans font-medium opacity-60 uppercase tracking-widest -mt-1">মিনিট</span>
          </div>
          
          <span className="text-white/40 pb-3">:</span>
          
          {/* Seconds - Red Highlight */}
          <div className="flex flex-col items-center bg-black/20 px-3 py-1 rounded-sm border border-white/10 backdrop-blur-sm">
            <span className="leading-none text-red-200 w-10 text-center">{formatNum(time.seconds)}</span>
            <span className="text-[10px] font-sans font-medium text-red-200/60 uppercase tracking-widest -mt-1">সেকেন্ড</span>
          </div>

        </div>
      </div>
    </div>
  );
}