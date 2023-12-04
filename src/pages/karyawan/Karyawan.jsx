import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import React from 'react';
import { tableHeadKaryawan } from '../../utils/tableHead';

const Karyawan = () => {
  const [karyawan, setKaryawan] = React.useState([]);

  React.useEffect(() => {
    const getKaryawan = async () => {
      const res = await axios.get('http://localhost:3000/karyawan');
      const { data } = res.data.payload;
      console.log(res.data.payload.data);
      setKaryawan(data);
    };
    getKaryawan();
  });

  return (
    <div className='px-2'>
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
          <tr>
            {tableHeadKaryawan.map((head) => (
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
          {karyawan.map((val, index) => {
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
                    {val.nik}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {val.nama_karyawan}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {val.alamat}
                  </Typography>
                </td>
                {/* <td className='p-4 flex justify-between items-center flex-col lg:flex-row'>
                  <Link to={`/detail_employee/${val.id}`}>
                    <FaRegEye className='text-base inline-block my-1 lg:my-0' />
                  </Link>
                  <Link to={`/edit_employee/${val.id}`}>
                    <FaPencilAlt className='text-base inline-block my-1 lg:my-0' />
                  </Link>
                  <FaRegTrashAlt
                    className='text-base inline-block my-1 lg:my-0 cursor-pointer'
                    onClick={() => handleDelete(val.id)}
                  />
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Karyawan;
