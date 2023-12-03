import React from 'react';
import { StickyNavbar } from '../../views/molecules/Navbar';
import DepartementTable from '../../views/atoms/DepartementTable';

const Departement = () => {
  return (
    <div>
      <StickyNavbar />
      <DepartementTable />
    </div>
  );
};

export default Departement;
