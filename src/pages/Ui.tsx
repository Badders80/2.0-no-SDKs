// src/pages/Ui.tsx
import React from 'react';

import Section from '../components/Section';
import SectionFullBleed from '../components/SectionFullBleed';
import Hero from '../components/Hero';
import OwnershipReimagined from '../sections/Ownership/OwnershipReimagined';
import OwnershipTheEvolutionWay from '../sections/Ownership/OwnershipTheEvolutionWay';
import DigitalSyndication from '../sections/Digital/DigitalSyndication';
import EverythingYouNeed from '../sections/CTA/EverythingYouNeed';

export default function Ui() {
  return (
    <>
      <Hero />
      <OwnershipReimagined />
      <OwnershipTheEvolutionWay />
      <DigitalSyndication />
      <EverythingYouNeed />
      <Section>
        <div className='text-sm text-brand-grey'>UI playground complete.</div>
      </Section>
    </>
  );
}
