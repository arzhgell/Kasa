import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import homes from 'assets/json/logements.json';

import { Avatar } from 'components/Avatar';
import { Drawer } from 'components/Drawer';
import { Hero } from 'components/Hero';
import { Stars } from 'components/Stars';
import { Tag } from 'components/Tag';

type HomeType = {
  id: string;
  title: string;
  cover: string;
  description: string;
  location: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  tags: string[];
  equipments: string[];
};

export function HomeDetail() {
  const { id } = useParams();
  const [home, setHome] = useState({} as HomeType);

  const fetchHome = async () => {
    setHome(homes.find((home) => home.id === id) as HomeType);
  };

  useEffect(() => {
    fetchHome();
  }, []);

  return home ? (
    <main className="flex flex-col gap-[16px]">
      <Hero
        backgroundImage={home.cover}
        label=""
        className="h-[255px] md:h-[415px]"
      />
      <div className="flex flex-col gap-4">
        <div className="text-primary flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[36px]">{home.title}</p>
            <p className="text-[18px]">{home.location}</p>
            <div className="flex gap-2">
              {home.tags?.map((tag) => {
                return <Tag label={tag} />;
              })}
            </div>
          </div>
          <div className="flex w-full justify-between flex-row-reverse md:flex-col md:w-fit md:h-fit items-center gap-2">
            <div className="flex items-center gap-2">
              <p className="text-[18px] w-min text-right">{home.host?.name}</p>
              <Avatar img={home.host?.picture} />
            </div>
            <Stars rate={Number(home.rating)} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Drawer label="Description" content={home.description} />{' '}
          <Drawer
            label="Equipements"
            content={
              <div className="flex flex-col">
                {home.equipments?.map((equipment) => {
                  return <p>{equipment}</p>;
                })}
              </div>
            }
          />
        </div>
      </div>
    </main>
  ) : (
    <p>Loading...</p>
  );
}
