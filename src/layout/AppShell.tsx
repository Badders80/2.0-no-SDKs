import React from 'react';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-dvh bg-black text-white'>
      <header className='border-b border-white/10'>
        <div className='mx-auto max-w-[1200px] px-6 sm:px-8 h-16 flex items-center'>
          {/* nav goes here */}
        </div>
      </header>

      <main>{children}</main>

      <footer className='mt-24 border-t border-white/10'>
        <div className='mx-auto max-w-[1200px] px-6 sm:px-8 py-16'>
          {/* footer grid goes here */}
        </div>
      </footer>
    </div>
  );
}
