// src/sections/Ownership/OwnershipReimagined.tsx
import React from 'react';
import Section from '../../components/Section';

export default function OwnershipReimagined() {
  return (
    <Section className='bg-black text-center'>
      <p className='text-[11px] tracking-[0.18em] uppercase text-brand-grey'>Our Mission</p>

      <h2 className='mt-2 text-h1 font-extrabold text-white'>
        Ownership <span className='text-brand-gold'>Re-imagined</span>
      </h2>

      <p className='mt-4 max-w-[680px] text-body text-brand-grey mx-auto'>
        Traditional racehorse ownership—expensive, restrictive, and opaque—has historically excluded
        those who dream of experiencing the thrill firsthand. Evolution Stables removes those
        barriers, delivering ownership that’s genuinely accessible, fully transparent, and uniquely
        liquid.
      </p>

      <div className='mt-6'>
        <a
          href='#learn-more'
          className='inline-flex items-center rounded-xl px-5 py-2 text-[13px] font-semibold bg-brand-gold text-black hover:opacity-90'
        >
          Join the Evolution →
        </a>
      </div>
    </Section>
  );
}
