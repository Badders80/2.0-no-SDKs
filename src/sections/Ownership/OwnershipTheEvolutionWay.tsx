// src/sections/Ownership/OwnershipTheEvolutionWay.tsx
import React from 'react';
import Section from '../../components/Section';

export default function OwnershipTheEvolutionWay() {
  return (
    <Section className='bg-black'>
      <h2 className='text-sm uppercase tracking-[0.18em] text-brand-grey'>Benefits</h2>
      <h3 className='mt-2 text-3xl font-bold text-white'>Ownership the Evolution way</h3>

      <div className='mt-10 grid gap-10 sm:grid-cols-2'>
        <div>
          <h4 className='text-brand-gold font-semibold'>Accessible Ownership</h4>
          <p className='mt-2 text-sm text-brand-grey'>
            Fractional, flexible participation that fits your budget and interest.
          </p>
        </div>
        <div>
          <h4 className='text-brand-gold font-semibold'>Transparency by Default</h4>
          <p className='mt-2 text-sm text-brand-grey'>
            Clear terms, performance tracking, and aligned incentives.
          </p>
        </div>
        <div>
          <h4 className='text-brand-gold font-semibold'>Sensible On-Ramp</h4>
          <p className='mt-2 text-sm text-brand-grey'>
            Great for newcomers and seasoned owners alike.
          </p>
        </div>
        <div>
          <h4 className='text-brand-gold font-semibold'>From Localised to Global</h4>
          <p className='mt-2 text-sm text-brand-grey'>
            Join communities and opportunities across jurisdictions.
          </p>
        </div>
      </div>
    </Section>
  );
}
