import React from 'react';

type HeroType = {
  backgroundImage: string;
  label: string;
};

export function Hero({ backgroundImage, label }: HeroType) {
  return (
    <div
      className={`${backgroundImage} h-[223px] text-white flex justify-center items-center text-[48px] bg-cover rounded-[25px]`}
    >
      {label}
    </div>
  );
}
