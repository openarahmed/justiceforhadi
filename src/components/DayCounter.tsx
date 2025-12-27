'use client';
import { differenceInDays } from 'date-fns';

export default function DayCounter() {
  const deathDate = new Date('2025-12-18'); 
  const today = new Date();
  const daysPassed = differenceInDays(today, deathDate);

  return (
    <div className="w-full bg-primary py-8 text-center text-white border-y border-white/10">
      <h3 className="font-sans text-lg uppercase tracking-widest opacity-90">Time passed without justice</h3>
      <div className="text-6xl md:text-8xl font-heading font-bold mt-2">
        {daysPassed} <span className="text-2xl md:text-4xl">DAYS</span>
      </div>
    </div>
  );
}