import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import { tableHeadPosition } from '../../utils/tableHead';
// import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaRegTrashAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PositionTable = () => {
  const [datas, setDatas] = React.useState([]);
  // const navigate = useNavigate();

  const getPosition = async () => {
    const response = await axios.get('http://localhost:3000/position');
    const { data } = response;
    setDatas(data.payload.data);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/position/${id}`);
    console.log(res);
    const { status } = res.data.payload;
    if (status === 200) {
      toast.success('Delete employee success !', {
        position: 'top-right',
        autoClose: 2500,
      });
      getPosition();
    } else {
      toast.error('Delete employee failed !', {
        position: 'top-right',
        autoClose: 2500,
      });
    }
  };

  React.useEffect(() => {
    getPosition();
  }, []);

  return (
    <div className='mt-10 px-4'>
      {/* <Button
        className="mb-3 capitalize"
        onClick={() => navigate('/add_position')}
      >
        Add Position
      </Button> */}
      <Card className='h-full w-full overflow-x-auto'>
        <table className='w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {tableHeadPosition.map((head) => (
                <th
                  key={head}
                  className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal leading-none opacity-70'>
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datas.map((val, index) => {
              return (
                <tr key={val.id} className='even:bg-blue-gray-50/50'>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'>
                      {index + 1}
                    </Typography>
                  </td>
                  <td className='p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'>
                      {val.position_name}
                    </Typography>
                  </td>

                  <td className='p-4 flex justify-between items-center'>
                    {/* <Link to={`/edit_departement/${val.id}`}>
                      <FaPencilAlt className="text-base inline-block my-1 lg:my-0" />
                    </Link> */}
                    <FaRegTrashAlt
                      className='text-base inline-block my-1 lg:my-0 cursor-pointer'
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
};

export default PositionTable;
