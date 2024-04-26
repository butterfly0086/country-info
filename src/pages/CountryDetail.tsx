import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { CountryProps } from '../types';
import { getCountryInfo } from '../features/countrySlice';
import Spinner from '../components/Spinner';

const Detail = () => {
  const country = useSelector((state: CountryProps) => state.country);
  const loading = useSelector((state: CountryProps) => state.isLoading);

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const { alpha } = useParams();
  const navigate = useNavigate();

  const handleGoback = () => {
    navigate('/countries');
  };

  useEffect(() => {
    if (alpha) {
      dispatch(getCountryInfo(alpha));
    }
  }, []);

  return (
    <>
      {
        loading ? (
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Spinner />
          </div>
        ) : (
          <div className='w-4/5 rounded overflow-hidden shadow m-auto mt-5 p-5 grid grid-cols-3 gap-8'>
            <div className='col-span-1'>
              <img src={country?.flag} className='w-full' />
            </div>

            <div className='col-span-2'>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{country?.name}</div>
                <p className='text-gray-700 text-base'>{country?.region}</p>
              </div>

              <div className='px-6 py-2'>
                <div className='font-bold text-base mb-1'>Population</div>
                <p className='text-gray-700 text-base'>{country?.population}</p>
              </div>

              <div className='px-6 py-2'>
                <div className='font-bold text-base mb-1'>Languages</div>
                <p className='text-gray-700 text-base'>
                  {country?.languages.map((language) => language.name).join(', ')}
                </p>
              </div>

              <div className='px-6 py-2'>
                <div className='font-bold text-base mb-1'>Timezone</div>
                <p className='text-gray-700 text-base'>
                  {country?.timezones.join(', ')}
                </p>
              </div>

              <div className='px-6 py-2'>
                <div className='font-bold text-base mb-1'>Currency</div>
                <p className='text-gray-700 text-base'>
                  {country?.currencies.map((currency) => currency.name).join(', ')}
                </p>
              </div>

              <button className='mx-6 my-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleGoback}>
                Back
              </button>
            </div>
          </div>
        )
      }
    </>
    
  );
};

export default Detail;
