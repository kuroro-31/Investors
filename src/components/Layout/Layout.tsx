import React from 'react';

import Navbar from '../Navbar/Navbar';

const Layout:React.FC = ({ children }) => (
    <>
      <Navbar />
      {children}
    </>
  )
export default Layout;