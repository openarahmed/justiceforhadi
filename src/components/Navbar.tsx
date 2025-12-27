'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Send, Clock, AlertTriangle } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const startDate = new Date('2025-12-12T00:00:00').getTime(); 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate;
      
      if (distance < 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, '0');

  return (
    <nav 
      className={`absolute md:fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-b from-black/90 to-transparent md:bg-[#050505]/95 md:backdrop-blur-md md:border-b md:border-white/5 py-4 md:py-3 md:shadow-2xl' 
          : 'bg-gradient-to-b from-black/90 to-transparent md:from-black/80 md:to-transparent border-transparent py-4 md:py-6'
      }`}
    >
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
        
        {/* --- LEFT: LOGO --- */}
        <div className="flex w-full md:w-auto justify-between items-center z-20 flex-shrink-0">
          <Link href="/" className="font-heading font-black text-lg md:text-2xl tracking-[0.15em] text-white group whitespace-nowrap drop-shadow-md">
            JUSTICE FOR<span className="text-primary group-hover:text-red-500 transition-colors"> HADI</span>
          </Link>
          
          {/* Mobile Action Button */}
          <Link 
            href="#act-now"
            className="md:hidden flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-3 py-1.5 rounded-sm text-xs font-bold uppercase backdrop-blur-sm"
          >
            <span>বিচার চাই</span>
          </Link>
        </div>

        {/* --- CENTER: STATS BAR --- */}
        <div className="w-full md:w-auto md:mx-auto flex justify-center z-10 flex-shrink min-w-0 px-1 md:px-4">
            <div className={`
              w-full md:w-auto flex flex-wrap md:flex-nowrap justify-between md:justify-center items-center 
              px-0 py-0 rounded-sm md:rounded-md border 
              bg-[#121212] border-white/5 md:border-primary/20
              shadow-[0_2px_0px_rgba(217,4,41,0.5)] md:shadow-[0_4px_0px_rgba(180,0,0,0.8)]
              transition-all duration-300 overflow-hidden backdrop-blur-sm
            `}>
              
              {/* LABEL: Reduced Padding & Width set to Auto */}
              <div className="flex self-stretch items-center justify-center gap-1.5 md:gap-2 pl-2 pr-2 md:px-4 py-2 md:py-0 md:border-r border-white/10 w-auto bg-white/[0.02] md:bg-transparent">
                 <Clock className="w-3 h-3 md:w-4 md:h-4 text-red-500 animate-pulse flex-shrink-0" />
                 <span className="text-[9px] md:text-[10px] lg:text-xs font-bold text-gray-300 uppercase tracking-widest whitespace-nowrap pt-[1px]">
                   বিচারহীনতার
                 </span>
              </div>

              {/* TIMER: Flex-1 to take remaining space */}
              <div className="flex-1 flex justify-center md:justify-center items-start gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 font-mono text-white px-1 md:px-4 py-2">
                <CounterItem value={time.days} label="দিন" />
                <Separator />
                <CounterItem value={time.hours} label="ঘণ্টা" />
                <Separator />
                <CounterItem value={time.minutes} label="মিনিট" />
                
                {/* Seconds always visible */}
                <div className="flex items-start gap-0.5 sm:gap-1 md:gap-2 lg:gap-3">
                    <Separator />
                    <div className="flex flex-col items-center justify-start min-w-[20px] sm:min-w-[25px] md:min-w-[30px] lg:min-w-[40px]">
                       <span className="text-lg sm:text-xl md:text-xl lg:text-3xl font-bold text-primary tabular-nums leading-[0.8]">
                        {formatNum(time.seconds)}
                       </span>
                       <span className="text-[7px] sm:text-[8px] md:text-[8px] lg:text-[9px] text-primary/60 uppercase font-bold tracking-wider mt-1.5">সেক</span>
                    </div>
                </div>
              </div>

              {/* ARREST COUNT: Full Width on Mobile */}
              <div className="flex self-stretch items-center justify-center gap-1.5 md:gap-2 w-full md:w-auto px-3 md:px-4 py-1.5 md:py-2 border-t md:border-t-0 md:border-l border-white/10 bg-red-500/5 md:bg-transparent">
                 <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                 <span className="text-[10px] md:text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-widest pt-[1px] whitespace-nowrap">
                   গ্রেপ্তার: <span className="text-primary text-sm md:text-sm lg:text-base ml-1 font-mono font-bold">০</span>
                 </span>
              </div>

            </div>
        </div>

        {/* --- RIGHT: DESKTOP ACTIONS --- */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 relative z-20 flex-shrink-0">
          <Link href="#timeline" className="text-[10px] lg:text-xs font-bold text-gray-400 hover:text-white transition uppercase tracking-widest hover:underline decoration-primary underline-offset-8 whitespace-nowrap drop-shadow-md">
            ঘটনাপ্রবাহ
          </Link>
          <Link 
            href="#act-now"
            className="flex items-center gap-2 bg-white text-black px-4 lg:px-6 py-2 lg:py-2.5 font-bold text-[10px] lg:text-xs hover:bg-primary hover:text-white transition-all duration-300 rounded-sm uppercase tracking-wider shadow-lg hover:shadow-primary/30 whitespace-nowrap"
          >
            <span>বিচার চাই</span>
            <Send size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Sub-components: Compacted for Mobile
const CounterItem = ({ value, label }: { value: number, label: string }) => (
  <div className="flex flex-col items-center justify-start min-w-[20px] sm:min-w-[25px] md:min-w-[30px] lg:min-w-[40px]">
    <span className="text-lg sm:text-xl md:text-xl lg:text-3xl font-bold text-white tabular-nums leading-[0.8] drop-shadow-sm">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-[7px] sm:text-[8px] md:text-[8px] lg:text-[9px] text-gray-500 uppercase font-bold tracking-wider mt-1.5">{label}</span>
  </div>
);

const Separator = () => (
  <span className="text-sm sm:text-lg md:text-lg lg:text-2xl text-white/20 font-light leading-[0.8] self-start mt-[2px] mx-[1px] md:mx-0">:</span>
);