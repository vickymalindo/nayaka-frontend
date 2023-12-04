// import React from 'react';
import { Typography } from '@material-tailwind/react';
import { EmployeeTable } from '../../views/atoms/EmployeeTable';
import { StickyNavbar } from '../../views/molecules/Navbar';

const Employee = () => {
  return (
    <div>
      <StickyNavbar />
      <section className='px-11 mt-12'>
        <Typography variant='h4' color='blue-gray'>
          List Employee
        </Typography>
        <EmployeeTable />
      </section>
    </div>
  );
};

export default Employee;
