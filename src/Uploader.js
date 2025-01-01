import React, { useEffect, useRef, useState } from 'react';
import Iconecom from './Iconecom'

function Uploader({ imagefile, density,right,top }) {
  const img = new Image();
  const canvasRef = useRef(null);
  const [hex, setHex] = useState([]);
  console.log(density)
  
  // Base dimensions
  const baseWidth = 600;
  const baseHeight = 600;
  const baseHw = 5;

  // Calculate actual hw and SVGs per row based on density
  const hw = baseHw * density;
  const svgsPerRow = Math.floor(baseWidth / hw); // This replaces the hardcoded 120

  useEffect(() => {
    if (imagefile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        img.src = event.target.result;
      };
      reader.readAsDataURL(imagefile);
    }

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      canvas.width = baseWidth;
      canvas.height = baseHeight;
      ctx.drawImage(img, 0, 0, baseWidth, baseHeight);
      const hexArray = extractHexColors(ctx, hw, canvas.width, canvas.height);
      setHex(hexArray);
    };
  }, [imagefile, density]);

  const extractHexColors = (ctx, blockSize, canvasWidth, canvasHeight) => {
    const hexColors = [];
    function rgbToHex(r, g, b) {
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }

    function averageColor(data) {
      let r = 0, g = 0, b = 0;
      const length = data.length;
      for (let i = 0; i < length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      return [
        Math.floor(r / (length / 4)),
        Math.floor(g / (length / 4)),
        Math.floor(b / (length / 4)),
      ];
    }

    for (let y = 0; y < canvasHeight; y += blockSize) {
      for (let x = 0; x < canvasWidth; x += blockSize) {
        const imageData = ctx.getImageData(x, y, blockSize, blockSize, { willReadFrequently: true }).data;
        const [r, g, b] = averageColor(Array.from(imageData));
        hexColors.push(rgbToHex(r, g, b));
      }
    }
    return hexColors;
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          lineHeight: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {hex.map((color, index) => (
          <React.Fragment key={index}>
            <Iconecom
              size={1}
              random={Math.floor(Math.random() * 100)}
              color={color}
              right={right}
              top={top}
            />
            {index % svgsPerRow === svgsPerRow - 1 && (
              <div style={{ width: '100%', height: '0', clear: 'both' }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Uploader;