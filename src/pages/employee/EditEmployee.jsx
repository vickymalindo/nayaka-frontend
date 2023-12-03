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
import { useParams } from 'react-router-dom';

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
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const age = +strAge;
    const findDept = datasDept.find((value) => {
      return value.departement_name === strDeptId;
    });
    const findPost = datasPost.find((value) => {
      return value.position_name === strPostId;
    });
    const dept_id = findDept.id;
    const post_id = findPost.id;
    const annual_income = +strAnnualIncome;
    const loans = +strLoans;
    const salary_range = salaryRange;
    const employed_date = employedDate;
    const res = await axios.put(`http://localhost:3000/employee/${id}`, {
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
      toast.success('Update employee success !', {
        position: 'top-right',
        autoClose: 2500,
      });
    } else {
      toast.error('Update employee failed !', {
        position: 'top-right',
        autoClose: 2500,
      });
    }
  };

  React.useEffect(() => {
    const getData = async () => {
      const resEmployee = await axios.get(
        `http://localhost:3000/employee/${id}`
      );
      const resDept = await axios.get('http://localhost:3000/departement');
      const resPost = await axios.get('http://localhost:3000/position');
      const { data: dataDept } = resDept;
      const { data: dataPost } = resPost;
      const { data: dataEmployee } = resEmployee;
      const employee = dataEmployee.payload.data[0];

      setFirstname(employee.firstname);
      setMiddlename(employee.middlename);
      setLastname(employee.lastname);
      setBirthdate(employee.birthdate.slice(0, 10));
      setStrAge('' + employee.age);
      setSex(employee.sex);
      setAddress(employee.address);
      setEmployedDate(employee.employed_date.slice(0, 10));
      setStrDeptId(employee.departement_name);
      setStrPostId(employee.position_name);
      setSalaryRange(employee.salary_range);
      setStrAnnualIncome('' + employee.annual_income);
      setStrLoans('' + employee.loans);
      setSkills(employee.skills);
      setTrainer(employee.trainer);
      setProject(employee.project);
      setDatasDept(dataDept.payload.data);
      setDatasPost(dataPost.payload.data);
    };
    getData();
  }, [id]);

  return (
    <div>
      <StickyNavbar />
      <div className="px-10 mt-4">
        <Typography variant="h4" color="blue-gray">
          Edit Employee
        </Typography>

        <form className="mt-8 mb-2 w-full" onSubmit={handleSubmit}>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Firstname"
              size="lg"
              className="inline-block"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Input
              variant="outlined"
              label="Middlename"
              size="lg"
              className="inline-block"
              value={middlename}
              onChange={(e) => setMiddlename(e.target.value)}
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Lastname"
              size="lg"
              className="inline-block"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <Input
              variant="outlined"
              label="Birthdate"
              size="lg"
              className="inline-block"
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Age"
              size="lg"
              className="inline-block"
              type="number"
              value={strAge}
              onChange={(e) => setStrAge(e.target.value)}
            />
            <Input
              variant="outlined"
              label="Sex"
              size="lg"
              className="inline-block"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Address"
              size="lg"
              className="inline-block"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              variant="outlined"
              label="Employed Date"
              size="lg"
              className="inline-block"
              type="date"
              value={employedDate}
              onChange={(e) => setEmployedDate(e.target.value)}
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Salary Range"
              size="lg"
              className="inline-block"
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
            />
            <Input
              variant="outlined"
              label="Annual Income"
              size="lg"
              className="inline-block"
              type="number"
              value={strAnnualIncome}
              onChange={(e) => setStrAnnualIncome(e.target.value)}
            />
          </div>
          <div className="flex gap-4 my-4 flex-col md:flex-row">
            <Input
              variant="outlined"
              label="Loans"
              size="lg"
              className="inline-block"
              type="number"
              value={strLoans}
              onChange={(e) => setStrLoans(e.target.value)}
            />
            <Select
              variant="outlined"
              label="Departement"
              selected={() => {
                return strDeptId;
              }}
              value={strDeptId}
              onChange={(value) => setStrDeptId(value ?? '')}
            >
              {datasDept.map((val) => {
                return (
                  <Option key={val.id} value={val.departement_name}>
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
              selected={() => {
                return strPostId;
              }}
              value={strPostId}
              onChange={(value) => setStrPostId(value ?? '')}
            >
              {datasPost.map((val) => {
                return (
                  <Option key={val.id} value={val.position_name}>
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
              value={skills}
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
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
              required
            />
            <Input
              variant="outlined"
              label="Project"
              size="lg"
              className="inline-block"
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            />
          </div>
          <Button className="mt-6 capitalize" fullWidth type="submit">
            Edit
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddEmployee;
