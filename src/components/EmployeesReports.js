import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const EmployeesReports = () => {
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

        <Button variant='primary'>Generate New Report</Button>
      </Container>
    </>
  );
};

export default EmployeesReports;
