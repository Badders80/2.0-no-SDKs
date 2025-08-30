import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OurMission from '../components/sections/OurMission';
import MidImageSection from '../components/MidImageSection';
import FeatureGrid from '../components/FeatureGrid';
import MidImageSection2 from '../components/MidImageSection2';
import DigitalSyndication from '../components/DigitalSyndication';
import MidImageSection3 from '../components/MidImageSection3';
import MyStableSection from '../components/MyStableSection';
import FinalImageSection from '../components/FinalImageSection';
import Footer from '../components/Footer';

/**
 * The landing page for Evolution Stables. This page is composed of
 * modular sections declared in the `components` folder. Each section
 * corresponds to a distinct block of content as outlined in the
 * specification provided by the user. No additional text or layout
 * outside of these sections should be introduced here.
 */
export default function Home() {
  return (
    <div className='bg-black text-white'>
      <Navbar />
      <Hero />
      <OurMission />
      <MidImageSection />
      <FeatureGrid />
      <MidImageSection2 />
      <DigitalSyndication />
      <MidImageSection3 />
      <MyStableSection />
      <FinalImageSection />
      <Footer />
    </div>
  );
}
