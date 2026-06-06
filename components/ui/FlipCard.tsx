"use client";

import { useState } from "react";
import Tilt from "react-parallax-tilt";

export function FlipCard() {
  const [[flipVertically, flipHorizontally], toggleFlip] = useState([false, false]);

  return (
    <div className="flex items-center justify-center p-8">
      <Tilt 
        flipVertically={flipVertically} 
        flipHorizontally={flipHorizontally}
        className="perspective-1000"
      >
        <div className="flex flex-col justify-center items-center w-[300px] h-[300px] bg-[#006400] text-white border-[5px] border-black rounded-[20px] shadow-2xl transition-all duration-300">
          <div className="flex flex-col items-center justify-center w-full px-4">
            <div className="text-[38px] font-serif italic mb-2">
              Toggle Axis
            </div>
            <hr className="w-full border-white/30 mb-6" />
          </div>
          
          <div className="flex flex-col items-start gap-4 text-[20px]">
            <label className="flex items-center cursor-pointer group">
              <input
                onChange={(ev) => toggleFlip([ev.target.checked, flipHorizontally])}
                checked={flipVertically}
                type="checkbox"
                className="scale-150 h-5 mr-3 accent-white cursor-pointer"
              />
              <span className="group-hover:translate-x-1 transition-transform italic">
                Flip vertically
              </span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                onChange={(ev) => toggleFlip([flipVertically, ev.target.checked])}
                checked={flipHorizontally}
                type="checkbox"
                className="scale-150 h-5 mr-3 accent-white cursor-pointer"
              />
              <span className="group-hover:translate-x-1 transition-transform italic">
                Flip horizontally
              </span>
            </label>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default FlipCard;
