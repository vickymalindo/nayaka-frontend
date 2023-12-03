import React from 'react';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { StickyNavbar } from '../../views/molecules/Navbar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDepartement = () => {
  const [departement, setDepartement] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const departement_name = departement;
    const response = await axios.post('http://localhost:3000/departement', {
      departement_name,
    });
    const { status } = response.data.payload;
    if (status === 200) {
      toast.success('Add departement success !', {
        position: 'top-right',
        autoClose: 2500,
      });
    } else {
      toast.error('Add departement failed !', {
        position: 'top-right',
        autoClose: 2500,
      });
    }
  };

  return (
    <div>
      <StickyNavbar />
      <div className="px-2">
        <Card className="mt-32 w-max p-2 mx-auto">
          <Typography variant="h4" color="blue-gray">
            Add Departement
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
                onChange={(e) => setDepartement(e.target.value)}
              />
            </div>

            <Button className="mt-6 capitalize" fullWidth type="submit">
              Add
            </Button>
          </form>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddDepartement;
