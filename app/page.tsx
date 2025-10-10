import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import Approach from '@/components/Approach';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import BehindTheScenes from '@/components/BehindTheScenes';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ClientLogos />
      <Approach />
      <CaseStudies />
      <Services />
      <WhyChooseUs />
      <BehindTheScenes />
      <CTA />
      <Footer />
    </main>
  );
}
