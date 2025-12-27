'use client';

// ১. React ইম্পোর্ট করা হলো যাতে টাইপগুলো ঠিকভাবে পায়
import React, { useState, useEffect } from 'react';
import { Send, Copy, Check, Mail, Building2, Newspaper, Globe, Megaphone, Edit3, FileText, MapPin } from 'lucide-react';

// টাইপ ডেফিনিশন
type CategoryKey = 'govt' | 'local_media' | 'intl_media' | 'rights';
type LangKey = 'bn' | 'en';

interface CategoryData {
  id: CategoryKey;
  label: string;
  lang: LangKey;
  // ২. JSX.Element এর বদলে React.ReactNode ব্যবহার করা হলো (এটি বেশি সেফ)
  icon: React.ReactNode;
  emails: string[];
}

interface ContentData {
  subject: string;
  body: string;
}

export default function ActionSection() {
  const [copied, setCopied] = useState(false);
  
  const [activeTab, setActiveTab] = useState<CategoryKey>('intl_media'); 
  
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  // কনফিগারেশন
  const categories: Record<CategoryKey, CategoryData> = {
    govt: {
      id: 'govt',
      label: 'প্রশাসন',
      lang: 'bn',
      icon: <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />,
      emails: ["secretary@mha.gov.bd", "ig@police.gov.bd", "commissioner@dmp.gov.bd", "info@bangladesh.gov.bd"]
    },
    local_media: {
      id: 'local_media',
      label: 'দেশি মিডিয়া',
      lang: 'bn',
      icon: <Newspaper className="w-3 h-3 sm:w-4 sm:h-4" />,
      emails: ["editor@newagebd.net", "editor@dhakatribune.com", "editor@tbsnews.net", "assignment@jamuna.tv", "news@somoynews.tv"]
    },
    intl_media: {
      id: 'intl_media',
      label: 'আন্তর্জাতিক',
      lang: 'en',
      icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" />,
      emails: ["yourstory@aljazeera.net", "haveyoursay@bbc.co.uk", "tips@cnn.com", "editor@reuters.com", "bangladesh@afp.com"]
    },
    rights: {
      id: 'rights',
      label: 'মানবাধিকার',
      lang: 'en',
      icon: <Megaphone className="w-3 h-3 sm:w-4 sm:h-4" />,
      emails: ["asia@hrw.org", "press@amnesty.org", "info@askbd.org", "odishar.rights@gmail.com"]
    }
  };

  const defaultContent: Record<LangKey, ContentData> = {
    bn: {
      subject: "জরুরি আবেদন: আমার ভাই শরীফ ওসমান হাদী হত্যার বিচার চাই",
      body: `বরাবর,
যথাযথ কর্তৃপক্ষ/সম্পাদক মহোদয়।

আমি একজন সাধারণ শিক্ষার্থী।

অত্যন্ত বুকভরা কষ্ট নিয়ে আপনাকে জানাচ্ছি যে, গত ১৮ ডিসেম্বর ২০২৫ তারিখে ঢাকায় আমার ভাই শরীফ ওসমান হাদীকে নির্মমভাবে হত্যা করা হয়েছে। ঘটনার এতদিন পেরিয়ে গেলেও প্রধান আসামি ফয়সাল করিম মাসুদ এখনো প্রকাশ্যে ঘুরে বেড়াচ্ছে। আমার ভাইকে হারানোর বেদনার সাথে আসামির এই প্রকাশ্যে ঘুরে বেড়ানো আমাকে মানসিকভাবে বিপর্যস্ত করে তুলেছে।

একজন স্বজনহারা নাগরিক হিসেবে আমি আপনাদের কাছে জোর দাবি জানাচ্ছি:
১. অবিলম্বে আমার ভাইয়ের খুনি ফয়সাল করিম মাসুদকে গ্রেপ্তার করে আইনের আওতায় আনা হোক।
২. এই হত্যাকাণ্ডের ঘটনাটি গুরুত্ব সহকারে প্রচার করা হোক যাতে আমরা ন্যায়বিচার পাই।

ন্যায়ের পক্ষে আপনাদের সহযোগিতা কামনা করছি।

বিনীত,
শহীদ শরীফ ওসমান হাদীর বিচারপ্রত্যাশী একজন ভাই/সহযোদ্ধা।`
    },
    en: {
      subject: "URGENT from Bangladesh: Justice Denied for my Brother, Sharif Osman Hadi",
      body: `To the Concerned Authority / Editor,

I am writing to you from Bangladesh with a heavy heart.

I urgently seek your attention regarding the brutal assassination of my brother, Sharif Osman Hadi, on December 18, 2025, in Dhaka.

It is heartbreaking that despite clear identification, the prime suspect, Faisal Karim Masud, remains at large due to the alleged inaction of local law enforcement. Losing my brother was painful enough, but seeing his killer roam free is unbearable.

I appeal to you to:
1. Cover this story to bring global attention to the injustice faced by my family and country.
2. Question the authorities regarding the delay in arrest.
3. Stand in solidarity with my demand for justice for my brother.

Your voice is crucial for justice in our country.

Sincerely,
A Grieving Citizen of Bangladesh.`
    }
  };

  useEffect(() => {
    const lang = categories[activeTab].lang;
    setSubject(defaultContent[lang].subject);
    setBody(defaultContent[lang].body);
  }, [activeTab]);

  const currentEmails = categories[activeTab].emails.join(',');

  const handleCopy = () => {
    navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${currentEmails}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    if (!isMobile) {
        e.preventDefault();
        window.open(gmailLink, '_blank');
    }
  };

  return (
    <section id="act-now" className="py-16 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
       
       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
       
       <div className="container-custom text-center relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
           
           <div className="inline-flex items-center justify-center p-3 mb-4 md:mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
             <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
           </div>

           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
             প্রতিবাদ লিপি পাঠান
           </h2>
           <p className="mb-6 md:mb-8 text-sm md:text-base text-gray-400">
             নিচের ড্রাফটটি প্রয়োজনমতো এডিট করে মেইল করুন
           </p>

           {/* --- ট্যাব সিলেকশন --- */}
           <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
              {(Object.values(categories) as CategoryData[]).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border active:scale-95 ${
                    activeTab === cat.id 
                    ? 'bg-primary text-white border-primary shadow-[0_0_20px_rgba(220,38,38,0.3)]' 
                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
           </div>

           {/* --- PREMIUM EDITOR UI --- */}
           <div className="mb-8 md:mb-10 mx-auto max-w-3xl text-left relative group">
               
               <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 hidden sm:block"></div>

               <div className="relative bg-[#0F0F0F] border border-white/10 rounded-lg sm:rounded-xl overflow-hidden shadow-2xl">
                   
                   <div className="bg-[#1a1a1a] px-3 py-2 sm:px-4 sm:py-3 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5 mr-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" />
                        </div>
                        <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                        <span className="text-[10px] sm:text-xs text-gray-400 font-mono">appeal_letter.txt</span>
                      </div>
                      
                      <div className="flex items-center gap-2 sm:gap-3">
                         <span className="flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-wider font-bold truncate max-w-[80px] sm:max-w-none">
                            <MapPin className="w-3 h-3" /> 
                            {categories[activeTab].lang === 'en' ? 'Dhaka' : 'ঢাকা'}
                         </span>
                         <div className="h-3 w-px bg-white/10"></div>
                         <span className="text-[10px] text-primary/80 uppercase tracking-widest flex items-center gap-1">
                            <Edit3 className="w-3 h-3" /> <span className="hidden sm:inline">Editable</span>
                         </span>
                      </div>
                   </div>

                   <div className="p-0">
                       <div className="border-b border-white/5 bg-white/[0.02]">
                           <input 
                              type="text" 
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                              className="w-full bg-transparent p-3 sm:p-4 text-white font-medium text-base sm:text-sm focus:outline-none placeholder-gray-600 focus:bg-white/[0.04] transition-colors"
                              placeholder="Subject line..."
                           />
                       </div>
                       
                       <div className="flex min-h-[200px] sm:min-h-[250px]">
                           <div className="hidden sm:block w-12 py-4 bg-[#141414] border-r border-white/5 text-right pr-3 select-none">
                               {Array.from({length: 8}).map((_, i) => (
                                   <div key={i} className="text-xs text-gray-700 font-mono leading-relaxed mb-3">
                                       {i + 1}
                                   </div>
                               ))}
                           </div>
                           
                           <textarea 
                              value={body}
                              onChange={(e) => setBody(e.target.value)}
                              className="flex-1 bg-transparent p-3 sm:p-4 text-gray-300 text-base sm:text-sm leading-relaxed focus:outline-none focus:text-white transition-colors resize-none font-sans scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent h-[220px] sm:h-[280px]"
                              spellCheck="false"
                           />
                       </div>
                   </div>

                   <div className="bg-[#141414] px-4 py-2 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 font-mono">
                       <span>UTF-8</span>
                       <span>{body.length} chars</span>
                   </div>
               </div>
           </div>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
               
               <a 
                 href={`mailto:${currentEmails}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                 onClick={handleEmailClick}
                 className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-primary rounded-md sm:rounded-sm hover:bg-[#b00020] hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] active:scale-95 cursor-pointer no-underline"
               >
                  <span className="relative flex items-center gap-2 sm:gap-3 text-sm sm:text-base tracking-widest uppercase z-10">
                     <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                     <span>মেইল অ্যাপ খুলুন</span>
                  </span>
               </a>

               <button 
                 onClick={handleCopy}
                 className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 overflow-hidden font-bold text-gray-300 transition-all duration-300 bg-white/5 border border-white/10 rounded-md sm:rounded-sm hover:bg-white/10 hover:text-white active:scale-95 cursor-pointer"
               >
                  <span className="relative flex items-center gap-2 sm:gap-3 text-sm sm:text-base tracking-widest uppercase z-10">
                     {copied ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" /> : <Copy className="w-4 h-4 sm:w-5 sm:h-5" />}
                     <span>লেখাটি কপি করুন</span>
                  </span>
               </button>
           </div>
           
           <div className="mt-6 md:mt-8 text-center opacity-60 hover:opacity-100 transition-opacity duration-500">
             <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Sending to: {categories[activeTab].label}</p>
             <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded bg-white/5 border border-white/5 max-w-full">
                <p className="text-[10px] text-primary/80 font-mono break-all line-clamp-2 sm:line-clamp-none">
                  {currentEmails.replaceAll(',', ', ')}
                </p>
             </div>
           </div>
       </div>
    </section>
  );
}