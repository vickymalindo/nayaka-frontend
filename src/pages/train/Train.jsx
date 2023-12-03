import React from 'react';
import { StickyNavbar } from '../../views/molecules/Navbar';
import TrainTable from '../../views/atoms/TrainTable';

const Train = () => {
  return (
    <div>
      <StickyNavbar />
      <TrainTable />
    </div>
  );
};

export default Train;
