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
  return (
    <div className="bg-[#0A0A0F] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
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
