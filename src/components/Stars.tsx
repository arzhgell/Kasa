import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type StarsType = {
  rate: number;
};

export function Stars({ rate }: StarsType) {
  return (
    <div className="flex gap-2">
      {Array(5)
        .fill(' ')

        .map((star, index) => {
          return (
            <FontAwesomeIcon
              icon={faStar}
              className={rate > index ? 'text-primary' : 'text-gray'}
            />
          );
        })}
    </div>
  );
}
