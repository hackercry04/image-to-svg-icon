import React, { useState } from 'react';
import Uploader from './Uploader';
import PreviewPage from './Previewpage';

function App() {
  const [image, setImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [density, setDensity] = useState(2);
  const [right, setRight] = useState(2);
  const [top, setTop] = useState(2);

  const handlefilechange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
    } else {
      alert('Please upload a valid image file!');
    }
  };

  const uploadimage = () => {
    if (image) {
      setShowPreview(true);
    } else {
      alert('Please upload an image first!');
    }
  };

  if (showPreview) {
    return (
      <PreviewPage
        image={image}
        density={density}
        right={right}
        top={top}
        onBack={() => setShowPreview(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-purple-500">Image to Icon Converter</h1>
          <p className="text-white text-lg">Transform your images into beautiful icons</p>
        </div>
        
        {/* Sliders Section */}
        <div className="space-y-6 bg-gray-900 p-6 rounded-lg border border-purple-500">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Density ({density})
            </label>
            <input
              type="range"
              min="1"
              max="3"
              value={density}
              onChange={(e) => setDensity(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-xs text-white">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Right Position ({right})
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={right}
              onChange={(e) => setRight(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-xs text-white">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Top Position ({top})
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={top}
              onChange={(e) => setTop(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-xs text-white">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-gray-900 p-8 rounded-lg border border-purple-500">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handlefilechange}
                className="hidden"
                id="file-upload"
              />
              <label 
                htmlFor="file-upload" 
                className="flex flex-col items-center justify-center w-64 h-64 border-2 border-purple-500 border-dashed rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
              >
                <svg 
                  className="w-16 h-16 text-purple-500 mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white text-lg font-medium">Upload Image</span>
                <span className="text-gray-400 text-sm mt-2">Click to browse</span>
              </label>
            </div>
            
            <button
              onClick={uploadimage}
              className="w-full max-w-xs py-3 px-4 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium transition-colors text-white flex items-center justify-center space-x-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span>Convert to Icon</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

