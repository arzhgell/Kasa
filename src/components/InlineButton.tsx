import React from 'react';

type InlineButtonType = {
  textColor: string;
  label: string;
};

export function InlineButton({ textColor, label }: InlineButtonType) {
  return <button className={`${textColor}`}>{label}</button>;
}
