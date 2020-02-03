import { ADD_EMPLOYEE_DETAIL, GENERATE_REPORT } from './types';
import axios from 'axios';

export const addEmpolyeeDetail = report => async dispatch => {
  try {
    const res = await axios.get('https://randomuser.me/api/?inc=picture');
    employeeImage = res.data.results[0].picture.medium;
    report.image = employeeImage;
  } catch (error) {
    console.error(error);
  }
  dispatch({
    type: ADD_EMPLOYEE_DETAIL,
    payload: report
  });
};

export const generateReport = () => dispatch => {};
