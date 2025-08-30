import React from 'react';
import LoginButton from './LoginButton';

/**
 * Closing call‑to‑action inviting users to access the MyStable
 * dashboard. Only the specified copy is used and the "stable"
 * word is highlighted in gold.
 */
export default function MyStableSection() {
  return (
    <section id='mystable' className='bg-black'>
      <div className='mx-auto max-w-[1200px] px-10 sm:px-16 py-24'>
        <p className='uppercase text-sm tracking-widest text-graytext mb-4'>MyStable</p>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
          Everything you need, in one <span className='text-gold'>stable</span> place.
        </h2>
        <p className='text-graytext text-lg mb-10'>
          Manage your ownership, monitor your assets, and stay connected — simply, securely, and all
          in one spot.
        </p>
        <div className='inline-block'>
          <a href='/mystable'>
            <LoginButton label='Enter MyStable' />
          </a>
        </div>
      </div>
    </section>
  );
}
