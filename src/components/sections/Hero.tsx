import Link from 'next/link';
import { ChevronDown, AlertCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        {/* 1. Main Image */}
        {/* FIX: bg-[65%_center] ব্যবহার করা হয়েছে মোবাইলের জন্য, যাতে মানুষটা ফ্রেমে আসে। ডেস্কটপে md:bg-center থাকবে। */}
        <div 
          className="absolute inset-0 bg-cover bg-[65%_center] md:bg-center scale-105"
          style={{ backgroundImage: "url('/hadi_banner.png')" }} 
        />
        
        {/* 2. Global Light Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* 3. Soft Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.4)_70%,_rgba(0,0,0,0.9)_100%)]" />
      </div>

      {/* Content Container */}
      <div className="z-20 w-full container-custom flex flex-col items-center justify-center pt-20 md:pt-0 px-4">
        
        {/* Badge */}
        <div className="flex items-center gap-3 mb-6 md:mb-10 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-primary/60"></span>
          <div className="flex items-center gap-2 border border-white/20 bg-black/30 px-3 py-1.5 md:px-4 rounded-full backdrop-blur-md shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
              <span className="text-gray-100 text-[10px] md:text-xs tracking-[0.2em] uppercase font-sans font-bold">ইনকিলাব মঞ্চ</span>
          </div>
          <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-primary/60"></span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-center font-bold text-text-main mb-6 md:mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          <span className="block text-[clamp(2rem,6vw,4rem)] text-white tracking-tight leading-[1.1]">
            শহীদ শরীফ
          </span>
          <span className="block text-[clamp(3.2rem,13vw,9rem)] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 tracking-tight leading-[1.1] pt-2 md:pt-4 -mt-2 md:-mt-4 pb-2 md:pb-4 drop-shadow-2xl">
            ওসমান বিন হাদী
          </span>
        </h1>

        {/* Subtitle & Dates */}
        <div className="flex flex-col items-center space-y-5 md:space-y-6 mb-10 md:mb-12 max-w-4xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards] w-full">
          
          {/* Dates */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 md:gap-x-6 text-sm sm:text-base md:text-2xl font-medium tracking-wide drop-shadow-md">
              <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-primary/30 border border-primary/50 backdrop-blur-md">
                  <span className="text-primary font-bold">১২ ডিসেম্বর</span> 
                  <span className="text-white">গুলিবিদ্ধ</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 rounded-full bg-black/40 border border-white/20 backdrop-blur-md">
                  <span className="text-white font-bold">১৮ ডিসেম্বর</span> 
                  <span className="text-white">শাহাদাত</span>
              </div>
          </div>
          
          <p className="text-gray-100 text-sm md:text-lg leading-relaxed font-light text-center max-w-[95%] md:max-w-2xl px-2 md:px-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            বিপ্লবের এই আপোষহীন কণ্ঠস্বরকে স্তব্ধ করে দেওয়া হয়েছে। <br className="hidden md:block" />
            আমরা খুনিদের অবিলম্বে গ্রেফতার ও ফাঁসি চাই।
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
          
          <Link 
            href="#timeline"
            className="w-full sm:w-[240px] px-6 py-3 md:px-8 md:py-4 bg-black/50 hover:bg-black/70 text-white border border-white/30 hover:border-white/60 font-bold text-sm md:text-base transition-all duration-300 rounded-sm text-center uppercase tracking-widest backdrop-blur-md flex items-center justify-center shadow-lg"
          >
            ঘটনাপ্রবাহ
          </Link>
          
          <Link 
            href="#act-now"
            className="group w-full sm:w-[240px] px-6 py-3 md:px-8 md:py-4 bg-primary hover:bg-[#b00020] text-white font-bold text-sm md:text-base transition-all duration-300 rounded-sm text-center flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(217,4,41,0.5)] hover:shadow-[0_0_30px_rgba(217,4,41,0.7)] uppercase tracking-widest"
          >
            <AlertCircle size={18} />
            <span>বিচার দাবি করুন</span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-80 flex flex-col items-center gap-2 drop-shadow-md">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white" />
      </div>
    </section>
  );
}