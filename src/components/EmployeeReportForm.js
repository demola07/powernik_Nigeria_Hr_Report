import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import moment from 'moment';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addEmpolyeeDetail, generateReport } from '../actions/report';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EmployeeReportForm = props => {
  console.log(props);

  let history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector(state => {
    return state.report;
  });
  console.log(state);

  const [name, setName] = useState('');

  const [alert, setAlert] = useState(false);

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

  const report = {
    name: name,
    image: '',
    bonus: {
      mondayBonus: getBonus(RESUMPTION_TIME, monday),
      tuesdayBonus: getBonus(RESUMPTION_TIME, tuesday),
      wednesdayBonus: getBonus(RESUMPTION_TIME, wednesday),
      thursdayBonus: getBonus(RESUMPTION_TIME, thursday),
      fridayBonus: getBonus(RESUMPTION_TIME, friday)
    },
    weekBonus: ''
  };
  console.log(report);

  const onSubmit = event => {
    event.preventDefault();
    dispatch(addEmpolyeeDetail(report));
    setName('');
    setTime({
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: ''
    });
  };

  const onGenerateReport = event => {
    event.preventDefault();

    // if (!state.length || state.length <= 2) {
    //   setAlert(true);
    //   setTimeout(() => {
    //     setAlert(false);
    //   }, 3000);
    //   return;
    // }
    history.push('/report');
    // dispatch(generateReport());
  };

  return (
    <>
      <Container>
        <h1 className='text-center bg-secondary p-3 mb-4'>
          Employee Report Form
        </h1>
        <Form onSubmit={onSubmit}>
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

          {alert && (
            <Alert variant='warning' className='warning'>
              ERROR.....Enter data for all 10 staffs
            </Alert>
          )}
        </Form>
        <Button
          variant='success'
          type='submit'
          className='float-right'
          onClick={onGenerateReport}
        >
          Generate Report
        </Button>
      </Container>
    </>
  );
};

export default EmployeeReportForm;
