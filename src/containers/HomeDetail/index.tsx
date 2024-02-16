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
    <div>
      <div>
        <Hero
          backgroundImage={home.cover}
          label=""
          className="h-[255px] md:h-[415px]"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-primary flex justify-between">
          <div>
            <p className="text-[36px]">{home.title}</p>
            <p className="text-[18px]">{home.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[18px]">{home.host?.name}</p>
            <Avatar img={home.host?.picture} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            {home.tags?.map((tag) => {
              return <Tag label={tag} />;
            })}
          </div>
          <Stars rate={Number(home.rating)} />
        </div>

        <div className="flex justify-between gap-4">
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
    </div>
  ) : (
    <p>Loading...</p>
  );
}
