import React, { useState } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SliderType = {
  backgroundImages: string[];
};

export function Slider({ backgroundImages }: SliderType) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div
      className={`relative overflow-hidden rounded-[25px] h-[255px] md:h-[415px]`}
    >
      {currentImage > 0 && (
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="cursor-pointer absolute top-1/2 left-5 text-[64px] text-white"
          onClick={() => {
            setCurrentImage((prev) => prev - 1);
          }}
        />
      )}
      <img
        src={backgroundImages[currentImage]}
        alt="illustration"
        className="w-full h-full object-cover"
      />
      {currentImage < backgroundImages.length - 1 && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className="cursor-pointer top-1/2 absolute right-5 text-[64px] text-white"
          onClick={() => {
            setCurrentImage((prev) => prev + 1);
          }}
        />
      )}
    </div>
  );
}
