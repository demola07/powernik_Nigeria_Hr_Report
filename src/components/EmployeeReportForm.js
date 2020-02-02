import React from 'react';
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EmployeeReportForm = () => {
  return (
    <>
      <Container>
        <h1 className='text-center bg-secondary p-3 mb-4'>
          Employee Report Form
        </h1>
        <Form>
          <Form.Group>
            <Form.Label>Employee Name</Form.Label>
            <Form.Control type='email' placeholder='Enter Name' />
          </Form.Group>

          <p className='text-black font-italic text-center text-uppercase font-weight-bold'>
            Enter time employee arrived on the following days
          </p>

          <Form.Group>
            <Form.Label>Monday</Form.Label>
            <Form.Control type='time' placeholder='Password' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Tuesday</Form.Label>
            <Form.Control type='time' placeholder='Password' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Wednesday</Form.Label>
            <Form.Control type='time' placeholder='Password' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Thursday</Form.Label>
            <Form.Control type='time' placeholder='Password' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Friday</Form.Label>
            <Form.Control type='time' placeholder='Password' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Generate Report
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EmployeeReportForm;
