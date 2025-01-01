import React, { useMemo } from 'react';
import * as FaIcons from 'react-icons/fa';
import { memo } from 'react';

function IconCom({ random, color,right,top }) {
  const iconKeys = Object.keys(FaIcons).slice(0, 100);
  const IconComponent = FaIcons[iconKeys[random]];

  // Memoize the size calculation to avoid recalculating on each render
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const { h, w } = useMemo(() => {
   
   
    const hf = 0.01574074074074074;
    const wf = 0.011458333333333333;
   
    var height = screenHeight * hf;
    var width = screenWidth * wf;

    if (height<10 || width<10){
      height=12;
      width=15;
    }
    return { h: height, w: width };
  }, [screenWidth, screenHeight]);  // Recalculate only when screen size changes

  return (
    <IconComponent
      style={{
        color: color,
        height: `${h}px`,
        width: `${w}px`,
        display: 'inline-block',
        margin: '0',
        padding: '0',
        marginRight: `${-12+right}px`, //12
        marginTop: `${-10+top}px`,   //6.5
      }}
    />
  );
}

export default memo(IconCom);
