import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';

const EmployeeReport = ({ match }) => {
  console.log(match.params.name);

  const state = useSelector(state => {
    return state.report;
  });
  console.log(state);

  const empReport = state.filter(emp => {
    return emp.name === match.params.name;
  });
  console.log(empReport);
  // console.log(...empReport);
  console.log(empReport[0].name);
  console.log(empReport[0].image);
  console.log(empReport[0].bonus);
  console.log(empReport[0].weekBonus);

  return (
    <>
      <Jumbotron>
        <Container>
          <div>
            <img src={empReport[0].image} alt='employeeImage' />
          </div>
          <h1>Employee Report</h1>

          <h3>Employee Name: {empReport[0].name} </h3>
          <p>Weekly Bonus Breakdown</p>

          <Table bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{empReport[0].bonus.mondayBonus}</td>
                <td>{empReport[0].bonus.tuesdayBonus}</td>
                <td>{empReport[0].bonus.wednesdayBonus}</td>
                <td>{empReport[0].bonus.thursdayBonus}</td>
                <td>{empReport[0].bonus.fridayBonus}</td>
                <td>{empReport[0].weekBonus}</td>
              </tr>
            </tbody>
          </Table>
        </Container>

        <Link to='/report' variant='primary' className='float-right'>
          Back to Reports
        </Link>
      </Jumbotron>
    </>
  );
};

export default EmployeeReport;
