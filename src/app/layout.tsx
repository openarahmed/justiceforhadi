import type { Metadata } from "next";
import { Inter, Cinzel, Hind_Siliguri, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// Navbar এখান থেকে সরিয়ে দিন, কারণ এটি page.tsx তে আছে
// import Navbar from "@/components/Navbar"; 

// English Fonts
const inter = Inter({ subsets: ["latin"], variable: '--font-inter', display: 'swap' });
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono', display: 'swap' });

// Bangla Font (Professional & Modern)
const hindSiliguri = Hind_Siliguri({ 
  subsets: ["bengali"], 
  variable: '--font-bangla',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap' 
});

export const metadata: Metadata = {
  title: "শহীদ শরীফ ওসমান হাদীর বিচার চাই | Justice for Hadi",
  description: "জুলাই বিপ্লবীদের অন্যতম কণ্ঠস্বর শরীফ ওসমান হাদীর হত্যার বিচার চাই। ১২ ডিসেম্বর গুলিবিদ্ধ, ১৮ ডিসেম্বর শাহাদাত।",
  
  // --- এই অংশটুকু মিসিং ছিল ---
  metadataBase: new URL('https://justiceforhadi.org'), // ডোমেইন না কেনা পর্যন্ত এটিই থাকুক, সমস্যা নেই
  openGraph: {
    title: "শহীদ শরীফ ওসমান হাদীর বিচার চাই",
    description: "অবিলম্বে খুনিদের গ্রেফতার ও ফাঁসি চাই। প্রতিবাদে শামিল হোন।",
    url: '/',
    siteName: 'Justice for Hadi',
    locale: 'bn_BD',
    type: 'website',
  },
  // ---------------------------
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body className={`
        ${inter.variable} 
        ${cinzel.variable} 
        ${hindSiliguri.variable} 
        ${jetbrains.variable}
        bg-bg-deep text-text-main font-bangla antialiased relative
      `}>
        {/* Film Grain Texture */}
        <div className="bg-noise fixed inset-0 pointer-events-none z-[100]" />
        
        {/* Navbar এখানে দেওয়ার দরকার নেই, page.tsx তে দেওয়াই ভালো (Hero সেকশনের সাথে পজিশনিং ঠিক রাখতে) */}
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}