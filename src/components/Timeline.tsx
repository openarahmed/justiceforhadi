import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

// Events Array Reversed: Newest -> Oldest
const events = [
  {
    date: "বর্তমান অবস্থা",
    title: "খুনি পলাতক",
    desc: "বিভিন্ন প্রতিবেদনে জানা গেছে খুনি হালুয়াঘাট সীমান্ত দিয়ে ভারতে পালিয়ে গেছে। এখন পর্যন্ত প্রশাসন কাউকে গ্রেপ্তার করতে পারেনি।",
    active: true // Active item now at the top
  },
  {
    date: "১৮ ডিসেম্বর, ২০২৫",
    title: "শাহাদাত বরণ",
    desc: "সিঙ্গাপুরের হাসপাতালে মৃত্যুর সাথে পাঞ্জা লড়ে অবশেষে তিনি শাহাদাত বরণ করেন। পুরো জাতি শোকস্তব্ধ হয়ে পড়ে।"
  },
  {
    date: "১২ ডিসেম্বর, ২০২৫",
    title: "বর্বরোচিত হামলা",
    desc: "বিজয়নগরে প্রচারণাকালে হাদীর ওপর গুলি চালানো হয়। প্রত্যক্ষদর্শীরা চিহ্নিত সন্ত্রাসী ফয়সাল করিম মাসুদকে শুটার হিসেবে শনাক্ত করেছেন।"
  },
  {
    date: "জুলাই ২০২৪",
    title: "গণঅভ্যুত্থান",
    desc: "বৈষম্যবিরোধী ছাত্র আন্দোলনে শহীদ শরীফ ওসমান হাদী সম্মুখসারিতে থেকে নেতৃত্ব দেন এবং ফ্যাসিবাদের বিরুদ্ধে এক বলিষ্ঠ কণ্ঠস্বর হয়ে ওঠেন।"
  }
];

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto font-bangla px-4">
      
      <div className="relative space-y-8 md:space-y-12">
        
        {/* 1. Gradient Vertical Line */}
        <div className="absolute left-[19px] md:left-[119px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-primary via-white/10 to-transparent" />

        {events.map((event, index) => (
          <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-10 group">
            
            {/* 2. Date Section (Desktop) */}
            <div className="hidden md:flex md:w-[120px] md:text-right flex-shrink-0 items-center md:justify-end">
               <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300
                 ${event.active 
                   ? 'bg-primary/10 border-primary text-primary shadow-[0_0_10px_rgba(220,38,38,0.3)]' 
                   : 'bg-white/5 border-white/10 text-gray-400 group-hover:border-primary/50 group-hover:text-primary'
                 }`}>
                  <Calendar className="w-3 h-3" />
                  {event.date}
               </div>
            </div>

            {/* 3. Timeline Node/Dot */}
            <div className="absolute left-[14px] md:left-[114px] top-[2.5rem] md:top-3 z-10 flex items-center justify-center">
               <div className={`h-3 w-3 rounded-full transition-all duration-500 relative
                 ${event.active ? 'bg-primary scale-125' : 'bg-[#050505] border-2 border-gray-600 group-hover:border-primary group-hover:bg-primary'}
               `}>
                 {event.active && (
                   <span className="absolute -inset-2 rounded-full bg-primary/30 animate-ping"></span>
                 )}
               </div>
            </div>

            {/* 4. Content Card (Right Side) */}
            <div className="flex-1 pl-10 md:pl-0">
               
               {/* Mobile Date Badge */}
               <div className="md:hidden mb-2 pl-1">
                 <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest
                   ${event.active ? 'text-primary' : 'text-gray-500'}
                 `}>
                    <Calendar className="w-3 h-3" />
                    {event.date}
                 </span>
               </div>

               <div className={`relative p-5 md:p-6 rounded-xl border transition-all duration-300
                 ${event.active 
                   ? 'bg-gradient-to-r from-primary/10 to-transparent border-primary/50 shadow-[0_0_20px_rgba(220,38,38,0.1)]' 
                   : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.07]'
                 }
               `}>
                  {/* Title Area */}
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <h3 className={`text-lg md:text-2xl font-bold transition-colors duration-300 leading-tight
                      ${event.active ? 'text-primary' : 'text-white group-hover:text-gray-100'}
                    `}>
                      {event.title}
                    </h3>
                    
                    {event.active && <AlertCircle className="text-primary w-4 h-4 md:w-5 md:h-5 animate-pulse flex-shrink-0" />}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {event.desc}
                  </p>

                  {/* Decoration */}
                  {!event.active && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-xl pointer-events-none" />
                  )}
               </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}