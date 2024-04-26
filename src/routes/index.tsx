import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CountriesList from '../pages/CountryList';
import CountryDetail from '../pages/CountryDetail';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/countries' element={<CountriesList />} />
          <Route path='/:alpha/country' element={<CountryDetail />} />
          <Route path='/' element={<Navigate to='/countries' />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
