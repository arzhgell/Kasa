import React from 'react';

export function Avatar({ img }: { img: string }) {
  return (
    <div className="w-[64px] aspect-square rounded-full overflow-hidden">
      <img src={img} alt={img} className="object-cover" />
    </div>
  );
}
