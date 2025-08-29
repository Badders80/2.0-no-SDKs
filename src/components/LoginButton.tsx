import React from 'react';

interface LoginButtonProps {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function LoginButton({
  label,
  children,
  onClick,
  className = '',
}: LoginButtonProps) {
  return (
    <button
      disabled
      className={`bg-gray-400 text-gray-600 px-4 py-2 rounded font-semibold cursor-not-allowed ${className}`}
    >
      {children || label || 'Login (Disabled)'}
    </button>
  );
}
