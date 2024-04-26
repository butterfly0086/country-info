import React from 'react';
import Header from './Header';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />

      <div className='mt-24 px-24'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
