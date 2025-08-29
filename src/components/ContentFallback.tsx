import React from 'react';
import { FileText } from 'lucide-react';

interface ContentFallbackProps {
  type: 'page' | 'section' | 'component';
  message?: string;
}

const ContentFallback: React.FC<ContentFallbackProps> = ({ type, message }) => {
  const defaultMessages = {
    page: 'This page is coming soon',
    section: 'Content coming soon',
    component: 'Feature in development',
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <FileText className="h-16 w-16 text-gray-300 mb-4" />
      <h3 className="text-lg font-medium text-gray-600 mb-2">{message || defaultMessages[type]}</h3>
      <p className="text-gray-500 max-w-md">
        {type === 'page' && "We're working on this page. Please check back soon."}
        {type === 'section' && 'This section is being developed and will be available soon.'}
        {type === 'component' && 'This feature is planned for a future release.'}
      </p>
    </div>
  );
};

export default ContentFallback;
