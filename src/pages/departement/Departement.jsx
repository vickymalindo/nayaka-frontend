import React from 'react';
import { StickyNavbar } from '../../views/molecules/Navbar';
import DepartementTable from '../../views/atoms/DepartementTable';
import { Typography } from '@material-tailwind/react';

const Departement = () => {
  return (
    <div>
      <StickyNavbar />
      <section className="px-11 mt-12">
        <Typography variant="h4" color="blue-gray">
          List Departement
        </Typography>
        <DepartementTable />
      </section>
    </div>
  );
};

export default Departement;
