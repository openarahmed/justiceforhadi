import Timeline from '@/components/Timeline';

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 px-4 relative border-t border-white/5 bg-[#050505]">
      <div className="container-custom">
        
        {/* ফিক্স: justify-center যোগ করা হয়েছে যাতে পুরো জিনিসটা মাঝখানে আসে */}
        <div className="flex items-center justify-center gap-4 mb-16">
           
           {/* দাগ যেমন ছিল তেমনই আছে (বামে) */}
           <div className="h-12 w-1 bg-gradient-to-b from-primary to-transparent"></div>
           
           {/* টেক্সট */}
           <div className="text-left"> 
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-1">হত্যাকাণ্ড ও ঘটনাপ্রবাহ</h2>
              <p className="text-gray-400 text-sm md:text-base">জুলাই বিপ্লব থেকে শাহাদাত বরণ পর্যন্ত</p>
           </div>
        </div>

        <Timeline />
      </div>
    </section>
  );
}