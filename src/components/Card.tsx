import React from 'react';

type CardType = {
  backgroundImage?: string;
  label: string;
};

export function Card({ backgroundImage, label }: CardType) {
  return (
    <div
      className={`relative  h-[340px] aspect-square rounded-[10px] overflow-hidden  flex justify-end flex-col text-white`}
    >
      <img
        src={backgroundImage}
        alt={label}
        className="object-cover w-full h-full"
      />
      <p className="absolute shadow-inner-bottom p-2 w-full h-16">{label}</p>
    </div>
  );
}
