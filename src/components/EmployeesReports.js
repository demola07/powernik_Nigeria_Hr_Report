import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';

const EmployeesReports = ({ match }) => {
  const dispatch = useDispatch();

  const state = useSelector(state => {
    return state.report;
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
            {state.length > 0 ? (
              state.map((data, index) => (
                <tr key={index}>
                  <Link to={`${match.url}/${data.name}`}>
                    <td>{data.name}</td>
                  </Link>

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

        <Link to='/reportForm' variant='primary'>
          Generate New Report
        </Link>
      </Container>
    </>
  );
};

export default EmployeesReports;
