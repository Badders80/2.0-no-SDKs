import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorFallbackProps {
  error?: Error;
  resetError?: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  return (
    <div className='min-h-[400px] flex items-center justify-center'>
      <div className='text-center max-w-md mx-auto p-6'>
        <AlertCircle className='mx-auto h-12 w-12 text-red-500 mb-4' />
        <h2 className='text-xl font-semibold text-gray-900 mb-2'>Something went wrong</h2>
        <p className='text-gray-600 mb-4'>
          We're sorry, but something unexpected happened. Please try refreshing the page.
        </p>
        {process.env.NODE_ENV === 'development' && error && (
          <details className='text-left bg-gray-100 p-4 rounded mb-4'>
            <summary className='cursor-pointer font-medium'>Error Details</summary>
            <pre className='mt-2 text-sm text-red-600 overflow-auto'>
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
        <button
          onClick={() => window.location.reload()}
          className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
        >
          <RefreshCw className='mr-2 h-4 w-4' />
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
