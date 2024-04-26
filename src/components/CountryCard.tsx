import React from 'react';

interface Props {
  flag: string;
  name: string;
  alpha3Code: string;
  onSelect: Function;
}

const CountryItem: React.FC<Props> = ({ flag, name, onSelect, alpha3Code }) => {
  return (
    <div
      className='border p-2 flex flex-col items-center justify-center hover:shadow'
      onClick={() => onSelect(alpha3Code)}
    >
      <img alt={`Flag of ${name}`} src={flag} width={150} height={150} />

      <p className='font-semibold text-xl break-all text-center'>{name}</p>
    </div>
  );
};

export default CountryItem;
