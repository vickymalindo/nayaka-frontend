import React from 'react';
import { StickyNavbar } from '../../views/molecules/Navbar';
import { EmployeeTable } from '../../views/atoms/EmployeeTable';
import { Typography } from '@material-tailwind/react';

const Employee = () => {
  return (
    <div>
      <StickyNavbar />
      <section className="px-11 mt-12">
        <Typography variant="h4" color="blue-gray">
          List Employee
        </Typography>
        <EmployeeTable onClick={(idEmp) => handleModal(idEmp)} />
      </section>
    </div>
  );
};

export default Employee;
