import { HeroSection } from '@/application/components/homePage/HeroSection';
import { ServicesSection } from '@/application/components/homePage/ServicesSection';
import { SellersSection } from '@/application/components/homePage/SellersSection';
import { ChooseUsSection } from '@/application/components/homePage/ChooseUsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SellersSection />
      <ChooseUsSection />
    </>
  );
}
