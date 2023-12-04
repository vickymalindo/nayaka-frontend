import React from 'react';
import { StickyNavbar } from '../../views/molecules/Navbar';
import { Button, Card, Typography } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailEmployee = () => {
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
  const { id } = useParams();

  React.useEffect(() => {
    const getData = async () => {
      const resEmployee = await axios.get(
        `http://localhost:3000/employee/${id}`
      );
      const { data: dataEmployee } = resEmployee;
      const employee = dataEmployee.payload.data[0];
      console.log(employee);

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
    };
    getData();
  }, [id]);

  return (
    <div>
      <StickyNavbar />
      <section className="px-11 py-2 mt-12">
        <Typography variant="h4" color="blue-gray">
          Detail Employee
        </Typography>
        <Card className="p-4 w-max mx-auto">
          <div className="flex gap-4 flex-col">
            <img
              src={`https://randomuser.me/api/portraits/${
                sex === 'M' ? 'men' : 'women'
              }/${id}.jpg`}
              alt="person"
              className="h-96 rounded-lg object-contain object-center mb-4"
            />
            <div>
              <Typography className="text-xl text-black font-bold text-center sm:text-start">{`${firstname} ${middlename} ${lastname}`}</Typography>
              <Typography className="text-base text-slate font-semibold text-center sm:text-start">
                {strDeptId}
              </Typography>
              <Typography className="text-lg text-slate text-center sm:text-start">
                {strPostId}
              </Typography>

              <div className="mt-4 border-b-2 pb-2">
                <Typography>Salary Range: {salaryRange}</Typography>
                <Typography>Annual Income: {strAnnualIncome}</Typography>
                <Typography>Loans: {strLoans}</Typography>
                <Typography>Birthdate: {birthdate.slice(0, 10)}</Typography>
                <Typography>
                  Employed Date: {employedDate.slice(0, 10)}
                </Typography>
                <Typography>Gender: {sex === 'M' ? 'Man' : 'Women'}</Typography>
                <Typography>Age: {strAge}</Typography>
                <Typography>Address: {address}</Typography>
              </div>
            </div>
            <div>
              <Typography className="mb-4">
                Skills :{' '}
                {skills.split(',').map((val, index) => {
                  return (
                    <Button
                      key={index}
                      size="sm"
                      className="mr-2"
                      color="yellow"
                      disabled
                    >
                      {val}
                    </Button>
                  );
                })}
              </Typography>
              <Typography className="mb-4">
                Trainer :{' '}
                <Button size="sm" color="red" disabled>
                  {trainer}
                </Button>
              </Typography>
              <Typography>
                Project :{' '}
                <Button size="sm" color="green" disabled>
                  {project}
                </Button>
              </Typography>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default DetailEmployee;
