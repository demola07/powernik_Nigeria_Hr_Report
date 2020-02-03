import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import moment from 'moment';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EmployeeReportForm = () => {
  // const [employeeDetails, setEmployeeDetails] = useState({
  //   name: {
  //     empName: ''
  //   },
  //   image: {
  //     empImage: ''
  //   },
  //   day: {
  //     monday: '',
  //     tuesday: '',
  //     wednesday: '',
  //     thursday: '',
  //     friday: ''
  //   },
  //   bonus: {
  //     mondayBonus: '',
  //     tuesdayBonus: '',
  //     wednesdayBonus: '',
  //     thursdayBonus: '',
  //     fridayBonus: ''
  //   }
  // });

  // state destructuring
  // const {
  //   name: { empName }
  // } = employeeDetails;
  // const {
  //   day: { monday, tuesday, wednesday, thursday, friday }
  // } = employeeDetails;
  // const {
  //   bonus: {
  //     mondayBonus,
  //     tuesdayBonus,
  //     wednesdayBonus,
  //     thursdayBonus,
  //     fridayBonus
  //   }
  // } = employeeDetails;

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setEmployeeDetails({
  //     ...employeeDetails,
  //     [name]: value
  //   });
  //   console.log(employeeDetails);
  // };

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setEmployeeDetails(prevState => {
  //     return {
  //       ...prevState,
  //       name: value
  //     };
  //   });
  //   console.log(employeeDetails);
  // };

  const [name, setName] = useState('');

  const [time, setTime] = useState({
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: ''
  });
  const { monday, tuesday, wednesday, thursday, friday } = time;

  const handleNameChange = event => {
    const { value } = event.target;
    setName(value);
    console.log(name);
  };
  const handleTimeChange = event => {
    const { name, value } = event.target;
    setTime({ ...time, [name]: value });
    console.log(time);
  };

  const RESUMPTION_TIME = '09:00';

  //Calculate Daily Bonus
  const getBonus = (resumptionTime, day) => {
    const resumeTime = moment(resumptionTime, 'HH:mm');

    const actualTime = moment(day, 'HH:mm');
    const difference = moment.duration(resumeTime.diff(actualTime));
    const mins = difference.asMinutes();
    const minutes = Math.floor(mins);

    const bonus = (minutes / 5) * 50;
    return bonus;
  };

  // const res = moment(RESUME, 'HH:mm');

  // const mon = moment(monday, 'HH:mm');
  // console.log(mon);

  // const duration = moment.duration(res.diff(mon));
  // const mins = duration.asMinutes();
  // const dur = Math.floor(mins);
  // console.log(dur);

  // const getImage = async () => {
  //   const res = await axios.get('https://randomuser.me/api/?inc=picture');
  //   console.log(res.data.results[0].picture.medium);
  // };
  // getImage();

  const report = {
    name: name,
    image: '',
    bonus: {
      mondayBonus: getBonus(RESUMPTION_TIME, monday),
      tuesdayBonus: getBonus(RESUMPTION_TIME, tuesday),
      wednesdayBonus: getBonus(RESUMPTION_TIME, wednesday),
      thursdayBonus: getBonus(RESUMPTION_TIME, thursday),
      fridayBonus: getBonus(RESUMPTION_TIME, friday)
    }
  };
  console.log(report);

  return (
    <>
      <Container>
        <h1 className='text-center bg-secondary p-3 mb-4'>
          Employee Report Form
        </h1>
        <Form>
          <Form.Group>
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Name'
              name='name'
              value={name}
              required
              onChange={e => handleNameChange(e)}
            />
          </Form.Group>

          <p className='text-black font-italic text-center text-uppercase font-weight-bold'>
            Enter time employee arrived on the following days
          </p>

          <Form.Group>
            <Form.Label>Monday</Form.Label>
            <Form.Control
              type='time'
              min='00:00'
              max='09:00'
              required
              name='monday'
              value={monday}
              onChange={e => handleTimeChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Tuesday</Form.Label>
            <Form.Control
              type='time'
              min='00:00'
              max='09:00'
              required
              name='tuesday'
              value={tuesday}
              onChange={e => handleTimeChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Wednesday</Form.Label>
            <Form.Control
              type='time'
              min='00:00'
              max='09:00'
              required
              name='wednesday'
              value={wednesday}
              onChange={e => handleTimeChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Thursday</Form.Label>
            <Form.Control
              type='time'
              min='00:00'
              max='09:00'
              required
              name='thursday'
              value={thursday}
              onChange={e => handleTimeChange(e)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Friday</Form.Label>
            <Form.Control
              type='time'
              min='00:00'
              max='09:00'
              required
              name='friday'
              value={friday}
              onChange={e => handleTimeChange(e)}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Add Employee Detail
          </Button>

          <Button variant='success' type='submit' className='float-right'>
            Generate Report
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EmployeeReportForm;
