// src/components/SectionFullBleed.tsx
import * as React from 'react';

type Props = React.PropsWithChildren<{
  id?: string;
  className?: string;
}>;

const VSPACE = 'py-24';

export default function SectionFullBleed({ id, className = '', children }: Props) {
  return (
    <section id={id} className={`${VSPACE} ${className}`}>
      {children}
    </section>
  );
}
