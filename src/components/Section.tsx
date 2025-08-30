// src/components/Section.tsx
import * as React from "react";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        {children}
      </div>
    </section>
  );
}
