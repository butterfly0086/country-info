import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchbarProps } from '../types';

const Searchbar: React.FC<SearchbarProps> = ({
  placeholder,
  onSearch,
  value,
}) => {
  const handleKeyUp = (event: any) => {
    if (event.keyCode === 13 && onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className='shadow appearance-none border rounded w-full  text-gray-700 leading-tight flex items-center'>
      <input
        placeholder={placeholder}
        className='py-2 px-3 pr-0 focus:outline-none focus:shadow-outline flex-1 bg-transparent'
        value={value}
        onKeyUp={handleKeyUp}
      />
      <FaSearch className='mx-2' />
    </div>
  );
};

export default Searchbar;
