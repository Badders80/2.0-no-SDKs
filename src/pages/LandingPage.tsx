import React from 'react';
import Hero from '@/sections/Hero/Hero';
import SectionMission from '@/sections/Mission/SectionMission';
import SectionAbout from '@/sections/About/SectionAbout';
import SectionInnovation from '@/sections/Innovation/SectionInnovation';
import SectionMyStable from '@/sections/MyStablePreview/SectionMyStable';
import ParallaxSection from '@/components/ParallaxSection';
import Footer from '@/components/Footer';

import midImage1 from '@/assets/horse-mid1.jpg';
import midImage2 from '@/assets/horse-mid2.jpg';
import midImage3 from '@/assets/horse-mid3.jpg';

export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      <Hero />
      
      <SectionMission />
      <ParallaxSection backgroundImage={midImage1} alt="Close-up horse motion" />

      <SectionAbout />
      <ParallaxSection backgroundImage={midImage2} alt="Horse grazing on plain" />

      <SectionInnovation />
      <ParallaxSection backgroundImage={midImage3} alt="Horse hooves on soil" />

      <SectionMyStable />
      <Footer />
    </div>
  );
}
