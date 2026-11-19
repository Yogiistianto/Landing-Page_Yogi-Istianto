'use client';

import { useState } from 'react';
import PageBuilderLoader from '@/components/PageBuilderLoader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import FeatureSection from '@/components/sections/FeatureSection';
import EarningsHighlight from '@/components/sections/EarningsHighlight';
import CourseSection from '@/components/sections/CourseSection';
import StepsSection from '@/components/sections/StepsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/Footer';

export default function Page() {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="bg-[#F1F5F9] text-slate-900 min-h-screen overflow-x-hidden relative bg-grid-soft">
      <PageBuilderLoader onComplete={() => setIsReady(true)} />
      <Navbar />
      <main>
        <HeroSection isLoaded={isReady} />
        <StatsBar />
        <FeatureSection />
        <EarningsHighlight />
        <CourseSection />
        <StepsSection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
