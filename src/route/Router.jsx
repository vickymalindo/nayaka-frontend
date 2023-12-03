import { createBrowserRouter } from 'react-router-dom';
import Employee from '../pages/employee/Employee';
import AddEmployee from '../pages/employee/AddEmployee';
import EditEmployee from '../pages/employee/EditEmployee';
import Departement from '../pages/departement/Departement';
import AddDepartement from '../pages/departement/AddDepartement';
import EditDepartement from '../pages/departement/EditDepartement';
import Position from '../pages/position/Position';

export const Router = createBrowserRouter([
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
