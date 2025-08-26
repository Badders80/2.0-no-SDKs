import React from 'react';
import Hero from '@/sections/Hero/Hero';
import SectionMission from '@/sections/Mission/SectionMission';
import SectionAbout from '@/sections/About/SectionAbout';
import SectionInnovation from '@/sections/Innovation/SectionInnovation';
import SectionMyStable from '@/sections/MyStablePreview/SectionMyStable';
import ParallaxSection from '@/components/ParallaxSection';

import midImage1 from '@/assets/horse-mid1.jpg';
import midImage2 from '@/assets/horse-mid2.jpg';
import midImage3 from '@/assets/horse-mid3.jpg';

export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      <Hero />
      
      <SectionMission />
      <ParallaxSection imageUrl={midImage1} alt="Close-up horse motion" />

      <SectionAbout />
      <ParallaxSection imageUrl={midImage2} alt="Horse grazing on plain" />

      <SectionInnovation />
      <ParallaxSection imageUrl={midImage3} alt="Horse hooves on soil" />

      <SectionMyStable />
    </div>
  );
}
