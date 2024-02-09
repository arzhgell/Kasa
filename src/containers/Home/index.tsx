import { Hero } from 'components/Hero';
import React from 'react';
import homes from 'assets/json/logements.json';
import { Card } from 'components/Card';
export function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero backgroundImage="bg-hero" label="Chez vous, partout et ailleurs" />
      <div className="bg-grey rounded-[25px] p-8 flex flex-wrap justify-between gap-16">
        {homes.slice(0, 6).map((home) => {
          return <Card backgroundImage={home.cover} label={home.title} />;
        })}
      </div>
    </div>
  );
}
