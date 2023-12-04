import { Card, Typography, Button } from '@material-tailwind/react';
import React from 'react';
import axios from 'axios';
import { tableHeadEmployee } from '../../utils/tableHead';
import { FaRegEye, FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function EmployeeTable({ onClick }) {
  const [datas, setDatas] = React.useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/employee/${id}`);
    const { status } = res;
    if (status === 200) {
      toast.success('Delete employee success !', {
        position: 'top-right',
        autoClose: 2500,
      });
      getEmployees();
    } else {
      toast.error('Delete employee failed !', {
        position: 'top-right',
        autoClose: 2500,
      });
    }
  };

  const getEmployees = async () => {
    const response = await axios.get('http://localhost:3000/employee');
    const { data } = response;
    setDatas(data.payload.data);
  };

  React.useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="mt-10 px-4">
      <Button
        className="mb-3 capitalize"
        onClick={() => navigate('/add_employee')}
      >
        Add Employee
      </Button>
      <Card className="h-full w-full overflow-x-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHeadEmployee.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datas.map((val, index) => {
              const newBirthdate = val.birthdate.slice(0, 10);
              const newEmployedDate = val.employed_date.slice(0, 10);
              return (
                <tr key={val.id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {val.firstname}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {val.middlename}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {val.lastname}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {newBirthdate}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {val.sex}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {val.address}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {val.age}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {newEmployedDate}
                    </Typography>
                  </td>
                  <td className="p-4 flex justify-between items-center flex-col lg:flex-row">
                    <Link to={`/detail_employee/${val.id}`}>
                      <FaRegEye className="text-base inline-block my-1 lg:my-0" />
                    </Link>
                    <Link to={`/edit_employee/${val.id}`}>
                      <FaPencilAlt className="text-base inline-block my-1 lg:my-0" />
                    </Link>
                    <FaRegTrashAlt
                      className="text-base inline-block my-1 lg:my-0 cursor-pointer"
                      onClick={() => handleDelete(val.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      <ToastContainer />
    </div>
  );
}
