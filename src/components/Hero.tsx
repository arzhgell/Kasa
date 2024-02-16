import React from 'react';

type HeroType = {
  backgroundImage: string;
  label: string;
  className?: string;
};

export function Hero({ backgroundImage, label, className }: HeroType) {
  return (
    <div className={`${className} relative overflow-hidden rounded-[25px]`}>
      <img
        src={backgroundImage}
        alt={label}
        className="w-full h-full object-cover"
      />
      {label && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center text-white  text-[24px] md:text-[48px] ">
          <p>{label}</p>
        </div>
      )}
    </div>
  );
}
