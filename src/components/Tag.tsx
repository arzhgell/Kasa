import React from 'react';

type TagType = {
  label: string;
};

export function Tag({ label }: TagType) {
  return (
    <div className="bg-primary rounded-[10px] text-white px-4 w-fit">
      {label}
    </div>
  );
}
