import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Uploader from './Uploader';
import PreviewPage from './Previewpage';
import LoadingScreen from './Loading-screen';
function App() {
  const [image, setImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [density, setDensity] = useState(1.5);
  const [right, setRight] = useState(4);
  const [top, setTop] = useState(2);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const exampleImages = [
    {
      src: 'demo1.png',
      title: 'Flower Icon art',
      description: 'Flower transformed into icon mosaic'
    },
    {
      src: 'demo2.png',
      title: 'Chameleon',
      description: 'Photo converted to icon style'
    },
    {
      src: 'demo4.png',
      title: 'Squid',
      description: 'Abstract art in icon form'
    },
    {
      src: 'demo6.png',
      title: 'Logo Icon',
      description: 'Brand logo converted to icon'
    }
  ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % exampleImages.length);
  //   }, 3000);
  //   return () => clearInterval(timer);
  // }, []);

  const handlefilechange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid image file!');
    }
  };

  const uploadimage = async () => {
    if (image) {
      setIsLoading(true);
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowPreview(true);
      setIsLoading(false);
    } else {
      alert('Please upload an image first!');
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

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
    <>
      <Helmet>
        <title>Free Image to Icon Converter | Create SVG Icon Art</title>
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
<link rel="manifest" href="site.webmanifest"/>
        <meta name="description" content="Transform your images into stunning icon-based art with our free converter. Create SVG icons and icon mosaics perfect for Cricut projects and digital art!" />
        <meta name="keywords" content="image to icon, svg converter, icon art, icon mosaic, cricut design, digital art, free converter" />
        <meta property="og:title" content="Free Image to Icon Converter | Create SVG Icon Art" />
        <meta property="og:description" content="Transform your images into stunning icon-based art. Free, easy-to-use, and perfect for Cricut projects!" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-black text-white flex flex-col">
        <main className="flex-grow px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-purple-500 mb-4">
                Image to Icon Converter
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Convert Your Image to SVG Icon Art in Just a Few Clicks!
              </p>
              <div className="mt-6 space-y-4 text-gray-300">
                <p className="text-lg">
                  Transform your images into stunning icon-based art with our free, easy-to-use tools. 
                  Whether you want to convert to SVG or create unique icon mosaics, we've got you covered!.
                </p>
                <ul className="flex flex-wrap justify-center gap-8 mt-6 text-purple-400">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Free Image to SVG Icon Conversion
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Simple, Fast Icon Art Creation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Perfect for Cricut Projects
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Example Slider */}
              <div className="bg-gray-900 p-6 rounded-lg border border-purple-500">
                <h2 className="text-xl font-semibold mb-4 text-purple-400">Example Conversions</h2>
                <div className="relative aspect-square">
                  {exampleImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        currentSlide === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                        <h3 className="text-lg font-semibold text-purple-400">{image.title}</h3>
                        <p className="text-sm text-gray-300">{image.description}</p>
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {exampleImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentSlide === index ? 'bg-purple-500' : 'bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div class="bg-gray-900 p-4 rounded-lg border border-purple-500 text-white text-center mt-6 max-w-xs mx-auto">
  <h2 class="text-lg font-semibold mb-2">Checkout Our Other Projects</h2>
  <img
  src="link.png"
  alt="Project Image"
  style={{
    width: '30%',
    height: 'auto',
    margin: '0 auto',
    display: 'block'
  }}
/>
  <p class="mb-2 text-sm">Cross platform Copy paste tool</p>
  <a href="https://cliper.click" class="inline-block mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 text-sm">
    Visit Cliper
  </a>
</div>


              </div>

              {/* Converter Controls */}
              <div className="space-y-6">
                {/* Sliders Section */}
                <div className="bg-gray-900 p-6 rounded-lg border border-purple-500">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white">
                        Density ({density==1? <p style={{ color: 'red', fontWeight: 'bold', display: 'inline' }}>
  The density is high. This may slow down your browser.
</p>

:density})
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="3"
                         step="0.5"
                        value={density}
                        onChange={(e) => setDensity(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                      <div className="flex justify-between text-xs text-white">
                        <span>1</span>
                        <span>1.5</span>
                        <span>2</span>
                        <span>2.5</span>
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
                </div>

                {/* Upload Section */}
                <div className="bg-gray-900 p-6 rounded-lg border border-purple-500">
                  <div className="space-y-4">
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
                        className="flex flex-col items-center justify-center w-full aspect-square border-2 border-purple-500 border-dashed rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
                      >
                        {previewUrl ? (
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="h-full w-full object-contain rounded-lg"
                          />
                        ) : (
                          <>
                            <svg 
                              className="w-16 h-16 text-purple-500 mb-4" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
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
                          </>
                        )}
                      </label>
                      
                    </div>
                    
                    <button
                      onClick={uploadimage}
                      className="w-full py-3 px-4 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium transition-colors text-white flex items-center justify-center space-x-2"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
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
          </div>
        </main>

        <footer className="bg-gray-900 mt-12 border-t border-purple-500">
          <div className="max-w-7xl mx-auto px-4 py-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Image to Icon Converter. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

