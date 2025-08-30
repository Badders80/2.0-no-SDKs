import React from 'react';

interface HorseProps {
  name: string;
  trainer: string;
  owned: string;
  performance: string;
  nextRace: string;
}

/**
 * Displays summary information for a single horse. Performance
 * percentage is coloured green or red depending on its sign.
 */
export default function HorseCard({ name, trainer, owned, performance, nextRace }: HorseProps) {
  const isPositive = !performance.startsWith('-');
  const perfClass = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <div className='bg-gray-900 border border-gray-800 p-6 rounded-md flex flex-col space-y-3'>
      <h4 className='text-xl font-semibold'>{name}</h4>
      <p className='text-graytext text-sm'>Trainer: {trainer}</p>
      <p className='text-graytext text-sm'>{owned}</p>
      <p className={perfClass + ' text-sm'}>{performance}</p>
      <p className='text-graytext text-sm'>Next Race: {nextRace}</p>
    </div>
  );
}
