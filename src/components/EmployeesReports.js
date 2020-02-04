import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const EmployeesReports = ({ match }) => {
  const state = useSelector(state => {
    return state.report;
  });

  return (
    <>
      <Container>
        <Table bordered hover className='mb-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Bonuses for the Week</th>
            </tr>
          </thead>

          <tbody>
            {state.length > 0 ? (
              state.map((data, index) => (
                <tr key={index}>
                  <td className='border p-4 style'>
                    <Link to={`${match.url}/${data.name}`}>{data.name}</Link>
                  </td>

                  <td>{data.weekBonus}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='2'>No Data Added</td>
              </tr>
            )}
          </tbody>
        </Table>

        <div className='mt-5'>
          <Link to='/reportForm' className='text-decoration-none'>
            <span className='p-3 text-white bg-success'>
              Generate New Report
            </span>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default EmployeesReports;
