// src/components/Section.tsx  (make this the single source of truth)
import * as React from "react";

type Props = React.PropsWithChildren<{
  id?: string;
  className?: string;
  bleed?: boolean; // when true, background can go edge-to-edge
}>;

const CONTAINER = "max-w-[1200px] mx-auto px-6 sm:px-8";
const VSPACE = "py-16 sm:py-24";

export default function Section({ id, className = "", bleed = false, children }: Props) {
  return (
    <section id={id} className={`${bleed ? "" : VSPACE} ${className}`}>
      <div className={CONTAINER}>{children}</div>
    </section>
  );
}
