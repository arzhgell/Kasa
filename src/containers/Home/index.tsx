import React from 'react';
import { useNavigate } from 'react-router-dom';

import hero from 'assets/illustrations/hero.svg';
import homes from 'assets/json/logements.json';

import { Card } from 'components/Card';
import { Hero } from 'components/Hero';
export function Home() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-8">
      <Hero
        backgroundImage={hero}
        label="Chez vous, partout et ailleurs"
        className="h-[111px] md:h-[223px]"
      />
      <div className="md:bg-grey rounded-[25px] md:p-8 flex flex-wrap justify-between gap-y-8">
        {homes.slice(0, 6).map((home) => {
          return (
            <Card
              backgroundImage={home.cover}
              label={home.title}
              onClick={() => {
                navigate(`/home/${home.id}`);
              }}
            />
          );
        })}
      </div>
    </main>
  );
}
