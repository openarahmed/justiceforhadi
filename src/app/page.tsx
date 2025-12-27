import Navbar from '@/components/Navbar';
import Hero from '../components/sections/Hero';
import TimelineSection from '@/components/sections/TimelineSection';
import ActionSection from '@/components/sections/ActionSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-bg-deep text-text-main font-bangla selection:bg-primary selection:text-white overflow-x-hidden">
      
      
      {/* ১. হিরো সেকশন */}
      <Hero />

      {/* ২. টাইমলাইন সেকশন */}
      <ActionSection />
      <TimelineSection />

      {/* ৩. অ্যাকশন/ইমেইল সেকশন */}
      <Footer></Footer>
    </main>
  );
}