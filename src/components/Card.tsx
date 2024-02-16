import React from 'react';

type CardType = {
  backgroundImage?: string;
  label: string;
  onClick: () => void;
};

export function Card({ backgroundImage, label, onClick }: CardType) {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer w-full md:w-[48%] lg:w-[31%] aspect-square rounded-[10px] overflow-hidden  flex justify-end flex-col text-white`}
    >
      <img
        src={backgroundImage}
        alt={label}
        className="object-cover w-full h-full"
      />
      <p className="absolute shadow-inner-bottom p-2 px-4 w-full h-16 text-[18x]">
        {label}
      </p>
    </div>
  );
}
