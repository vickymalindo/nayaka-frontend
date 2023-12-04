import { createBrowserRouter } from 'react-router-dom';
import AddDepartement from '../pages/departement/AddDepartement';
import Departement from '../pages/departement/Departement';
import EditDepartement from '../pages/departement/EditDepartement';
import AddEmployee from '../pages/employee/AddEmployee';
import DetailEmployee from '../pages/employee/DetailEmployee';
import EditEmployee from '../pages/employee/EditEmployee';
import Employee from '../pages/employee/Employee';
import Karyawan from '../pages/karyawan/Karyawan';
import Position from '../pages/position/Position';

export const Router = createBrowserRouter([
  {
    path: '/karyawan',
    element: <Karyawan />,
  },
  {
    path: '/',
    element: <Employee />,
  },
  {
    path: '/add_employee',
    element: <AddEmployee />,
  },
  {
    path: '/edit_employee/:id',
    element: <EditEmployee />,
  },
  {
    path: '/detail_employee/:id',
    element: <DetailEmployee />,
  },
  {
    path: '/departement',
    element: <Departement />,
  },
  {
    path: '/add_departement',
    element: <AddDepartement />,
  },
  {
    path: '/edit_departement/:id',
    element: <EditDepartement />,
  },
  {
    path: '/position',
    element: <Position />,
  },
  // {
  //   path: '/add_position',
  //   element: <AddPosition />,
  // },
  // {
  //   path: '/edit_position/:id',
  //   element: <EditPosition />,
  // },
]);
