import React from 'react';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { StickyNavbar } from '../../views/molecules/Navbar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const EditDepartement = () => {
  const [departement, setDepartement] = React.useState('');
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const departement_name = departement;
    const response = await axios.put(
      `http://localhost:3000/departement/${id}`,
      {
        departement_name,
      }
    );
    const { status } = response.data.payload;
    if (status === 200) {
      toast.success('Edit departement success !', {
        position: 'top-right',
        autoClose: 2500,
      });
    } else {
      toast.error('Edit departement failed !', {
        position: 'top-right',
        autoClose: 2500,
      });
    }
  };

  React.useEffect(() => {
    const getDepartement = async () => {
      const response = await axios.get(
        `http://localhost:3000/departement/${id}`
      );
      const { departement_name } = response.data.payload.data[0];
      console.log(departement_name);
      setDepartement(departement_name);
    };
    getDepartement();
  }, [id]);

  return (
    <div>
      <StickyNavbar />
      <div className="px-2">
        <Card className="mt-32 w-max p-2 mx-auto">
          <Typography variant="h4" color="blue-gray">
            Edit Departement
          </Typography>

          <form
            className="mt-8 mb-2 w-72 max-w-screen-lg sm:w-[420px]"
            onSubmit={handleSubmit}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Input
                variant="outlined"
                label="Departement"
                required
                value={departement}
                onChange={(e) => setDepartement(e.target.value)}
              />
            </div>

            <Button className="mt-6 capitalize" fullWidth type="submit">
              Edit
            </Button>
          </form>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditDepartement;
