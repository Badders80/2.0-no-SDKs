import React from 'react';

import LoadingSpinner from './LoadingSpinner';

interface PageLoaderProps {
  message?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ message = 'Loading page...' }) => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <LoadingSpinner size='lg' message={message} />
    </div>
  );
};

export default PageLoader;
