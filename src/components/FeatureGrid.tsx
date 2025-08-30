import React from 'react';

/**
 * The About section presents four pillars of the Evolution Stables
 * offering. Each item is presented with a minimalist gold marker and
 * concise description. All copy is provided verbatim.
 */
export default function FeatureGrid() {
  return (
    <section id='about' className='bg-black px-6 md:px-20 py-24'>
      <div className='max-w-6xl mx-auto'>
        <p className='uppercase text-sm tracking-widest text-graytext mb-4'>About</p>
        <h2 className='text-4xl md:text-5xl font-bold mb-16 leading-tight'>
          OWNERSHIP, THE
          <br />
          EVOLUTION WAY
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Accessible Ownership */}
          <div>
            <div className='mb-4'>
              <div className='w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black text-sm font-bold'>
                ●
              </div>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Accessible Ownership</h3>
            <p className='text-graytext'>
              Racehorse ownership used to be complex and out of reach. We’ve removed the traditional
              barriers and simplified the journey, giving you a straightforward path to experience
              the thrill of the winner’s circle.
            </p>
          </div>
          {/* Transparency in Our DNA */}
          <div>
            <div className='mb-4'>
              <div className='w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black text-sm font-bold'>
                ●
              </div>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Transparency in Our DNA</h3>
            <p className='text-graytext'>
              Our model is built to minimise hassle and maximise excitement. Every detail, from
              costs to potential returns, is clear before you commit—no guesswork, no hidden
              surprises, just the pure exhilaration of ownership.
            </p>
          </div>
          {/* Your Racing World, Centralised */}
          <div>
            <div className='mb-4'>
              <div className='w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black text-sm font-bold'>
                ■
              </div>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Your Racing World, Centralised</h3>
            <p className='text-graytext'>
              Manage your entire experience from one simple, secure digital hub. Track your horse’s
              training, communicate with your syndicate, and monitor financials—everything at your
              fingertips.
            </p>
          </div>
          {/* From International Fan to Local Owner */}
          <div>
            <div className='mb-4'>
              <div className='w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black text-sm font-bold'>
                →
              </div>
            </div>
            <h3 className='text-xl font-semibold mb-2'>From International Fan to Local Owner</h3>
            <p className='text-graytext'>
              We’re closing the distance between the world’s racing fans and New Zealand’s elite
              stables. Our platform lets you become a local owner, unlocking the potential of
              world-class bloodstock and the liquidity of a modern, borderless offering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
