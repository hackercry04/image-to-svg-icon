import React from 'react';
import Uploader from './Uploader';

function PreviewPage({ image, density, right, top, onBack }) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 text-white hover:text-purple-500 transition-colors flex items-center space-x-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>Back</span>
      </button>

      {/* Preview Content */}
      <div >
        <Uploader
          imagefile={image}
          density={density}
          right={right}
          top={top}
        />
      </div>
    </div>
  );
}

export default PreviewPage;

