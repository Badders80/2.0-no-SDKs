// src/components/CenterSection.tsx
import React from 'react';

export default function CenterSection({
  children,
  className = '',
  max = 'max-w-[900px]', // tweak to taste
}: {
  children: React.ReactNode;
  className?: string;
  max?: string;
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className={`mx-auto ${max} px-6 sm:px-8 text-center`}>{children}</div>
    </section>
  );
}
