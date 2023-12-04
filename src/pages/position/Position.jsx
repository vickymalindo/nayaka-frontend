// import React from 'react';
import { Typography } from '@material-tailwind/react';
import PositionTable from '../../views/atoms/PositionTable';
import { StickyNavbar } from '../../views/molecules/Navbar';

const Position = () => {
  return (
    <div>
      <StickyNavbar />
      <section className='px-11 py-2 mt-12'>
        <Typography variant='h4' color='blue-gray'>
          List Position
        </Typography>
        <PositionTable />
      </section>
    </div>
  );
};

export default Position;
