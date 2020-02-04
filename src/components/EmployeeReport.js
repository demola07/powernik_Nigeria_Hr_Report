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

  return (
    <>
      <Jumbotron>
        <Container>
          <h1 className='mb-4 shadow p-4 mb-4 text-center'>Employee Report</h1>
          <div className='container'>
            <div>
              <img
                src={empReport[0].image}
                alt='employeeImage'
                className='rounded-lg mb-4'
              />
            </div>
            <div>
              <h5 className='mb-4'>
                Employee Name:{' '}
                <span className='font-weight-bold display-6'>
                  {empReport[0].name}
                </span>{' '}
              </h5>
              <p>Weekly Bonus Breakdown</p>

              <Table bordered hover variant='secondary'>
                <thead>
                  <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th className='bg-dark text-white'>Total</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{empReport[0].bonus.mondayBonus}</td>
                    <td>{empReport[0].bonus.tuesdayBonus}</td>
                    <td>{empReport[0].bonus.wednesdayBonus}</td>
                    <td>{empReport[0].bonus.thursdayBonus}</td>
                    <td>{empReport[0].bonus.fridayBonus}</td>
                    <td className='bg-dark text-white'>
                      {empReport[0].weekBonus}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Container>

        <Link
          to='/report'
          variant='primary'
          className='float-right mt-4 text-decoration-none'
        >
          <span className='p-3 text-white bg-success'>Back to Reports</span>
        </Link>
      </Jumbotron>
    </>
  );
};

export default EmployeeReport;
