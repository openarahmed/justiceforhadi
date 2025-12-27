'use client';
import Link from 'next/link';
import { Facebook, Globe, Mail, ExternalLink, Instagram, Youtube } from 'lucide-react';

// Custom X (Twitter) Icon
const XIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom TikTok Icon
const TikTokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202] border-t border-white/5 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container-custom">
        {/* FIX: items-start -> items-center (যাতে মোবাইলে সব সেন্টারে থাকে) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <Link href="/" className="font-heading font-black text-2xl tracking-[0.15em] text-white group">
                JUSTICE FOR<span className="text-primary group-hover:text-red-500 transition-colors"> HADI</span>
            </Link>
            <p className="text-gray-500 text-sm mt-2 font-mono">
              Never Forget. Never Forgive.
            </p>
          </div>

          {/* --- CAMPAIGN SOCIAL LINKS (Inqilab Mancha) --- */}
          {/* FIX: justify-center added for mobile centering */}
          <div className="flex flex-wrap justify-center md:justify-end gap-5 items-center">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/inqilabmoncho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1877F2] transition-colors transform hover:-translate-y-1"
              title="Facebook"
            >
              <Facebook size={20} />
            </a>
            
            {/* X (Twitter) */}
            <a 
              href="https://x.com/InqilabMoncho?fbclid=IwY2xjawO8luVleHRuA2FlbQIxMABicmlkETF3VjlMZ1lHQVdFZkNhS2V1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHp8m-XAlpxvwOJWVjz15u5YQb3So4-Tl_oS_mHdZHTKKgdlQPEgPpHuI7jLH_aem_NYvgThThns5bm65eZioPMg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1"
              title="X (Twitter)"
            >
              <XIcon size={18} />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/accounts/login/?next=%2FInqilab.moncho%2F&source=omni_redirect" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E4405F] transition-colors transform hover:-translate-y-1"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@inqilabmoncho?fbclid=IwY2xjawO8ludleHRuA2FlbQIxMABicmlkETF3VjlMZ1lHQVdFZkNhS2V1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHp8m-XAlpxvwOJWVjz15u5YQb3So4-Tl_oS_mHdZHTKKgdlQPEgPpHuI7jLH_aem_NYvgThThns5bm65eZioPMg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00F2EA] transition-colors transform hover:-translate-y-1"
              title="TikTok"
            >
              <TikTokIcon size={18} />
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@%E0%A6%87%E0%A6%A8%E0%A6%95%E0%A6%BF%E0%A6%B2%E0%A6%BE%E0%A6%AC%20%E0%A6%AE%E0%A6%9E%E0%A7%8D%E0%A6%9A?fbclid=IwY2xjawO8luVleHRuA2FlbQIxMABicmlkETF3VjlMZ1lHQVdFZkNhS2V1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvbohUNiglG-YAjw2bfwJ78tIjhskuEkALj5IiP5DiaDde6kSVduw7Pn6Xa7_aem_XkQbtdaukB-AV08TQ546Hw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF0000] transition-colors transform hover:-translate-y-1"
              title="YouTube"
            >
              <Youtube size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5 my-8" />

        {/* Bottom Bar & Developer Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 font-mono tracking-wider">
          <p className="uppercase text-center md:text-left w-full md:w-auto">
            &copy; {currentYear} Justice For Hadi. All rights reserved.
          </p>
          
          {/* --- DEVELOPER CREDIT SECTION --- */}
          {/* FIX: Mobile e 'flex-col' kept for stacking but centered alignment ensured */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span className="opacity-60 uppercase whitespace-nowrap">Developed by</span>
            
            <div className="flex items-center gap-4">
              {/* Name & Portfolio Link */}
              <a 
                href="https://shakilweb.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 font-bold hover:text-white transition-colors flex items-center gap-2 group whitespace-nowrap"
              >
                Shakil Ahmed
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Vertical Separator */}
              <div className="h-3 w-px bg-white/20"></div>

              {/* Your Personal Icons */}
              <div className="flex items-center gap-3">
                  {/* Portfolio */}
                  <a 
                    href="https://shakilweb.netlify.app" 
                    target="_blank"
                    className="text-gray-400 hover:text-primary transition-colors"
                    title="Visit My Portfolio"
                  >
                    <Globe size={14} />
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/communicate.shakil" 
                    target="_blank"
                    className="text-gray-400 hover:text-[#1877F2] transition-colors"
                    title="My Facebook"
                  >
                    <Facebook size={14} />
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:communicates.shakil@gmail.com" 
                    className="text-gray-400 hover:text-white transition-colors"
                    title="Contact Me"
                  >
                    <Mail size={14} />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}