import React from 'react';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Purple spinning circle */}
          <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-purple-500">Converting Your Image</h2>
          <p className="text-gray-400">Creating your icon masterpiece...</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;

