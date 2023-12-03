import React from 'react';
import { StickyNavbar } from '../../views/molecules/Navbar';
import { EmployeeTable } from '../../views/atoms/EmployeeTable';

const Employee = () => {
  return (
    <>
      <StickyNavbar />
      <EmployeeTable />
    </>
  );
};

export default Employee;
