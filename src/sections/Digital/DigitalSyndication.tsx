// src/sections/Digital/DigitalSyndication.tsx
import React from 'react';

import Section from '../../components/Section';
import bandImg from '../../assets/racelegs.png'; // optional: add as a separator above via a separate SectionFullBleed

export default function DigitalSyndication() {
  return (
    <Section className='bg-black'>
      <h2 className='text-sm uppercase tracking-[0.18em] text-brand-grey'>Innovation</h2>
      <h3 className='mt-2 text-3xl font-bold text-white'>Digital-Syndication</h3>
      <p className='mt-4 max-w-prose text-sm text-brand-grey'>
        Tokenised, short-term leasing that keeps ownership dynamic and liquid.
      </p>

      <div className='mt-10 grid gap-10 sm:grid-cols-2'>
        <div>
          <h4 className='text-brand-gold font-semibold'>Fractional Ownership</h4>
          <p className='mt-2 text-sm text-brand-grey'>Start small; scale as you like.</p>
        </div>
        <div>
          <h4 className='text-brand-gold font-semibold'>Performance Linked</h4>
          <p className='mt-2 text-sm text-brand-grey'>Value anchored to real-world results.</p>
        </div>
        <div>
          <h4 className='text-brand-gold font-semibold'>Compliant by Design</h4>
          <p className='mt-2 text-sm text-brand-grey'>Aligned with NZTR & relevant frameworks.</p>
        </div>
        <div>
          <h4 className='text-brand-gold font-semibold'>Community Driven</h4>
          <p className='mt-2 text-sm text-brand-grey'>Transparent, shared experience.</p>
        </div>
      </div>
    </Section>
  );
}
