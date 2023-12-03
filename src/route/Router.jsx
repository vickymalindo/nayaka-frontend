import { createBrowserRouter } from 'react-router-dom';
import Employee from '../pages/employee/Employee';
import AddEmployee from '../pages/employee/AddEmployee';
import EditEmployee from '../pages/employee/EditEmployee';

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
]);
