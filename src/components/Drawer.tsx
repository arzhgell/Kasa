import React from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type DrawType = {
  label: string;
  content?: React.ReactNode;
};

export function Drawer({ label, content }: DrawType) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full bg-grey h-fit">
      <div
        className="bg-primary rounded-[10px] text-white px-2 py-2 md:py-4 cursor-pointer flex justify-between items-center"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{label}</p>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      {isOpen && <div className="text-primary p-6">{content}</div>}
    </div>
  );
}
