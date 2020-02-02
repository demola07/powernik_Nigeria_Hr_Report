import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const EmployeeReport = () => {
  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Employee Report</h1>

          <h3>Name: John Papa</h3>
          <p>Weekly Bonus Breakdown</p>

          <Table bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Bonus for Monday</th>
                <th>Bonus for Tuesday</th>
                <th>Bonus for Wednesday</th>
                <th>Bonus for Thursday</th>
                <th>Bonus for Friday</th>
                <th>Total Bonus</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mark</td>
                <td>40</td>
                <td>40</td>
                <td>40</td>
                <td>40</td>
                <td>40</td>
                <td>40</td>
              </tr>
            </tbody>
          </Table>
        </Container>

        <Button variant='primary' className='float-right'>
          Back to Reports
        </Button>
      </Jumbotron>
    </>
  );
};

export default EmployeeReport;
