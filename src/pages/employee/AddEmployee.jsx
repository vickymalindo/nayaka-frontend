import React from 'react';
import { StickyNavbar } from '../../views/molecules/Navbar';
import {
  Input,
  Button,
  Typography,
  Select,
  Option,
} from '@material-tailwind/react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
  const [firstname, setFirstname] = React.useState('');
  const [middlename, setMiddlename] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');
  const [strAge, setStrAge] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [employedDate, setEmployedDate] = React.useState('');
  const [strDeptId, setStrDeptId] = React.useState('');
  const [strPostId, setStrPostId] = React.useState('');
  const [salaryRange, setSalaryRange] = React.useState('');
  const [strAnnualIncome, setStrAnnualIncome] = React.useState('');
  const [strLoans, setStrLoans] = React.useState('');
  const [skills, setSkills] = React.useState('');
  const [trainer, setTrainer] = React.useState('');
  const [project, setProject] = React.useState('');
  const [datasDept, setDatasDept] = React.useState([]);
  const [datasPost, setDatasPost] = React.useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const age = +strAge;
    const dept_id = +strDeptId;
    const post_id = +strPostId;
    const annual_income = +strAnnualIncome;
    const loans = +strLoans;
    const salary_range = salaryRange;
    const employed_date = employedDate;
    const res = await axios.post('http://localhost:3000/employee', {
      firstname,
      middlename,
      lastname,
      birthdate,
      age,
      sex,
      address,
      employed_date,
      dept_id,
      post_id,
      salary_range,
      annual_income,
      loans,
      skills,
      trainer,
      project,
    });
    const { status } = res.data.payload;
    if (status === 200) {
      toast.success('Add employee success !', {
        position: 'top-right',
        autoClose: 2500,
      });
    } else {
      toast.error('Add employee failed !', {
        position: 'top-right',
        autoClose: 2500,
      });
    }
  };

  React.useEffect(() => {
    const getData = async () => {
      const resDept = await axios.get('http://localhost:3000/departement');
      const resPost = await axios.get('http://localhost:3000/position');
      const { data: dataDept } = resDept;
      const { data: dataPost } = resPost;
      setDatasDept(dataDept.payload.data);
      setDatasPost(dataPost.payload.data);
    };
    getData();
  }, []);

  return (
    <div>
      <StickyNavbar />
      <div className="px-10 mt-4">
        <Typography variant="h4" color="blue-gray">
          Form Employee
        </Typography>

        <form className="mt-8 mb-2 w-full" onSubmit={handleSubmit}>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Firstname"
              size="lg"
              className="inline-block"
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <Input
              variant="outlined"
              label="Middlename"
              size="lg"
              className="inline-block"
              onChange={(e) => setMiddlename(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Lastname"
              size="lg"
              className="inline-block"
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <Input
              variant="outlined"
              label="Birthdate"
              size="lg"
              className="inline-block"
              type="date"
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Age"
              size="lg"
              className="inline-block"
              type="number"
              onChange={(e) => setStrAge(e.target.value)}
              required
            />
            <Input
              variant="outlined"
              label="Sex"
              size="lg"
              className="inline-block"
              onChange={(e) => setSex(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Address"
              size="lg"
              className="inline-block"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <Input
              variant="outlined"
              label="Employed Date"
              size="lg"
              className="inline-block"
              type="date"
              onChange={(e) => setEmployedDate(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Salary Range"
              size="lg"
              className="inline-block"
              onChange={(e) => setSalaryRange(e.target.value)}
              required
            />
            <Input
              variant="outlined"
              label="Annual Income"
              size="lg"
              className="inline-block"
              type="number"
              onChange={(e) => setStrAnnualIncome(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Loans"
              size="lg"
              className="inline-block"
              type="number"
              onChange={(e) => setStrLoans(e.target.value)}
              required
            />
            <Select
              variant="outlined"
              label="Departement"
              onChange={(value) => setStrDeptId(value ?? '')}
              required
            >
              {datasDept.map((val) => {
                return (
                  <Option key={val.id} value={val.id.toString()}>
                    {val.departement_name}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Select
              variant="outlined"
              label="Position"
              onChange={(value) => setStrPostId(value ?? '')}
              required
            >
              {datasPost.map((val) => {
                return (
                  <Option key={val.id} value={val.id.toString()}>
                    {val.position_name}
                  </Option>
                );
              })}
            </Select>
            <Input
              variant="outlined"
              label="Skills"
              size="lg"
              className="inline-block"
              type="text"
              onChange={(e) => setSkills(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Trainer"
              size="lg"
              className="inline-block"
              type="text"
              onChange={(e) => setTrainer(e.target.value)}
              required
            />
            <Input
              variant="outlined"
              label="Project"
              size="lg"
              className="inline-block"
              type="text"
              onChange={(e) => setProject(e.target.value)}
              required
            />
          </div>
          <Button className="mt-6 capitalize" fullWidth type="submit">
            Add
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddEmployee;
