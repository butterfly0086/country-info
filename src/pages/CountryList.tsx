import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { CountryProps } from '../types';
import { fetchCountries, searchCountry } from '../features/countrySlice';
import CountryItem from '../components/CountryCard';
import Searchbar from '../components/Searchbar';
import Spinner from '../components/Spinner';

const CountriesList: React.FC = () => {
  const countries = useSelector((state: CountryProps) => state.countries);
  const loaidng = useSelector((state: CountryProps) => state.isLoading);

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const navigate = useNavigate();

  const handleSelectCountry = (alpha3Code: string) => {
    if (alpha3Code) {
      navigate(`/${alpha3Code}/country`);
    }
  };

  const fetchAllCountries = () => {
    dispatch(fetchCountries());
  };

  const handleSearchCountries = (value: string) => {
    if (!value) fetchAllCountries();
    else dispatch(searchCountry(value));
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='w-1/5 self-end mb-6'>
        <Searchbar
          placeholder='Search for Countries...'
          onSearch={handleSearchCountries}
        />
      </div>
      {
        loaidng ? (
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Spinner />
          </div>
        ) : (
          <div className='grid grid-cols-5 gap-4'>
            {countries.map((country) => (
              <CountryItem
                key={country.alpha3Code}
                flag={country.flag}
                name={country.name}
                alpha3Code={country.alpha3Code}
                onSelect={handleSelectCountry}
              />
            ))}
          </div>
        )
      }
    </div>
  );
};

export default CountriesList;
