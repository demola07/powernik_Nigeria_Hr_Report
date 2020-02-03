import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';

const EmployeesReports = () => {
  const dispatch = useDispatch();

  const state = useSelector(state => {
    return state.form;
  });
  console.log(state);

  return (
    <>
      <Container>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Bonuses for the Week</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Mark</td>
              <td>40</td>
            </tr>
          </tbody>
        </Table>

        <Link to='/reportForm' variant='primary'>
          Generate New Report
        </Link>
      </Container>
    </>
  );
};

export default EmployeesReports;
