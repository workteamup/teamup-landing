import React from 'react';

export const metadata = {
  title: 'Design System | Brand Guidelines',
  description: 'A comprehensive guide to our brand styles and components',
};

export default function DesignSystemLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-4 px-6 bg-brand-700 text-white">
        <div className="container mx-auto">
          <h1 className="font-heading text-xl font-medium">Brand Design System</h1>
        </div>
      </div>
      {children}
      <footer className="py-6 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-dark-space text-sm">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p className="mt-2">This design system is for internal use only.</p>
        </div>
      </footer>
    </div>
  );
} 